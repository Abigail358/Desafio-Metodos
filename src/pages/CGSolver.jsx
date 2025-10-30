// src/pages/CGSolver.js
import React, { useState, useEffect } from 'react';
import { Play, RotateCcw, Download, AlertCircle, CheckCircle } from 'lucide-react';

const Card = ({ children, className = '', gradient = false }) => {
  return (
    <div className={`bg-slate-900/50 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden ${gradient ? 'bg-gradient-to-br from-slate-900/50 to-blue-900/20' : ''} ${className}`}>
      {children}
    </div>
  );
};

const CGSolver = () => {
  const [matrixSize, setMatrixSize] = useState(3);
  const [matrixA, setMatrixA] = useState([]);
  const [vectorB, setVectorB] = useState([]);
  const [initialX, setInitialX] = useState([]);
  const [tolerance, setTolerance] = useState(1e-10);
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

  // Verificar si la matriz es simétrica
  const isSymmetric = (matrix) => {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = i + 1; j < matrix.length; j++) {
        if (matrix[i][j] !== matrix[j][i]) {
          return false;
        }
      }
    }
    return true;
  };

  // Algoritmo del Gradiente Conjugado
  const solveWithCG = () => {
    setIsCalculating(true);
    setError('');
    setSolution(null);
    setIterations([]);

    try {
      // Verificar si la matriz es simétrica
      if (!isSymmetric(matrixA)) {
        setError('La matriz A debe ser simétrica para el método del Gradiente Conjugado');
        setIsCalculating(false);
        return;
      }

      const n = matrixSize;
      let x = [...initialX];
      let r = new Array(n).fill(0);
      let v = new Array(n).fill(0);
      
      // Calcular residuo inicial r = b - Ax
      for (let i = 0; i < n; i++) {
        let sum = 0;
        for (let j = 0; j < n; j++) {
          sum += matrixA[i][j] * x[j];
        }
        r[i] = vectorB[i] - sum;
        v[i] = r[i]; // Primera dirección
      }

      let alpha = 0;
      for (let i = 0; i < n; i++) {
        alpha += r[i] * r[i];
      }

      const historial = [{
        k: 0,
        x: [...x],
        r: [...r],
        v: [...v],
        alpha: alpha,
        beta: 0,
        t: 0,
        s: 0
      }];

      let k = 1;
      let converged = false;

      while (k <= maxIterations && !converged) {
        // u = A * v
        const u = new Array(n).fill(0);
        for (let i = 0; i < n; i++) {
          for (let j = 0; j < n; j++) {
            u[i] += matrixA[i][j] * v[j];
          }
        }

        // v^T * u
        let vTu = 0;
        for (let i = 0; i < n; i++) {
          vTu += v[i] * u[i];
        }

        // t = alpha / (v^T * u)
        const t = alpha / vTu;

        // x_new = x + t * v
        const x_new = new Array(n).fill(0);
        for (let i = 0; i < n; i++) {
          x_new[i] = x[i] + t * v[i];
        }

        // r_new = r - t * u
        const r_new = new Array(n).fill(0);
        for (let i = 0; i < n; i++) {
          r_new[i] = r[i] - t * u[i];
        }

        // beta = (r_new · r_new)
        let beta = 0;
        for (let i = 0; i < n; i++) {
          beta += r_new[i] * r_new[i];
        }

        // s = beta / alpha
        const s = beta / alpha;

        // v_new = r_new + s * v
        const v_new = new Array(n).fill(0);
        for (let i = 0; i < n; i++) {
          v_new[i] = r_new[i] + s * v[i];
        }

        // Guardar iteración
        historial.push({
          k: k,
          x: [...x_new],
          r: [...r_new],
          v: [...v_new],
          u: [...u],
          vTu: vTu,
          t: t,
          beta: beta,
          s: s,
          alpha_old: alpha
        });

        // Actualizar para siguiente iteración
        x = x_new;
        r = r_new;
        v = v_new;
        alpha = beta;

        // Verificar convergencia
        const norm_r = Math.sqrt(beta);
        if (norm_r < tolerance) {
          converged = true;
        }

        k++;
      }

      setIterations(historial);
      setSolution(x);
      
      if (!converged && iterations.length >= maxIterations) {
        setError(`No se alcanzó convergencia en ${maxIterations} iteraciones`);
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
      tolerance,
      maxIterations,
      solution,
      iterations
    };
    
    const blob = new Blob([JSON.stringify(content, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'cg_solution.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto animate-fadeIn">
      {/* Header */}
      <Card gradient className="p-8">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
          RESOLVEDOR - MÉTODO DEL GRADIENTE CONJUGADO
        </h1>
        <p className="text-lg text-slate-300">
          Ingresa tu sistema de ecuaciones y resuélvelo paso a paso
        </p>
      </Card>

      {/* Configuración del Sistema */}
      <Card className="p-8">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <div className="w-1 h-8 bg-gradient-to-b from-green-500 to-emerald-500 rounded-full"></div>
          1. Configuración del Sistema
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-slate-300 mb-2 font-semibold">
              Tamaño del Sistema (n × n)
            </label>
            <select
              value={matrixSize}
              onChange={(e) => setMatrixSize(parseInt(e.target.value))}
              className="w-full p-3 bg-slate-800 border border-slate-600 rounded-lg text-slate-300 focus:border-green-500 focus:ring-1 focus:ring-green-500"
            >
              {[2, 3, 4, 5, 6].map(size => (
                <option key={size} value={size}>{size} × {size}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-slate-300 mb-2 font-semibold">
              Tolerancia (ε)
            </label>
            <input
              type="number"
              value={tolerance}
              onChange={(e) => setTolerance(parseFloat(e.target.value))}
              step="1e-10"
              className="w-full p-3 bg-slate-800 border border-slate-600 rounded-lg text-slate-300 focus:border-green-500 focus:ring-1 focus:ring-green-500"
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
              className="w-full p-3 bg-slate-800 border border-slate-600 rounded-lg text-slate-300 focus:border-green-500 focus:ring-1 focus:ring-green-500"
            />
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
            onClick={solveWithCG}
            disabled={isCalculating}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
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
            <div className="w-1 h-8 bg-gradient-to-b from-green-500 to-emerald-500 rounded-full"></div>
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
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-xl text-center">
                <div className="text-blue-300 text-sm mb-1">Iteraciones Totales</div>
                <div className="text-2xl font-bold text-blue-300">{iterations.length - 1}</div>
              </div>
              <div className="p-4 bg-purple-500/10 border border-purple-500/30 rounded-xl text-center">
                <div className="text-purple-300 text-sm mb-1">Residuo Final</div>
                <div className="text-2xl font-bold text-purple-300">
                  {iterations[iterations.length - 1]?.beta ? Math.sqrt(iterations[iterations.length - 1].beta).toExponential(2) : 'N/A'}
                </div>
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
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {iterations.map((iter, index) => (
                <div key={index} className={`p-6 rounded-xl border ${
                  index === iterations.length - 1 
                    ? 'bg-green-500/10 border-green-500/30' 
                    : 'bg-slate-800/50 border-slate-600/30'
                }`}>
                  <h4 className="font-bold text-lg mb-3 text-cyan-300">
                    Iteración k = {iter.k}
                    {index === iterations.length - 1 && (
                      <span className="ml-2 text-green-400 text-sm">✓ Final</span>
                    )}
                  </h4>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                    <div>
                      <div className="text-slate-400 text-sm mb-1">Vector x⁽ᵏ⁾</div>
                      <div className="font-mono text-xs text-slate-300 space-y-1">
                        {iter.x.map((val, i) => (
                          <div key={i}>x[{i + 1}] = {val.toFixed(6)}</div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <div className="text-slate-400 text-sm mb-1">Residuo r⁽ᵏ⁾</div>
                      <div className="font-mono text-xs text-slate-300 space-y-1">
                        {iter.r.map((val, i) => (
                          <div key={i}>r[{i + 1}] = {val.toExponential(2)}</div>
                        ))}
                      </div>
                    </div>

                    {iter.k > 0 && (
                      <>
                        <div>
                          <div className="text-slate-400 text-sm mb-1">Parámetros</div>
                          <div className="font-mono text-xs text-slate-300 space-y-1">
                            <div>t = {iter.t?.toFixed(6)}</div>
                            <div>s = {iter.s?.toFixed(6)}</div>
                            <div>β = {iter.beta?.toExponential(2)}</div>
                          </div>
                        </div>

                        <div>
                          <div className="text-slate-400 text-sm mb-1">Norma</div>
                          <div className="font-mono text-xs text-slate-300">
                            ||r|| = {iter.beta ? Math.sqrt(iter.beta).toExponential(2) : 'N/A'}
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};

export default CGSolver;