// src/pages/SORSolver.js
import React, { useState, useEffect } from 'react';
import { Play, RotateCcw, Download, AlertCircle, CheckCircle } from 'lucide-react';

const Card = ({ children, className = '', gradient = false }) => {
  return (
    <div className={`bg-slate-900/50 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden ${gradient ? 'bg-gradient-to-br from-slate-900/50 to-purple-900/20' : ''} ${className}`}>
      {children}
    </div>
  );
};

const SORSolver = () => {
  const [matrixSize, setMatrixSize] = useState(3);
  const [matrixA, setMatrixA] = useState([]);
  const [vectorB, setVectorB] = useState([]);
  const [initialX, setInitialX] = useState([]);
  const [omega, setOmega] = useState(1.25);
  const [tolerance, setTolerance] = useState(1e-6);
  const [maxIterations, setMaxIterations] = useState(100);
  const [solution, setSolution] = useState(null);
  const [iterations, setIterations] = useState([]);
  const [isCalculating, setIsCalculating] = useState(false);
  const [error, setError] = useState('');

  // Inicializar matrices cuando cambia el tamaño
  useEffect(() => {
    const newMatrixA = Array(matrixSize).fill().map(() => Array(matrixSize).fill(0));
    const newVectorB = Array(matrixSize).fill(0);
    const newInitialX = Array(matrixSize).fill(0);
    
    // Establecer algunos valores por defecto para facilitar pruebas
    for (let i = 0; i < matrixSize; i++) {
      newMatrixA[i][i] = 1; // Diagonal principal
      if (i > 0) newMatrixA[i][i-1] = -0.5;
      if (i < matrixSize - 1) newMatrixA[i][i+1] = -0.5;
      newVectorB[i] = 1;
    }
    
    setMatrixA(newMatrixA);
    setVectorB(newVectorB);
    setInitialX(newInitialX);
    setSolution(null);
    setIterations([]);
    setError('');
  }, [matrixSize]);

  // Actualizar un valor de la matriz A
  const updateMatrixA = (row, col, value) => {
    const newMatrix = [...matrixA];
    newMatrix[row][col] = parseFloat(value) || 0;
    setMatrixA(newMatrix);
  };

  // Actualizar un valor del vector b
  const updateVectorB = (index, value) => {
    const newVector = [...vectorB];
    newVector[index] = parseFloat(value) || 0;
    setVectorB(newVector);
  };

  // Actualizar un valor del vector inicial x
  const updateInitialX = (index, value) => {
    const newVector = [...initialX];
    newVector[index] = parseFloat(value) || 0;
    setInitialX(newVector);
  };

  // Verificar si la matriz tiene diagonal dominante
  const hasDiagonalDominance = (matrix) => {
    for (let i = 0; i < matrix.length; i++) {
      let sum = 0;
      for (let j = 0; j < matrix.length; j++) {
        if (i !== j) {
          sum += Math.abs(matrix[i][j]);
        }
      }
      if (Math.abs(matrix[i][i]) <= sum) {
        return false;
      }
    }
    return true;
  };

  // Algoritmo SOR
  const solveWithSOR = () => {
    setIsCalculating(true);
    setError('');
    setSolution(null);
    setIterations([]);

    try {
      const n = matrixSize;
      let x = [...initialX];
      let x_new = [...initialX];
      
      const historial = [{
        k: 0,
        x: [...x],
        error: 0
      }];

      let k = 1;
      let converged = false;

      while (k <= maxIterations && !converged) {
        // Copiar la iteración anterior
        const x_old = [...x];
        
        // Aplicar SOR componente por componente
        for (let i = 0; i < n; i++) {
          let sum1 = 0;
          let sum2 = 0;
          
          // Suma para j < i (componentes ya actualizadas)
          for (let j = 0; j < i; j++) {
            sum1 += matrixA[i][j] * x_new[j];
          }
          
          // Suma para j > i (componentes no actualizadas)
          for (let j = i + 1; j < n; j++) {
            sum2 += matrixA[i][j] * x_old[j];
          }
          
          // Fórmula SOR
          x_new[i] = (1 - omega) * x_old[i] + (omega / matrixA[i][i]) * (vectorB[i] - sum1 - sum2);
        }

        // Calcular error (norma euclidiana de la diferencia)
        let error = 0;
        for (let i = 0; i < n; i++) {
          error += (x_new[i] - x_old[i]) ** 2;
        }
        error = Math.sqrt(error);

        // Guardar iteración
        historial.push({
          k: k,
          x: [...x_new],
          error: error
        });

        // Actualizar para siguiente iteración
        x = [...x_new];

        // Verificar convergencia
        if (error < tolerance) {
          converged = true;
        }

        k++;
      }

      setIterations(historial);
      setSolution(x);
      
      if (!converged && k > maxIterations) {
        setError(`No se alcanzó convergencia en ${maxIterations} iteraciones. Error final: ${historial[historial.length - 1]?.error.toExponential(2)}`);
      }

    } catch (err) {
      setError('Error en el cálculo: ' + err.message);
    } finally {
      setIsCalculating(false);
    }
  };

  // Reiniciar el formulario
  const resetForm = () => {
    setMatrixSize(3);
    setOmega(1.25);
    setSolution(null);
    setIterations([]);
    setError('');
  };

  // Descargar resultados
  const downloadResults = () => {
    const content = {
      matrixA,
      vectorB,
      initialX,
      omega,
      tolerance,
      maxIterations,
      solution,
      iterations
    };
    
    const blob = new Blob([JSON.stringify(content, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'sor_solution.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto animate-fadeIn">
      {/* Header */}
      <Card gradient className="p-8">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          RESOLVEDOR - MÉTODO SOR
        </h1>
        <p className="text-lg text-slate-300">
          Resuelve sistemas de ecuaciones con el método de Sobre Relajación Sucesiva
        </p>
      </Card>

      {/* Configuración del Sistema */}
      <Card className="p-8">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
          1. Configuración del Sistema
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div>
            <label className="block text-slate-300 mb-2 font-semibold">
              Tamaño del Sistema (n × n)
            </label>
            <select
              value={matrixSize}
              onChange={(e) => setMatrixSize(parseInt(e.target.value))}
              className="w-full p-3 bg-slate-800 border border-slate-600 rounded-lg text-slate-300 focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
            >
              {[2, 3, 4, 5, 6].map(size => (
                <option key={size} value={size}>{size} × {size}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-slate-300 mb-2 font-semibold">
              Parámetro ω
            </label>
            <input
              type="number"
              value={omega}
              onChange={(e) => setOmega(parseFloat(e.target.value))}
              step="0.1"
              min="0.1"
              max="1.9"
              className="w-full p-3 bg-slate-800 border border-slate-600 rounded-lg text-slate-300 focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
            />
            <div className="text-xs text-slate-400 mt-1">
              Recomendado: 1.0 - 1.8
            </div>
          </div>

          <div>
            <label className="block text-slate-300 mb-2 font-semibold">
              Tolerancia (ε)
            </label>
            <input
              type="number"
              value={tolerance}
              onChange={(e) => setTolerance(parseFloat(e.target.value))}
              step="1e-6"
              className="w-full p-3 bg-slate-800 border border-slate-600 rounded-lg text-slate-300 focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-slate-300 mb-2 font-semibold">
              Máximo de Iteraciones
            </label>
            <input
              type="number"
              value={maxIterations}
              onChange={(e) => setMaxIterations(parseInt(e.target.value))}
              className="w-full p-3 bg-slate-800 border border-slate-600 rounded-lg text-slate-300 focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
            />
          </div>
        </div>

        {/* Información del parámetro ω */}
        <div className="mb-6 p-4 bg-purple-500/10 border border-purple-500/30 rounded-xl">
          <h4 className="font-bold text-purple-300 mb-2">💡 Información sobre el parámetro ω:</h4>
          <div className="text-sm text-slate-300 space-y-1">
            <p>• <span className="text-yellow-300">0 &lt; ω &lt; 1</span>: Sub-relajación (convergencia más lenta pero estable)</p>
            <p>• <span className="text-green-300">ω = 1</span>: Método de Gauss-Seidel</p>
            <p>• <span className="text-orange-300">1 &lt; ω &lt; 2</span>: Sobre-relajación (convergencia acelerada)</p>
            <p>• <span className="text-red-300">ω ≥ 2</span>: El método puede divergir</p>
          </div>
        </div>

        {/* Matriz A */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4 text-blue-300">Matriz A</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <tbody>
                {matrixA.map((row, i) => (
                  <tr key={i}>
                    {row.map((value, j) => (
                      <td key={j} className="p-2">
                        <input
                          type="number"
                          value={value}
                          onChange={(e) => updateMatrixA(i, j, e.target.value)}
                          step="0.1"
                          className="w-20 p-2 bg-slate-800 border border-slate-600 rounded text-slate-300 text-center focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Verificación de diagonal dominante */}
          <div className="mt-4">
            {hasDiagonalDominance(matrixA) ? (
              <div className="flex items-center gap-2 text-green-400">
                <CheckCircle className="w-4 h-4" />
                <span className="text-sm">La matriz tiene diagonal dominante</span>
              </div>
            ) : (
              <div className="flex items-center gap-2 text-yellow-400">
                <AlertCircle className="w-4 h-4" />
                <span className="text-sm">La matriz NO tiene diagonal dominante (puede afectar la convergencia)</span>
              </div>
            )}
          </div>
        </div>

        {/* Vector b */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4 text-purple-300">Vector b</h3>
          <div className="flex gap-4 flex-wrap">
            {vectorB.map((value, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="text-slate-400">b[{i + 1}] =</span>
                <input
                  type="number"
                  value={value}
                  onChange={(e) => updateVectorB(i, e.target.value)}
                  step="0.1"
                  className="w-24 p-2 bg-slate-800 border border-slate-600 rounded text-slate-300 text-center focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Vector inicial x⁽⁰⁾ */}
        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-4 text-cyan-300">Vector Inicial x⁽⁰⁾</h3>
          <div className="flex gap-4 flex-wrap">
            {initialX.map((value, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="text-slate-400">x[{i + 1}]⁽⁰⁾ =</span>
                <input
                  type="number"
                  value={value}
                  onChange={(e) => updateInitialX(i, e.target.value)}
                  step="0.1"
                  className="w-24 p-2 bg-slate-800 border border-slate-600 rounded text-slate-300 text-center focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Botones de acción */}
        <div className="flex gap-4 flex-wrap">
          <button
            onClick={solveWithSOR}
            disabled={isCalculating}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            <Play className="w-5 h-5" />
            {isCalculating ? 'Calculando...' : 'Resolver Sistema'}
          </button>

          <button
            onClick={resetForm}
            className="flex items-center gap-2 px-6 py-3 bg-slate-700 text-slate-300 rounded-lg font-semibold hover:bg-slate-600 transition-all"
          >
            <RotateCcw className="w-5 h-5" />
            Reiniciar
          </button>

          {solution && (
            <button
              onClick={downloadResults}
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all"
            >
              <Download className="w-5 h-5" />
              Descargar Resultados
            </button>
          )}
        </div>

        {/* Mensaje de error */}
        {error && (
          <div className="mt-4 p-4 bg-red-500/10 border border-red-500/30 rounded-xl flex items-center gap-3">
            <AlertCircle className="w-5 h-5 text-red-400" />
            <p className="text-red-300">{error}</p>
          </div>
        )}
      </Card>

      {/* Resultados */}
      {solution && (
        <Card className="p-8">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
            <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
            2. Resultados
          </h2>

          {/* Solución Final */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 text-green-300 flex items-center gap-2">
              <CheckCircle className="w-6 h-6" />
              Solución Final
            </h3>
            <div className="p-6 bg-green-500/10 border border-green-500/30 rounded-xl">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {solution.map((value, i) => (
                  <div key={i} className="text-center p-4 bg-slate-800/50 rounded-lg">
                    <div className="text-slate-400 text-sm mb-1">x[{i + 1}]</div>
                    <div className="text-2xl font-bold text-green-300">
                      {value.toFixed(6)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Resumen de Convergencia */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 text-blue-300">Resumen de Convergencia</h3>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-xl text-center">
                <div className="text-blue-300 text-sm mb-1">Iteraciones Totales</div>
                <div className="text-2xl font-bold text-blue-300">{iterations.length - 1}</div>
              </div>
              <div className="p-4 bg-purple-500/10 border border-purple-500/30 rounded-xl text-center">
                <div className="text-purple-300 text-sm mb-1">Error Final</div>
                <div className="text-2xl font-bold text-purple-300">
                  {iterations[iterations.length - 1]?.error.toExponential(2)}
                </div>
              </div>
              <div className="p-4 bg-pink-500/10 border border-pink-500/30 rounded-xl text-center">
                <div className="text-pink-300 text-sm mb-1">Parámetro ω</div>
                <div className="text-2xl font-bold text-pink-300">{omega}</div>
              </div>
              <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-xl text-center">
                <div className="text-green-300 text-sm mb-1">Estado</div>
                <div className="text-2xl font-bold text-green-300">✓ Convergido</div>
              </div>
            </div>
          </div>

          {/* Iteraciones Detalladas */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-purple-300">Iteraciones Detalladas</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left p-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20">k</th>
                    {Array.from({ length: matrixSize }, (_, i) => (
                      <th key={i} className="text-left p-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20">
                        x[{i + 1}]
                      </th>
                    ))}
                    <th className="text-left p-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20">Error</th>
                  </tr>
                </thead>
                <tbody>
                  {iterations.map((iter, index) => (
                    <tr key={index} className={`border-b border-white/5 ${
                      index === iterations.length - 1 ? 'bg-green-500/10' : ''
                    }`}>
                      <td className="p-3 font-mono text-cyan-300 font-bold">
                        {iter.k}
                        {index === iterations.length - 1 && (
                          <span className="ml-1 text-green-400">✓</span>
                        )}
                      </td>
                      {iter.x.map((value, i) => (
                        <td key={i} className="p-3 font-mono text-slate-300">
                          {value.toFixed(6)}
                        </td>
                      ))}
                      <td className="p-3 font-mono text-orange-300">
                        {iter.error.toExponential(2)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};

export default SORSolver;