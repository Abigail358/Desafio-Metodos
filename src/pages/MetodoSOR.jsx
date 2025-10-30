// src/pages/MetodoSOR.js
import React from 'react';

const Card = ({ children, className = '', gradient = false }) => {
  return (
    <div className={`bg-slate-900/50 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden ${gradient ? 'bg-gradient-to-br from-slate-900/50 to-purple-900/20' : ''} ${className}`}>
      {children}
    </div>
  );
};

const MetodoSOR = () => {
  return (
    <div className="space-y-8 max-w-6xl mx-auto animate-fadeIn">
      {/* Header */}
      <Card gradient className="p-8">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          PARTE II: MÉTODO DE SOBRE RELAJACIÓN SUCESIVA (SOR)
        </h1>
        <p className="text-lg text-slate-300">
          Técnica iterativa mejorada para resolver sistemas de ecuaciones lineales con parámetro de relajación ω
        </p>
      </Card>

      {/* 1. ¿Qué es el Método SOR? */}
      <Card className="p-8">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
          1. ¿Qué es el Método SOR?
        </h2>
        
        <p className="text-slate-300 mb-6 text-lg leading-relaxed">
          El Método de Sobrerelajación Sucesiva (Successive Over-Relaxation - SOR) es una técnica iterativa 
          mejorada del método de <span className="font-bold text-purple-300">Gauss-Seidel</span> que acelera 
          la convergencia mediante la introducción de un <span className="font-bold text-pink-300">parámetro de relajación ω</span> (omega).
        </p>

        <div className="p-6 bg-amber-500/10 border border-amber-500/30 rounded-xl mb-6">
          <h3 className="font-bold text-amber-200 mb-3 text-lg">📜 Contexto Histórico</h3>
          <p className="text-amber-100 text-sm leading-relaxed">
            Desarrollado en la década de 1950 como una mejora natural del método de Gauss-Seidel. 
            El método se popularizó por su uso en computadoras de la época para resolver sistemas grandes 
            que surgían en problemas de ingeniería.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-blue-500/10 border border-blue-500/30 rounded-xl">
            <h3 className="text-xl font-bold mb-4 text-blue-300">🔄 Evolución de Métodos</h3>
            <div className="space-y-3 text-slate-300">
              <div className="p-3 bg-slate-950/50 rounded-lg">
                <p className="font-semibold text-blue-300">Jacobi →</p>
                <p className="text-slate-400 text-sm">Método básico, usa solo valores anteriores</p>
              </div>
              <div className="p-3 bg-slate-950/50 rounded-lg">
                <p className="font-semibold text-purple-300">Gauss-Seidel →</p>
                <p className="text-slate-400 text-sm">Mejora usando valores actualizados</p>
              </div>
              <div className="p-3 bg-pink-500/10 rounded-lg border border-pink-500/30">
                <p className="font-semibold text-pink-300">SOR →</p>
                <p className="text-slate-400 text-sm">Acelera convergencia con parámetro ω</p>
              </div>
            </div>
          </div>

          <div className="p-6 bg-green-500/10 border border-green-500/30 rounded-xl">
            <h3 className="text-xl font-bold mb-4 text-green-300">✓ Ventajas del SOR</h3>
            <p className="text-slate-300 mb-3">
              A diferencia del Gradiente Conjugado que <span className="font-semibold text-green-300">SOLO funciona con matrices simétricas</span>, 
              el método SOR es más general y puede aplicarse a una mayor variedad de sistemas lineales.
            </p>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-green-400">•</span>
                <span>Más flexible en tipos de matrices</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">•</span>
                <span>Control de convergencia con ω</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">•</span>
                <span>Fácil implementación</span>
              </li>
            </ul>
          </div>
        </div>
      </Card>

      {/* 2. Fundamentos Matemáticos */}
      <Card className="p-8 bg-gradient-to-br from-slate-900/80 to-purple-900/30">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
          2. Fundamentos Matemáticos
        </h2>

        {/* 2.1 Evolución de Métodos Iterativos */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4 text-purple-300">2.1. Evolución de los Métodos Iterativos</h3>

          <div className="space-y-4">
            {/* Método de Jacobi */}
            <div className="p-6 bg-blue-500/10 border border-blue-500/30 rounded-xl">
              <h4 className="font-bold text-blue-300 mb-3">Método de Jacobi (el más básico)</h4>
              <div className="text-center py-3 bg-slate-950/50 rounded-lg mb-3">
                <p className="font-mono text-blue-300 text-sm">
                  xᵢ⁽ᵏ⁺¹⁾ = (1/aᵢᵢ)(bᵢ - Σ aᵢⱼxⱼ⁽ᵏ⁾)
                </p>
              </div>
              <p className="text-slate-400 text-sm">
                <span className="font-semibold text-blue-300">Característica:</span> Usa SOLO valores de la iteración anterior (k)
              </p>
            </div>

            {/* Método de Gauss-Seidel */}
            <div className="p-6 bg-purple-500/10 border border-purple-500/30 rounded-xl">
              <h4 className="font-bold text-purple-300 mb-3">Método de Gauss-Seidel (mejora de Jacobi)</h4>
              <div className="text-center py-3 bg-slate-950/50 rounded-lg mb-3">
                <p className="font-mono text-purple-300 text-sm">
                  xᵢ⁽ᵏ⁺¹⁾ = (1/aᵢᵢ)(bᵢ - Σ aᵢⱼxⱼ⁽ᵏ⁺¹⁾ - Σ aᵢⱼxⱼ⁽ᵏ⁾)
                </p>
              </div>
              <p className="text-slate-400 text-sm">
                <span className="font-semibold text-purple-300">Característica:</span> Usa valores YA ACTUALIZADOS cuando están disponibles
              </p>
              <ul className="text-slate-400 text-xs mt-2 space-y-1">
                <li>• Para j &lt; i: usa xⱼ⁽ᵏ⁺¹⁾ (ya calculado en esta iteración)</li>
                <li>• Para j &gt; i: usa xⱼ⁽ᵏ⁾ (de la iteración anterior)</li>
              </ul>
              <p className="text-green-300 text-xs mt-2 font-semibold">✓ Resultado: Gauss-Seidel converge más rápido que Jacobi</p>
            </div>

            {/* Método SOR */}
            <div className="p-6 bg-pink-500/10 border border-pink-500/30 rounded-xl">
              <h4 className="font-bold text-pink-300 mb-3">Método SOR (mejora de Gauss-Seidel)</h4>
              <div className="text-center py-3 bg-slate-950/50 rounded-lg mb-3">
                <p className="font-mono text-pink-300">
                  xᵢ⁽ᵏ⁺¹⁾ = (1 - ω)xᵢ⁽ᵏ⁾ + ω xᵢ⁽ᴳˢ⁾
                </p>
              </div>
              <p className="text-slate-400 text-sm">
                Donde <span className="font-mono text-pink-300">xᵢ⁽ᴳˢ⁾</span> es el valor que daría Gauss-Seidel
              </p>
              <p className="text-pink-300 text-sm mt-2 font-semibold">
                💡 Idea clave: Después de calcular el nuevo valor con Gauss-Seidel, SOR da un "paso extra" multiplicando por ω.
              </p>
            </div>
          </div>
        </div>

        {/* 2.2 Fórmula del Método SOR */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4 text-pink-300">2.2. Fórmula del Método SOR</h3>
          
          <div className="p-6 bg-pink-500/10 border border-pink-500/30 rounded-xl">
            <p className="text-slate-300 mb-4">
              Para resolver el sistema <span className="font-mono bg-pink-500/20 px-2 py-1 rounded">Ax = b</span>, la fórmula SOR es:
            </p>
            
            <div className="text-center py-4 bg-slate-950/50 rounded-lg mb-4">
              <p className="text-xl font-mono text-pink-300">
                xᵢ⁽ᵏ⁺¹⁾ = (1 - ω)xᵢ⁽ᵏ⁾ + (ω/aᵢᵢ)(bᵢ - Σ aᵢⱼxⱼ⁽ᵏ⁺¹⁾ - Σ aᵢⱼxⱼ⁽ᵏ⁾)
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="p-4 bg-blue-900/20 rounded-lg">
                <p className="font-bold text-blue-300 mb-2">Parte 1: (1 - ω)xᵢ⁽ᵏ⁾</p>
                <p className="text-slate-400">Componente del valor anterior</p>
                <p className="text-slate-300 text-xs mt-1">Si ω = 1, esta parte desaparece</p>
              </div>

              <div className="p-4 bg-purple-900/20 rounded-lg">
                <p className="font-bold text-purple-300 mb-2">Parte 2: ω/aᵢᵢ</p>
                <p className="text-slate-400">Factor de relajación dividido por el elemento diagonal</p>
              </div>

              <div className="p-4 bg-green-900/20 rounded-lg">
                <p className="font-bold text-green-300 mb-2">Parte 3: [bᵢ - Σ aᵢⱼxⱼ⁽ᵏ⁺¹⁾]</p>
                <p className="text-slate-400">Término independiente MENOS suma de términos con valores YA ACTUALIZADOS (j &lt; i)</p>
              </div>

              <div className="p-4 bg-yellow-900/20 rounded-lg">
                <p className="font-bold text-yellow-300 mb-2">Parte 4: [- Σ aᵢⱼxⱼ⁽ᵏ⁾]</p>
                <p className="text-slate-400">MENOS suma de términos con valores ANTIGUOS (j &gt; i)</p>
              </div>
            </div>
          </div>
        </div>

        {/* 2.3 El Parámetro de Relajación ω */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4 text-cyan-300">2.3. El Parámetro de Relajación ω</h3>
          
          <div className="p-6 bg-cyan-500/10 border border-cyan-500/30 rounded-xl mb-4">
            <p className="text-slate-300 mb-4">
              El parámetro ω controla la convergencia del método:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left p-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20">Rango de ω</th>
                    <th className="text-left p-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20">Nombre</th>
                    <th className="text-left p-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20">Comportamiento</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/5">
                    <td className="p-3 font-mono text-blue-300">0 &lt; ω &lt; 1</td>
                    <td className="p-3 text-yellow-300 font-semibold">Sub-relajación</td>
                    <td className="p-3 text-slate-400">Convergencia MÁS LENTA pero más ESTABLE</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="p-3 font-mono text-green-300">ω = 1</td>
                    <td className="p-3 text-green-300 font-semibold">Gauss-Seidel</td>
                    <td className="p-3 text-slate-400">Método estándar</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="p-3 font-mono text-orange-300">1 &lt; ω &lt; 2</td>
                    <td className="p-3 text-orange-300 font-semibold">Sobre-relajación</td>
                    <td className="p-3 text-slate-400">Convergencia MÁS RÁPIDA (si ω es bueno)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono text-red-300">ω ≥ 2</td>
                    <td className="p-3 text-red-300 font-semibold">No converge</td>
                    <td className="p-3 text-slate-400">El método DIVERGE</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-purple-500/10 border border-purple-500/30 rounded-xl">
              <h4 className="font-bold text-purple-300 mb-3">🎯 ¿Cómo elegir ω óptimo?</h4>
              <p className="text-slate-300 mb-3 text-sm">
                Para matrices <span className="font-semibold text-purple-300">tridiagonales, simétricas y definidas positivas</span>, existe una fórmula:
              </p>
              <div className="text-center py-3 bg-slate-950/50 rounded-lg mb-3">
                <p className="font-mono text-purple-300">
                  ωₒₚₜᵢₘₒ = 2 / (1 + √(1 - ρ²))
                </p>
              </div>
              <p className="text-slate-400 text-xs">donde ρ = radio espectral de la matriz de Jacobi</p>
            </div>

            <div className="p-6 bg-pink-500/10 border border-pink-500/30 rounded-xl">
              <h4 className="font-bold text-pink-300 mb-3">🔍 En la práctica</h4>
              <p className="text-slate-300 mb-3 text-sm">
                (cuando no se puede calcular teóricamente):
              </p>
              <ol className="text-slate-400 text-sm space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-pink-400 font-bold">1.</span>
                  <span><span className="font-semibold text-pink-300">Experimentar</span> con valores: 1.1, 1.25, 1.5, 1.75</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-400 font-bold">2.</span>
                  <span>Probar cuál converge más rápido</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-400 font-bold">3.</span>
                  <span>Valores típicos: <span className="font-semibold text-pink-300">1.2 ≤ ω ≤ 1.8</span></span>
                </li>
              </ol>
            </div>
          </div>
        </div>

        {/* 2.4 Condiciones de Convergencia */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4 text-green-300">2.4. Condiciones de Convergencia</h3>
          
          <div className="space-y-4">
            <div className="p-6 bg-green-500/10 border border-green-500/30 rounded-xl">
              <h4 className="font-bold text-green-300 mb-3">Condición 1: Diagonal Dominante Estricta</h4>
              <div className="text-center py-3 bg-slate-950/50 rounded-lg mb-3">
                <p className="font-mono text-green-300">
                  |aᵢᵢ| &gt; Σ |aᵢⱼ|  para toda fila i
                </p>
              </div>
              
              <div className="p-4 bg-slate-950/50 rounded-lg">
                <p className="font-semibold text-green-200 mb-2">📌 Ejemplo:</p>
                <div className="font-mono text-sm text-slate-300 space-y-1">
                  <p>A = [10  -2  -1]</p>
                  <p>    [-2   8  -1]</p>
                  <p>    [-1  -1   6]</p>
                </div>
                <div className="mt-3 text-slate-400 text-sm space-y-1">
                  <p>Fila 1: |10| &gt; |-2| + |-1| = 3 ✓ (10 &gt; 3)</p>
                  <p>Fila 2: |8| &gt; |-2| + |-1| = 3 ✓ (8 &gt; 3)</p>
                  <p>Fila 3: |6| &gt; |-1| + |-1| = 2 ✓ (6 &gt; 2)</p>
                </div>
                <p className="text-green-300 font-semibold mt-3">
                  ✓ Entonces SOR converge para 0 &lt; ω &lt; 2
                </p>
              </div>
            </div>

            <div className="p-6 bg-blue-500/10 border border-blue-500/30 rounded-xl">
              <h4 className="font-bold text-blue-300 mb-3">Condición 2: Matriz Simétrica y Definida Positiva</h4>
              <p className="text-slate-300 mb-3">
                Si <span className="font-mono">A = Aᵀ</span> y todos los eigenvalores λᵢ &gt; 0:
              </p>
              <ul className="text-slate-400 text-sm space-y-1">
                <li>• SOR converge para <span className="font-semibold text-blue-300">0 &lt; ω &lt; 2</span></li>
                <li>• Existe un <span className="font-semibold text-blue-300">ω óptimo</span> que maximiza la convergencia</li>
              </ul>
            </div>
          </div>
        </div>
      </Card>

      {/* 3. Algoritmo del Método SOR */}
      <Card className="p-8 bg-gradient-to-br from-slate-900/80 to-slate-800/50">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <div className="w-1 h-8 bg-gradient-to-b from-pink-500 to-red-500 rounded-full"></div>
          3. Algoritmo del Método SOR
        </h2>

        <div className="p-6 bg-pink-500/10 border border-pink-500/30 rounded-xl mb-6">
          <h4 className="font-bold text-pink-200 mb-3">📥 Entrada:</h4>
          <ul className="space-y-2 text-slate-300 text-sm">
            <li>• Matriz A, vector b</li>
            <li>• Parámetro ω (factor de relajación)</li>
            <li>• Vector inicial x⁽⁰⁾</li>
            <li>• Tolerancia ε</li>
            <li>• Máximo de iteraciones</li>
          </ul>
        </div>

        <div className="space-y-4">
          <div className="p-4 bg-slate-950/50 rounded-xl border-l-4 border-purple-500">
            <p className="font-bold text-purple-300 mb-2">Paso 1: Para cada componente i = 1, 2, ..., n</p>
            <div className="font-mono text-slate-300 text-sm bg-slate-900/50 p-3 rounded">
              xᵢ⁽ᵏ⁺¹⁾ = (1 - ω)xᵢ⁽ᵏ⁾ + (ω/aᵢᵢ)(bᵢ - Σ aᵢⱼxⱼ⁽ᵏ⁺¹⁾ - Σ aᵢⱼxⱼ⁽ᵏ⁾)
            </div>
          </div>

          <div className="p-4 bg-slate-950/50 rounded-xl border-l-4 border-blue-500">
            <p className="font-bold text-blue-300 mb-2">Paso 2: Calcular el error</p>
            <div className="font-mono text-slate-300 text-sm">
              error = ||x⁽ᵏ⁺¹⁾ - x⁽ᵏ⁾||
            </div>
          </div>

          <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-xl">
            <p className="font-bold text-green-300 mb-2">Paso 3: Verificar convergencia</p>
            <p className="font-mono text-slate-300 mb-2">Si error &lt; ε</p>
            <p className="text-green-200">Entonces: Solución encontrada</p>
            <p className="text-slate-400 text-xs mt-2">De lo contrario, repetir desde Paso 1</p>
          </div>
        </div>
      </Card>

      {/* 4. Ejemplo Práctico: Distribución de Temperatura */}
      <Card className="p-8">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <div className="w-1 h-8 bg-gradient-to-b from-orange-500 to-red-500 rounded-full"></div>
          4. Ejemplo Práctico: Distribución de Temperatura en un Muro de 4 Capas
        </h2>

        {/* 4.1 Planteamiento del Problema */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4 text-orange-300">4.1. Planteamiento del Problema</h3>
          
          {/* 4.1.1 Contexto Real */}
          <div className="mb-6">
            <h4 className="text-xl font-semibold mb-3 text-orange-200">4.1.1. Contexto Real</h4>
            <div className="p-6 bg-orange-500/10 border border-orange-500/30 rounded-xl">
              <p className="text-slate-300 mb-4 leading-relaxed">
                Una empresa de construcción sostenible está diseñando un muro térmico multicapa para mantener 
                una temperatura estable dentro de una vivienda ecológica. Cada capa del muro tiene distintos 
                materiales (ladrillo, yeso, aire aislante y hormigón).
              </p>
              <p className="text-orange-300 font-semibold">
                🎯 Objetivo: Conocer la temperatura estacionaria en cada capa del muro (T₁, T₂, T₃, T₄) 
                para asegurar que el diseño minimice las pérdidas de calor hacia el exterior.
              </p>
            </div>
          </div>

          {/* 4.1.2 Esquema del Muro */}
          <div className="mb-6">
            <h4 className="text-xl font-semibold mb-3 text-orange-200">4.1.2. Esquema del Muro</h4>
            
            <div className="p-6 bg-slate-950/50 rounded-xl border border-orange-500/30 mb-4">
              <h5 className="font-bold text-orange-300 mb-4">🔥 Transferencia de Calor en Muro Multicapa</h5>
              <div className="bg-slate-900/50 p-4 rounded-lg text-center">
                <img 
                  src={`${process.env.PUBLIC_URL}/images/metodo-sor.png`}
                  alt="Esquema de transferencia de calor en muro multicapa"
                  className="mx-auto max-w-md h-auto rounded-lg shadow-lg"
                /> 
                <p className="text-slate-400 italic mt-2">Muro de 4 capas con diferentes coeficientes térmicos</p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left p-4 bg-gradient-to-r from-orange-500/20 to-red-500/20">Capa</th>
                    <th className="text-left p-4 bg-gradient-to-r from-orange-500/20 to-red-500/20">Conexión con</th>
                    <th className="text-left p-4 bg-gradient-to-r from-orange-500/20 to-red-500/20">Coeficientes térmicos (k)</th>
                    <th className="text-left p-4 bg-gradient-to-r from-orange-500/20 to-red-500/20">Flujo térmico externo (°C)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { capa: 1, conexion: '2', coeficientes: '2, 1', flujo: '70' },
                    { capa: 2, conexion: '1, 3', coeficientes: '2, 2', flujo: '50' },
                    { capa: 3, conexion: '2, 4', coeficientes: '1, 1', flujo: '40' },
                                        { capa: 4, conexion: '3', coeficientes: '2, 1', flujo: '20' }
                  ].map((row) => (
                    <tr key={row.capa} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="p-4 font-mono text-orange-300 font-bold">{row.capa}</td>
                      <td className="p-4 text-slate-300">{row.conexion}</td>
                      <td className="p-4 font-mono text-cyan-300">{row.coeficientes}</td>
                      <td className="p-4 font-mono text-yellow-300">{row.flujo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 4.1.3 Leyes físicas aplicadas */}
          <div className="mb-6">
            <h4 className="text-xl font-semibold mb-3 text-orange-200">4.1.3. Leyes físicas aplicadas</h4>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-6 bg-red-500/10 border border-red-500/30 rounded-xl">
                <h5 className="font-bold text-red-300 mb-3">🔥 Ley de Fourier</h5>
                <p className="text-slate-300 mb-3 text-sm">
                  El flujo de calor Q entre dos capas es proporcional a la diferencia de temperatura y a la conductividad térmica k:
                </p>
                <div className="text-center py-3 bg-slate-950/50 rounded font-mono text-sm text-red-300">
                  Q = k · (Tᵢ - Tⱼ)
                </div>
                <div className="mt-3 text-slate-400 text-xs space-y-1">
                  <p>• Q: flujo de calor (W)</p>
                  <p>• k: coeficiente de conductividad (W/m°C)</p>
                  <p>• Tᵢ, Tⱼ: temperaturas (°C)</p>
                </div>
              </div>

              <div className="p-6 bg-green-500/10 border border-green-500/30 rounded-xl">
                <h5 className="font-bold text-green-300 mb-3">⚖️ Balance Energético</h5>
                <p className="text-slate-300 mb-3 text-sm">
                  En estado estacionario, el calor que entra a cada capa = el calor que sale:
                </p>
                <div className="text-center py-3 bg-slate-950/50 rounded font-mono text-sm text-green-300">
                  Σ Qₑₙₜᵣₐ𝒹ₐ = Σ Qₛₐₗᵢ𝒹ₐ
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4.2 Modelo matemático */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4 text-red-300">4.2. Modelo matemático</h3>
          
          {/* 4.2.1 Ecuaciones del sistema */}
          <div className="mb-6">
            <h4 className="text-xl font-semibold mb-4 text-red-200">4.2.1. Ecuaciones del sistema</h4>

            <div className="space-y-4">
              {/* NODO 1 */}
              <div className="p-6 bg-slate-950/50 rounded-xl border-l-4 border-red-500">
                <h5 className="font-bold text-red-300 mb-3">NODO 1 (Capa exterior caliente):</h5>
                <div className="space-y-2 text-sm text-slate-300">
                  <p>Recibe calor del ambiente caliente (70°C) y lo transmite hacia la capa 2.</p>
                  <div className="mt-3 p-3 bg-red-900/20 rounded">
                    <p className="font-mono text-center text-red-300">kₐₘբ(Tₐₘբ - T₁) = k₁₂(T₁ - T₂)</p>
                  </div>
                  <div className="mt-3 p-3 bg-green-900/20 rounded border border-green-500/30">
                    <p className="font-mono text-center text-green-300 font-bold">10T₁ - 3T₂ = 70</p>
                    <p className="text-center text-green-400 text-xs mt-1">← Ecuación 1</p>
                  </div>
                </div>
              </div>

              {/* NODO 2 */}
              <div className="p-6 bg-slate-950/50 rounded-xl border-l-4 border-orange-500">
                <h5 className="font-bold text-orange-300 mb-3">NODO 2 (Capa intermedia 1):</h5>
                <div className="space-y-2 text-sm text-slate-300">
                  <p>Intercambia calor con las capas 1 y 3 y tiene una fuente interna (50°C).</p>
                  <div className="mt-3 p-3 bg-green-900/20 rounded border border-green-500/30">
                    <p className="font-mono text-center text-green-300 font-bold">-3T₁ + 8T₂ - T₃ = 50</p>
                    <p className="text-center text-green-400 text-xs mt-1">← Ecuación 2</p>
                  </div>
                </div>
              </div>

              {/* NODO 3 */}
              <div className="p-6 bg-slate-950/50 rounded-xl border-l-4 border-yellow-500">
                <h5 className="font-bold text-yellow-300 mb-3">NODO 3 (Capa intermedia 2):</h5>
                <div className="space-y-2 text-sm text-slate-300">
                  <p>Recibe calor de la capa 2 y lo transmite a la capa 4 y al ambiente (40°C).</p>
                  <div className="mt-3 p-3 bg-green-900/20 rounded border border-green-500/30">
                    <p className="font-mono text-center text-green-300 font-bold">-T₂ + 7T₃ - 2T₄ = 40</p>
                    <p className="text-center text-green-400 text-xs mt-1">← Ecuación 3</p>
                  </div>
                </div>
              </div>

              {/* NODO 4 */}
              <div className="p-6 bg-slate-950/50 rounded-xl border-l-4 border-green-500">
                <h5 className="font-bold text-green-300 mb-3">NODO 4 (Capa interior fría):</h5>
                <div className="space-y-2 text-sm text-slate-300">
                  <p>Pierde calor hacia el ambiente frío (20°C).</p>
                  <div className="mt-3 p-3 bg-green-900/20 rounded border border-green-500/30">
                    <p className="font-mono text-center text-green-300 font-bold">-2T₃ + 6T₄ = 20</p>
                    <p className="text-center text-green-400 text-xs mt-1">← Ecuación 4</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4.2.2 Sistema matricial */}
          <div className="mb-6">
            <h4 className="text-xl font-semibold mb-4 text-red-200">4.2.2. Sistema matricial</h4>
            
            <div className="p-6 bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/30 rounded-xl">
              <h5 className="font-bold text-red-200 mb-4 text-center">Sistema de ecuaciones:</h5>
              <div className="font-mono text-sm text-slate-300 space-y-1 max-w-3xl mx-auto">
                <p className="text-center">10T₁ - 3T₂ + 0T₃ + 0T₄ = 70</p>
                <p className="text-center">-3T₁ + 8T₂ - T₃ + 0T₄ = 50</p>
                <p className="text-center">0T₁ - T₂ + 7T₃ - 2T₄ = 40</p>
                <p className="text-center">0T₁ + 0T₂ - 2T₃ + 6T₄ = 20</p>
              </div>
            </div>
          </div>

          {/* 4.2.3 Verificación de condiciones */}
          <div className="mb-6">
            <h4 className="text-xl font-semibold mb-4 text-red-200">4.2.3. Verificación de condiciones</h4>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-green-500/10 border border-green-500/30 rounded-xl">
                <h5 className="font-bold text-green-300 mb-4">Condición 1: ¿A = Aᵀ?</h5>
                <div className="font-mono text-xs text-slate-300 space-y-1 text-center">
                  <p>A = [10  -3   0   0]</p>
                  <p>    [-3   8  -1   0]</p>
                  <p>    [ 0  -1   7  -2]</p>
                  <p>    [ 0   0  -2   6]</p>
                </div>
                <div className="mt-4 p-3 bg-green-900/20 rounded border border-green-500/30 text-center">
                  <p className="text-green-300 font-bold">✓ A = Aᵀ → SÍ cumple (es simétrica)</p>
                </div>
              </div>

              <div className="p-6 bg-blue-500/10 border border-blue-500/30 rounded-xl">
                <h5 className="font-bold text-blue-300 mb-4">Condición 2: Diagonal Dominante</h5>
                <div className="text-slate-400 text-sm space-y-2">
                  <p>• Fila 1: |10| {'>'} |-3|+|0|+|0| = 3 ✓</p>
                  <p>• Fila 2: |8| {'>'} |-3|+|-1|+|0| = 4 ✓</p>
                  <p>• Fila 3: |7| {'>'} |0|+|-1|+|-2| = 3 ✓</p>
                  <p>• Fila 4: |6| {'>'} |0|+|0|+|-2| = 2 ✓</p>
                </div>
                <div className="mt-4 p-3 bg-blue-900/20 rounded border border-blue-500/30 text-center">
                  <p className="text-blue-300 font-bold">✓ Diagonal dominante → SOR converge</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4.3 Solución al problema */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4 text-purple-300">4.3. Solución al problema (RESUELTO EN EXCEL)</h3>
          
          {/* 4.3.1 Datos de entrada */}
          <div className="mb-6">
            <h4 className="text-xl font-semibold mb-4 text-purple-200">4.3.1. Datos de entrada</h4>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
                <p className="text-red-300 font-bold mb-2 text-center">Matriz A (4×4)</p>
                <div className="font-mono text-xs text-slate-300 text-center space-y-1">
                  <p>[10  -3   0   0]</p>
                  <p>[-3   8  -1   0]</p>
                  <p>[ 0  -1   7  -2]</p>
                  <p>[ 0   0  -2   6]</p>
                </div>
              </div>

              <div className="p-4 bg-orange-500/10 border border-orange-500/30 rounded-xl">
                <p className="text-orange-300 font-bold mb-2 text-center">Vector b</p>
                <div className="font-mono text-xs text-slate-300 text-center space-y-1">
                  <p>[70]</p>
                  <p>[50]</p>
                  <p>[40]</p>
                  <p>[20]</p>
                </div>
              </div>

              <div className="p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-xl">
                <p className="text-yellow-300 font-bold mb-2 text-center">Parámetros</p>
                <div className="text-slate-300 text-sm space-y-1 text-center">
                  <p>ω = 1.25</p>
                  <p>x⁽⁰⁾ = [0, 0, 0, 0]</p>
                  <p>tol = 10⁻¹⁰</p>
                </div>
              </div>
            </div>
          </div>

          {/* 4.3.2 Iteraciones */}
          <div className="mb-6">
            <h4 className="text-xl font-semibold mb-4 text-purple-200">4.3.2. Iteraciones</h4>
            
            <div className="p-4 bg-amber-500/10 border border-amber-500/30 rounded-xl mb-4">
              <p className="text-amber-200 text-sm">
                <span className="font-bold">📊 Nota:</span> Se muestran las iteraciones clave. El método converge en 20 iteraciones con tolerancia {'<'} 10⁻¹⁰
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left p-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20">k</th>
                    <th className="text-left p-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20">x₁</th>
                    <th className="text-left p-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20">x₂</th>
                    <th className="text-left p-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20">x₃</th>
                    <th className="text-left p-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20">x₄</th>
                    <th className="text-left p-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20">Error</th>
                  </tr>
                </thead>
                <tbody className="font-mono text-xs">
                  {[
                    { k: 0, x1: '0.000000', x2: '0.000000', x3: '0.000000', x4: '0.000000', error: '-' },
                    { k: 1, x1: '8.750000', x2: '11.914063', x3: '9.270368', x4: '8.029320', error: '19.207215' },
                    { k: 2, x1: '11.030273', x2: '11.452920', x3: '9.738044', x4: '6.216855', error: '2.985976' },
                    { k: 3, x1: '10.287277', x2: '11.293000', x3: '8.945259', x4: '6.339644', error: '1.105081' },
                    { k: 4, x1: '10.413056', x2: '11.268067', x3: '9.182856', x4: '6.407946', error: '0.278495' },
                    { k: 5, x1: '10.372261', x2: '11.292302', x3: '9.152178', x4: '6.378088', error: '0.063908' },
                    { k: 6, x1: '10.391548', x2: '11.290490', x3: '9.148860', x4: '6.384170', error: '0.020573' },
                    { k: 7, x1: '10.386047', x2: '11.287846', x3: '9.151390', x4: '6.383703', error: '0.006623' },
                    { k: 8, x1: '10.386431', x2: '11.289082', x3: '9.150811', x4: '6.383579', error: '0.001423' },
                    { k: 9, x1: '10.386798', x2: '11.288855', x3: '9.150871', x4: '6.383635', error: '0.000440' },
                    { k: 10, x1: '10.386621', x2: '11.288838', x3: '9.150873', x4: '6.383622', error: '0.000178' },
                    { k: 11, x1: '10.386659', x2: '11.288861', x3: '9.150872', x4: '6.383624', error: '0.000044' },
                    { k: 12, x1: '10.386658', x2: '11.288855', x3: '9.150872', x4: '6.383624', error: '0.000006' },
                    { k: 13, x1: '10.386656', x2: '11.288855', x3: '9.150872', x4: '6.383624', error: '0.000002' },
                    { k: 14, x1: '10.386657', x2: '11.288855', x3: '9.150872', x4: '6.383624', error: '0.000001' },
                    { k: 15, x1: '10.386657', x2: '11.288855', x3: '9.150872', x4: '6.383624', error: '1.55E-07' },
                    { k: 16, x1: '10.386657', x2: '11.288855', x3: '9.150872', x4: '6.383624', error: '1.75E-08' },
                    { k: 17, x1: '10.386657', x2: '11.288855', x3: '9.150872', x4: '6.383624', error: '6.33E-09' },
                    { k: 18, x1: '10.386657', x2: '11.288855', x3: '9.150872', x4: '6.383624', error: '1.90E-09' },
                    { k: 19, x1: '10.386657', x2: '11.288855', x3: '9.150872', x4: '6.383624', error: '3.33E-10' },
                    { k: 20, x1: '10.386657', x2: '11.288855', x3: '9.150872', x4: '6.383624', error: '3.88E-11' }
                  ].map((row, index) => (
                    <tr key={row.k} className={`border-b border-white/5 hover:bg-white/5 transition-colors ${
                      row.k === 20 ? 'bg-green-500/10' : ''
                    }`}>
                      <td className="p-3 text-purple-300 font-bold">{row.k}</td>
                      <td className="p-3 text-slate-300">{row.x1}</td>
                      <td className="p-3 text-slate-300">{row.x2}</td>
                      <td className="p-3 text-slate-300">{row.x3}</td>
                      <td className="p-3 text-slate-300">{row.x4}</td>
                      <td className="p-3">
                        {row.error === '-' ? (
                          <span className="text-slate-500">-</span>
                        ) : row.error === '3.88E-11' ? (
                          <span className="text-green-300 font-bold">{row.error} ✓</span>
                        ) : (
                          <span className="text-yellow-300">{row.error}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 p-4 bg-green-500/10 border border-green-500/30 rounded-xl">
              <p className="text-green-200 text-center font-bold">
                ✓ Convergencia alcanzada en la iteración 20 con error = 3.88 × 10⁻¹¹
              </p>
            </div>
          </div>

          {/* 4.3.3 Solución Final */}
          <div className="mb-6">
            <h4 className="text-xl font-semibold mb-4 text-purple-200">4.3.3. Solución Final</h4>
            
            <div className="p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl">
              <p className="text-slate-300 mb-4 text-center">
                Después de aplicar el método de <span className="font-bold text-purple-300">Sobre Relajación Sucesiva (SOR)</span> al sistema térmico 
                de cuatro capas, con un factor de relajación ω = 1.25 y una tolerancia de 10⁻⁶, 
                el método converge luego de <span className="font-bold text-green-300">20 iteraciones</span> al siguiente vector de temperaturas:
              </p>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-purple-500/30">
                      <th className="text-left p-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20">Capa</th>
                      <th className="text-left p-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20">Variable</th>
                      <th className="text-left p-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20">Temperatura (°C)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { capa: 1, variable: 'T₁', temperatura: '10.3867', color: 'red' },
                      { capa: 2, variable: 'T₂', temperatura: '11.2889', color: 'orange' },
                      { capa: 3, variable: 'T₃', temperatura: '9.1509', color: 'yellow' },
                      { capa: 4, variable: 'T₄', temperatura: '6.3836', color: 'green' }
                    ].map((row) => (
                      <tr key={row.capa} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                        <td className="p-4 font-mono text-purple-300 font-bold">{row.capa}</td>
                        <td className="p-4 font-mono text-cyan-300 font-bold">{row.variable}</td>
                        <td className="p-4 font-mono text-green-300 font-bold text-lg">{row.temperatura}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* 4.4 Interpretación de Resultados */}
        <div className="mb-8">
          <h3 className="text-3xl font-bold mb-6 flex items-center gap-2">
            <div className="w-1 h-8 bg-gradient-to-b from-green-500 to-emerald-500 rounded-full"></div>
            4.4. Interpretación de Resultados
          </h3>

          <div className="p-6 bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-xl mb-6">
            <p className="text-slate-300 mb-6 leading-relaxed">
              El resultado obtenido representa la distribución de temperaturas estacionarias dentro del muro multicapa, 
              considerando un ambiente cálido (70 °C) en un extremo y un ambiente frío (20 °C) en el otro.
            </p>

            <h4 className="font-bold text-green-300 mb-4 text-lg">📊 Análisis por capas:</h4>

            <div className="overflow-x-auto mb-6">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-green-500/30">
                    <th className="text-left p-3 text-green-300">Capa</th>
                    <th className="text-left p-3 text-green-300">Descripción</th>
                    <th className="text-left p-3 text-green-300">Temperatura (°C)</th>
                    <th className="text-left p-3 text-green-300">Interpretación</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/5">
                    <td className="p-3 font-mono text-red-300 font-bold">1</td>
                    <td className="p-3 text-slate-300">Capa exterior expuesta al calor</td>
                    <td className="p-3 font-mono text-cyan-300 font-bold">10.39</td>
                    <td className="p-3 text-slate-400 text-sm">Recibe mayor flujo térmico del ambiente caliente</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="p-3 font-mono text-orange-300 font-bold">2</td>
                    <td className="p-3 text-slate-300">Material aislante</td>
                    <td className="p-3 font-mono text-cyan-300 font-bold">11.29</td>
                    <td className="p-3 text-slate-400 text-sm">Mantiene una temperatura alta por su baja conductividad</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="p-3 font-mono text-yellow-300 font-bold">3</td>
                    <td className="p-3 text-slate-300">Capa intermedia</td>
                    <td className="p-3 font-mono text-cyan-300 font-bold">9.15</td>
                    <td className="p-3 text-slate-400 text-sm">Gradualmente disipa el calor hacia el exterior</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono text-green-300 font-bold">4</td>
                    <td className="p-3 text-slate-300">Capa interior (contacto con ambiente frío)</td>
                    <td className="p-3 font-mono text-cyan-300 font-bold">6.38</td>
                    <td className="p-3 text-slate-400 text-sm">Es la más fría, confirma dirección del flujo de calor</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h4 className="font-bold text-blue-300 mb-4 text-lg">💡 Conclusiones:</h4>

            <div className="space-y-3 text-slate-300 text-sm">
              <p className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <span>El gradiente térmico se comporta de forma coherente con la ley de Fourier, disminuyendo desde el lado caliente hacia el lado frío.</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <span>El valor de ω = 1.25 permitió una convergencia rápida y estable, mejorando la velocidad respecto a Gauss-Seidel (ω = 1).</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <span>Los resultados demuestran que el muro <span className="font-semibold text-green-300">cumple su función de aislamiento</span>, manteniendo diferencias térmicas adecuadas entre capas.</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-green-400">✓</span>
                <span>El método SOR es especialmente <span className="font-semibold text-blue-300">útil para sistemas de transferencia de calor</span> o flujo estacionario con pocas ecuaciones.</span>
              </p>
            </div>
          </div>
        </div>
      </Card>

      {/* 5. Implementación */}
      <Card className="p-8 bg-gradient-to-br from-slate-900/80 to-slate-800/50">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <div className="w-1 h-8 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full"></div>
          5. Implementación en Python
        </h2>

        <div className="bg-slate-950 rounded-xl p-6 overflow-x-auto">
          <pre className="text-sm text-slate-300 font-mono leading-relaxed">
{`import numpy as np

def metodo_sor(A, b, omega=1.25, x0=None, tol=1e-10, max_iter=100):
    """
    Método de Sobrerrelajación Sucesiva (SOR) para resolver Ax = b
    
    Parámetros:
    -----------
    A : array_like
        Matriz de coeficientes
    b : array_like
        Vector de términos independientes
    omega : float, opcional
        Parámetro de relajación (por defecto: 1.25)
    x0 : array_like, opcional
        Aproximación inicial (por defecto: vector de ceros)
    tol : float, opcional
        Tolerancia para convergencia (por defecto: 1e-10)
    max_iter : int, opcional
        Número máximo de iteraciones (por defecto: 100)
    
    Retorna:
    --------
    x : array_like
        Solución del sistema
    historial : dict
        Historial de iteraciones
    """
    n = len(b)
    
    # Inicialización
    if x0 is None:
        x = np.zeros(n)
    else:
        x = x0.copy()
    
    print("=" * 70)
    print("MÉTODO DE SOBRERRELAJACIÓN SUCESIVA (SOR)")
    print("=" * 70)
    print(f"Matriz A:\\n{A}")
    print(f"Vector b: {b}")
    print(f"Parámetro ω: {omega}")
    print(f"Aproximación inicial x(0): {x}")
    print(f"Tolerancia: {tol}")
    print()
    
    # Verificar si la matriz tiene diagonal dominante
    tiene_diagonal_dominante = verificar_diagonal_dominante(A)
    print("VERIFICACIÓN DE DIAGONAL DOMINANTE:")
    for i in range(n):
        suma_fila = sum(abs(A[i, j]) for j in range(n) if j != i)
        es_dominante = abs(A[i, i]) > suma_fila
        print(f"Fila {i + 1}: |{A[i, i]}| > {suma_fila} ? {'✓' if es_dominante else '✗'}")
    
    print(f"\\n¿La matriz tiene diagonal dominante? {tiene_diagonal_dominante}")
    print()
    
    historial = {
        'x': [x.copy()],
        'error': []
    }
    
    print("ITERACIONES:")
    print("k     x1         x2         x3         x4         Error")
    print("-" * 70)
    
    for k in range(1, max_iter + 1):
        x_old = x.copy()
        x_new = np.zeros(n)
        
        # Aplicar fórmula SOR componente por componente
        for i in range(n):
            suma1 = 0
            suma2 = 0
            
            # Suma para j < i (componentes ya actualizadas)
            for j in range(i):
                suma1 += A[i, j] * x_new[j]
            
            # Suma para j > i (componentes no actualizadas)
            for j in range(i + 1, n):
                suma2 += A[i, j] * x_old[j]
            
            # Fórmula SOR: x_i^(k+1) = (1-ω)x_i^(k) + (ω/a_ii)(b_i - Σ a_ij*x_j)
            x_new[i] = (1 - omega) * x_old[i] + (omega / A[i, i]) * (b[i] - suma1 - suma2)
        
        # Calcular error (norma euclidiana de la diferencia entre iteraciones)
        error = np.linalg.norm(x_new - x_old)
        x = x_new
        
        historial['x'].append(x.copy())
        historial['error'].append(error)
        
        # Mostrar iteración
        print(f"{k:2d} {x[0]:.6f} {x[1]:.6f} {x[2]:.6f} {x[3]:.6f} {error:.2e}")
        
        # Verificar convergencia
        if error < tol:
            print(f"\\n✓ Convergencia alcanzada en la iteración {k}")
            print(f"Error final: {error:.2e}")
            break
    
    return x, historial

def verificar_diagonal_dominante(A):
    """Verifica si la matriz tiene diagonal dominante"""
    n = A.shape[0]
    for i in range(n):
        suma_fila = sum(abs(A[i, j]) for j in range(n) if j != i)
        if abs(A[i, i]) <= suma_fila:
            return False
    return True

def verificar_simetria(A):
    """Verifica si la matriz es simétrica"""
    return np.allclose(A, A.T)

def resolver_problema():
    # Matriz A del sistema térmico
    A = np.array([
        [10, -3,  0,  0],
        [-3,  8, -1,  0],
        [ 0, -1,  7, -2],
        [ 0,  0, -2,  6]
    ])
    
    # Vector b
    b = np.array([70, 50, 40, 20])
    
    # Parámetros del método
    omega = 1.25  # Parámetro de relajación
    x0 = np.zeros(4)  # Aproximación inicial
    tol = 1e-10  # Tolerancia
    
    print("=" * 70)
    print("RESOLVIENDO MEDIANTE EL MÉTODO DE SOBRE RELAJACION SUCESIVA")
    print("=" * 70)
    print("VERIFICACIÓN INICIAL:")
    print(f"¿La matriz es simétrica? {verificar_simetria(A)}")
    if verificar_simetria(A):
        print("✓ A = Aᵀ (La matriz es simétrica)")
    print()
    
    # Resolver el sistema
    solucion, historial = metodo_sor(A, b, omega, x0, tol)
    
    print("\\n" + "=" * 70)
    print("SOLUCIÓN FINAL")
    print("=" * 70)
    print(f"x = {solucion}")
    
    return solucion, historial

if __name__ == "__main__":
    solucion, historial = resolver_problema()
    print("\\n" + "=" * 70)`}
          </pre>
        </div>

        <div className="mt-6 p-6 bg-purple-500/10 border border-purple-500/30 rounded-xl">
          <h3 className="font-bold text-purple-300 mb-3">📝 Características de la implementación:</h3>
          <ul className="text-slate-300 text-sm space-y-2">
            <li>• <span className="font-semibold text-purple-300">Verificación automática</span> de diagonal dominante</li>
            <li>• <span className="font-semibold text-purple-300">Parámetro ω ajustable</span> para controlar la convergencia</li>
            <li>• <span className="font-semibold text-purple-300">Cálculo eficiente</span> usando valores ya actualizados</li>
            <li>• <span className="font-semibold text-purple-300">Monitoreo de convergencia</span> en cada iteración</li>
            <li>• <span className="font-semibold text-purple-300">Historial completo</span> para análisis posterior</li>
          </ul>
        </div>
      </Card>

      {/* Fin de la Parte II */}
      <div className="p-8 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-xl text-center">
        <h3 className="text-2xl font-bold text-purple-300 mb-3">✓ FIN DE LA PARTE II</h3>
        <p className="text-slate-300 text-lg mb-2">MÉTODO DE SOBRE RELAJACIÓN SUCESIVA (SOR)</p>
        <p className="text-slate-400 text-sm">
          Implementación completa según el documento Word
        </p>
      </div>
    </div>
  );
};

export default MetodoSOR;