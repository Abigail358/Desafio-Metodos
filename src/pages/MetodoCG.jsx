// src/pages/MetodoCG.js
import React from 'react';

const Card = ({ children, className = '', gradient = false }) => {
  return (
    <div className={`bg-slate-900/50 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden ${gradient ? 'bg-gradient-to-br from-slate-900/50 to-blue-900/20' : ''} ${className}`}>
      {children}
    </div>
  );
};

const MetodoCG = () => {
  return (
    <div className="space-y-8 max-w-6xl mx-auto animate-fadeIn">
      {/* Header */}
      <Card gradient className="p-8">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          PARTE I: MÉTODO DEL GRADIENTE CONJUGADO (CG)
        </h1>
        <p className="text-lg text-slate-300">
          Técnica numérica avanzada para resolver sistemas de ecuaciones lineales Ax = b
        </p>
      </Card>

      {/* 1. ¿Qué es el Método del Gradiente Conjugado? */}
      <Card className="p-8">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
          1. ¿Qué es el Método del Gradiente Conjugado?
        </h2>
        
        <p className="text-slate-300 mb-6 text-lg leading-relaxed">
          El Método del Gradiente Conjugado es una técnica numérica avanzada para resolver sistemas 
          de ecuaciones lineales de la forma <span className="font-mono bg-blue-500/20 px-2 py-1 rounded font-bold">Ax = b</span>. 
          Fue desarrollado en <span className="font-semibold text-blue-300">1952</span> por{' '}
          <span className="font-semibold text-blue-300">Magnus Hestenes y Eduard Stiefel</span>, y representa 
          uno de los algoritmos más elegantes y eficientes de la matemática computacional moderna.
        </p>

        <div className="p-6 bg-amber-500/10 border border-amber-500/30 rounded-xl mb-6">
          <h3 className="font-bold text-amber-200 mb-3 text-lg">📜 Contexto Histórico</h3>
          <p className="text-amber-100 text-sm leading-relaxed">
            A principios de los años 1950, con el surgimiento de las primeras computadoras electrónicas, 
            surgió la necesidad de resolver sistemas lineales grandes de forma eficiente. Los métodos 
            existentes (eliminación gaussiana, Jacobi, Gauss-Seidel) tenían limitaciones significativas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="p-6 bg-red-500/10 border border-red-500/30 rounded-xl">
            <h3 className="text-xl font-bold mb-4 text-red-300">❌ Limitaciones de Métodos Tradicionales</h3>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-red-400 font-bold">•</span>
                <div>
                  <span className="font-semibold">Eliminación Gaussiana:</span>
                  <span className="text-slate-400 block mt-1">Muy costosa para sistemas grandes O(n³)</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 font-bold">•</span>
                <div>
                  <span className="font-semibold">Jacobi/Gauss-Seidel:</span>
                  <span className="text-slate-400 block mt-1">Convergencia lenta e impredecible</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="p-6 bg-green-500/10 border border-green-500/30 rounded-xl">
            <h3 className="text-xl font-bold mb-4 text-green-300">✓ Solución: Gradiente Conjugado</h3>
            <p className="text-slate-300 mb-3">
              Hestenes y Stiefel presentaron el Gradiente Conjugado como un <span className="font-semibold text-green-300">método directo</span> que 
              convergía exactamente en <span className="font-semibold text-green-300">n pasos</span>.
            </p>
            <p className="text-slate-400 text-sm">
              Cuando tenemos sistemas con miles o millones de ecuaciones (simulaciones de clima, análisis 
              estructural, procesamiento de imágenes), el Gradiente Conjugado resuelve estos problemas 
              de manera mucho más eficiente.
            </p>
          </div>
        </div>

        <div className="p-6 bg-blue-500/10 border border-blue-500/30 rounded-xl">
          <h3 className="font-bold text-blue-200 mb-2 text-lg">💡 ¿Por qué es importante?</h3>
          <p className="text-blue-100 text-sm">
            Cuando tenemos sistemas con miles o millones de ecuaciones (como en simulaciones de clima, 
            análisis estructural de edificios, o procesamiento de imágenes), los métodos tradicionales 
            se vuelven extremadamente lentos. El Gradiente Conjugado resuelve estos problemas de manera 
            mucho más eficiente.
          </p>
        </div>
      </Card>

      {/* 2. Fundamentos Matemáticos */}
      <Card className="p-8 bg-gradient-to-br from-slate-900/80 to-blue-900/30">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
          2. Fundamentos Matemáticos
        </h2>

        {/* 2.1 Problema a resolver */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4 text-blue-300">2.1. Problema a resolver</h3>
          <p className="text-slate-300 mb-4">Dado un sistema de ecuaciones lineales:</p>
          
          <div className="p-6 bg-slate-950/50 rounded-xl border border-blue-500/30 mb-4">
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-300 mb-4">Ax = b</p>
              <p className="text-slate-400 text-sm mb-4">Donde:</p>
              <div className="text-left max-w-2xl mx-auto space-y-2 text-slate-300">
                <p><span className="font-bold text-blue-300">A</span> ∈ ℝⁿˣⁿ: Matriz de coeficientes (n × n)</p>
                <p><span className="font-bold text-purple-300">x</span> ∈ ℝⁿ: Vector de incógnitas (n × 1)</p>
                <p><span className="font-bold text-cyan-300">b</span> ∈ ℝⁿ: Vector de términos independientes (n × 1)</p>
              </div>
            </div>
          </div>

          <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-xl">
            <p className="text-green-200 font-semibold">
              <span className="text-green-400">🎯 Objetivo:</span> Encontrar el vector <span className="font-mono">x</span> tal que Ax = b
            </p>
          </div>
        </div>

        {/* 2.2 Enfoque de optimización */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4 text-purple-300">2.2. Enfoque de optimización</h3>
          <p className="text-slate-300 mb-4 italic">
            La genialidad del método radica en transformar el problema algebraico en uno de optimización.
          </p>

          <div className="p-6 bg-purple-500/10 border border-purple-500/30 rounded-xl mb-4">
            <h4 className="font-bold text-purple-200 mb-3">🔹 Teorema Fundamental:</h4>
            <p className="text-slate-300 mb-4">
              Si A es <span className="font-semibold text-purple-300">simétrica</span> y{' '}
              <span className="font-semibold text-purple-300">definida positiva</span>, entonces resolver{' '}
              <span className="font-mono bg-purple-500/20 px-2 py-1 rounded">Ax = b</span> es equivalente 
              a minimizar la función cuadrática:
            </p>
            <div className="text-center py-4 bg-slate-950/50 rounded-lg">
              <p className="text-2xl font-mono text-purple-300">
                g(x) = ½⟨x, Ax⟩ - ⟨x, b⟩
              </p>
            </div>
          </div>

          <div className="p-6 bg-slate-950/50 rounded-xl border border-cyan-500/30">
            <h4 className="font-bold text-cyan-200 mb-3">📐 Demostración:</h4>
            <div className="space-y-3 text-slate-300">
              <p>Calculamos el gradiente de g(x):</p>
              <div className="text-center py-3 bg-slate-900/50 rounded-lg font-mono text-cyan-300">
                ∇g(x) = ∂g/∂x = Ax - b
              </div>
              <p>El mínimo de g(x) ocurre cuando ∇g(x) = 0:</p>
              <div className="text-center py-3 bg-slate-900/50 rounded-lg font-mono text-cyan-300">
                Ax - b = 0
              </div>
              <p>Entonces:</p>
              <div className="text-center py-3 bg-slate-900/50 rounded-lg font-mono text-cyan-300 text-xl">
                Ax = b
              </div>
              <p className="text-green-300 font-semibold pt-3">
                ✓ Por lo tanto, el vector que resuelve Ax = b es el mismo que minimiza g(x).
              </p>
            </div>
          </div>
        </div>

        {/* 2.3 Conceptos clave */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4 text-blue-300">2.3. Conceptos clave</h3>

          {/* a) Producto Interno */}
          <div className="mb-6 p-6 bg-slate-950/50 rounded-xl border border-blue-500/30">
            <h4 className="font-bold text-blue-200 mb-3 text-lg">a) Producto Interno</h4>
            <p className="text-slate-300 mb-3">
              El producto interno (o producto punto) de dos vectores es:
            </p>
            <div className="text-center py-4 bg-slate-900/50 rounded-lg mb-4">
              <p className="text-xl font-mono text-blue-300">
                ⟨x, y⟩ = x<sup>T</sup>y = x₁y₁ + x₂y₂ + ... + xₙyₙ
              </p>
            </div>

            <div className="p-4 bg-blue-900/20 rounded-lg mb-4">
              <p className="font-semibold text-blue-200 mb-2">📌 Ejemplo:</p>
              <div className="space-y-2 text-slate-300 text-sm">
                <p>x = [2, 3, 1]<sup>T</sup>     y = [4, -1, 5]<sup>T</sup></p>
                <p className="font-mono">⟨x, y⟩ = 2(4) + 3(-1) + 1(5) = 8 - 3 + 5 = 10</p>
              </div>
            </div>

            <div className="p-4 bg-slate-900/50 rounded-lg">
              <p className="font-semibold text-blue-200 mb-2">Propiedades importantes:</p>
              <ul className="space-y-1 text-slate-300 text-sm">
                <li>1. ⟨x, y⟩ = ⟨y, x⟩ (conmutativo)</li>
                <li>2. ⟨αx, y⟩ = α⟨x, y⟩ (homogéneo)</li>
                <li>3. ⟨x + z, y⟩ = ⟨x, y⟩ + ⟨z, y⟩ (aditivo)</li>
                <li>4. ⟨x, x⟩ = ||x||² (norma al cuadrado)</li>
              </ul>
            </div>
          </div>

          {/* b) Vector Residual */}
          <div className="mb-6 p-6 bg-slate-950/50 rounded-xl border border-purple-500/30">
            <h4 className="font-bold text-purple-200 mb-3 text-lg">b) Vector Residual</h4>
            <p className="text-slate-300 mb-3">
              El residuo mide qué tan cerca está nuestra aproximación de la solución verdadera:
            </p>
            <div className="text-center py-4 bg-slate-900/50 rounded-lg mb-4">
              <p className="text-xl font-mono text-purple-300">
                r<sup>(k)</sup> = b - Ax<sup>(k)</sup>
              </p>
            </div>

            <div className="p-4 bg-purple-900/20 rounded-lg mb-3">
              <p className="font-semibold text-purple-200 mb-2">🔍 Interpretación:</p>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>• Si r<sup>(k)</sup> = 0 → x<sup>(k)</sup> es la solución exacta</li>
                <li>• Si ||r<sup>(k)</sup>|| pequeño → x<sup>(k)</sup> es una buena aproximación</li>
                <li>• r<sup>(k)</sup> apunta en la dirección del "error"</li>
              </ul>
            </div>

            <div className="p-4 bg-slate-900/50 rounded-lg">
              <p className="font-semibold text-purple-200 mb-2">Relación con el gradiente:</p>
              <p className="text-center font-mono text-purple-300 py-2">
                r<sup>(k)</sup> = b - Ax<sup>(k)</sup> = -∇g(x<sup>(k)</sup>)
              </p>
              <p className="text-slate-400 text-sm mt-2">
                El residuo es el <span className="font-semibold text-purple-300">negativo del gradiente</span>, 
                por lo que apunta hacia la dirección de mayor descenso.
              </p>
            </div>
          </div>

          {/* c) Direcciones Conjugadas */}
          <div className="p-6 bg-slate-950/50 rounded-xl border border-cyan-500/30">
            <h4 className="font-bold text-cyan-200 mb-3 text-lg">c) Direcciones Conjugadas</h4>
            <p className="text-slate-300 mb-3">
              Un conjunto de vectores {'{'}v<sup>(1)</sup>, v<sup>(2)</sup>, ..., v<sup>(n)</sup>{'}'} es 
              ortogonal respecto a <span className="font-bold text-cyan-300">A</span> si:
            </p>
            <div className="text-center py-4 bg-slate-900/50 rounded-lg">
              <p className="text-xl font-mono text-cyan-300">
                ⟨v<sup>(i)</sup>, Av<sup>(j)</sup>⟩ = 0,  para  i ≠ j
              </p>
            </div>
          </div>
        </div>
      </Card>

      {/* 3. Condiciones de Aplicabilidad */}
      <Card className="p-8">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <div className="w-1 h-8 bg-gradient-to-b from-green-500 to-emerald-500 rounded-full"></div>
          3. Condiciones de Aplicabilidad
        </h2>

        <p className="text-slate-300 mb-6 text-lg">
          Para que el Método del Gradiente Conjugado funcione, la matriz A debe cumplir dos condiciones:
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Condición 1 */}
          <div className="p-6 bg-blue-500/10 border border-blue-500/30 rounded-xl">
            <h3 className="text-xl font-bold text-blue-300 mb-4">Condición 1: Matriz Simétrica</h3>
            <div className="space-y-3 text-slate-300">
              <div>
                <p className="font-semibold mb-2">Definición:</p>
                <p className="text-center py-2 bg-slate-950/50 rounded font-mono text-blue-300">A = A<sup>T</sup></p>
              </div>
              <div>
                <p className="font-semibold mb-2">Verificación:</p>
                <p className="text-slate-400 text-sm">Elemento (i,j) = Elemento (j,i)</p>
              </div>
              <div className="p-3 bg-slate-950/50 rounded text-xs">
                <p className="mb-2 text-slate-400">Ejemplo:</p>
                <p className="font-mono mb-1">A = [4  -2   1]</p>
                <p className="font-mono mb-1">    [-2  5  -3]</p>
                <p className="font-mono mb-3">    [1  -3   6]</p>
                <p className="text-green-300">✓ A = A<sup>T</sup> → es simétrica</p>
              </div>
            </div>
          </div>

          {/* Condición 2 */}
          <div className="p-6 bg-purple-500/10 border border-purple-500/30 rounded-xl">
            <h3 className="text-xl font-bold text-purple-300 mb-4">Condición 2: Matriz Definida Positiva</h3>
            <div className="space-y-3 text-slate-300">
              <div>
                <p className="font-semibold mb-2">Definición:</p>
                <p className="text-center py-2 bg-slate-950/50 rounded font-mono text-purple-300">
                  x<sup>T</sup>Ax &gt; 0  para todo x ≠ 0
                </p>
              </div>
              <div className="p-3 bg-purple-900/20 rounded">
                <p className="font-semibold text-purple-200 mb-2">Es necesaria porque:</p>
                <ul className="space-y-1 text-slate-400 text-sm">
                  <li>• Garantiza que g(x) tiene un único mínimo</li>
                  <li>• Asegura que g(x) es convexa (forma de paraboloide)</li>
                  <li>• Garantiza convergencia del método</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* ¿Qué pasa si NO cumplen? */}
        <div className="p-6 bg-red-500/10 border border-red-500/30 rounded-xl">
          <h3 className="text-xl font-bold text-red-300 mb-4">⚠️ ¿Qué pasa si NO se cumplen?</h3>
          
          <div className="space-y-4">
            <div>
              <p className="font-semibold text-red-200 mb-2">Si A no es simétrica:</p>
              <p className="text-slate-300 mb-2">
                El método <span className="font-bold text-red-300">NO funciona</span> correctamente. 
                Puede diverger o dar resultados incorrectos.
              </p>
              <div className="p-3 bg-slate-950/50 rounded">
                <p className="font-semibold text-blue-200 text-sm mb-2">Soluciones alternativas:</p>
                <ul className="space-y-1 text-slate-400 text-sm">
                  <li>1. <span className="text-blue-300">Ecuaciones normales:</span> Resolver A<sup>T</sup>Ax = A<sup>T</sup>b (A<sup>T</sup>A es simétrica)</li>
                  <li>2. <span className="text-blue-300">BiCG (Bi-Conjugate Gradient):</span> Variante para matrices no simétricas</li>
                  <li>3. <span className="text-blue-300">GMRES:</span> Método más general para cualquier matriz</li>
                </ul>
              </div>
            </div>

            <div>
              <p className="font-semibold text-red-200 mb-2">Si A no es definida positiva:</p>
              <p className="text-slate-300">
                El método puede divergir. No hay garantía de convergencia.
              </p>
            </div>
          </div>
        </div>
      </Card>

      {/* 4. Algoritmo del Método */}
      <Card className="p-8 bg-gradient-to-br from-slate-900/80 to-slate-800/50">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <div className="w-1 h-8 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full"></div>
          4. Algoritmo del Método
        </h2>

        {/* FASE DE INICIALIZACIÓN */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4 text-cyan-300">FASE DE INICIALIZACIÓN</h3>
          
          <div className="p-6 bg-cyan-500/10 border border-cyan-500/30 rounded-xl mb-4">
            <h4 className="font-bold text-cyan-200 mb-3">📥 Entrada:</h4>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li>• Matriz A (n×n, simétrica y definida positiva)</li>
              <li>• Vector b (n×1)</li>
              <li>• Aproximación inicial x⁽⁰⁾ (usualmente x⁽⁰⁾ = 0)</li>
              <li>• Tolerancia ε (usualmente 10⁻⁶ o 10⁻⁸)</li>
              <li>• Máximo de iteraciones N<sub>max</sub></li>
            </ul>
          </div>

          <div className="p-6 bg-slate-950/50 rounded-xl border border-cyan-500/30">
            <h4 className="font-bold text-cyan-200 mb-4">Paso 0: Inicialización</h4>
            <div className="space-y-3 font-mono text-sm text-slate-300">
              <p>1. x = x⁽⁰⁾</p>
              <p>2. r⁽⁰⁾ = b - Ax⁽⁰⁾  <span className="text-slate-500">(calcular residuo inicial)</span></p>
              <p>3. v⁽¹⁾ = r⁽⁰⁾  <span className="text-slate-500">(primera dirección = descenso rápido)</span></p>
              <p>4. α₀ = ⟨r⁽⁰⁾, r⁽⁰⁾⟩ = ||r⁽⁰⁾||²  <span className="text-slate-500">(norma al cuadrado del residuo)</span></p>
              <p>5. k = 1  <span className="text-slate-500">(contador de iteraciones)</span></p>
            </div>
          </div>
        </div>

        {/* FASE ITERATIVA */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4 text-purple-300">FASE ITERATIVA</h3>
          <p className="text-slate-300 mb-4 font-semibold">PARA k = 1, 2, 3, ... HASTA CONVERGENCIA:</p>
          
          <div className="space-y-4">
            {/* Paso 1 */}
            <div className="p-4 bg-slate-950/50 rounded-xl border-l-4 border-blue-500">
              <p className="font-bold text-blue-300 mb-2">Paso 1: Calcular producto matriz-vector</p>
              <p className="font-mono text-slate-300 mb-2">u⁽ᵏ⁾ = Av⁽ᵏ⁾</p>
              <p className="text-slate-400 text-xs">Costo computacional: O(n²) para matriz densa, O(n) para matriz dispersa</p>
            </div>

            {/* Paso 2 */}
            <div className="p-4 bg-slate-950/50 rounded-xl border-l-4 border-purple-500">
              <p className="font-bold text-purple-300 mb-2">Paso 2: Calcular tamaño del paso</p>
              <div className="space-y-2">
                <p className="font-mono text-slate-300 text-sm">⟨v⁽ᵏ⁾, u⁽ᵏ⁾⟩ = v₁u₁ + v₂u₂ + ... + vₙuₙ</p>
                <p className="font-mono text-slate-300">tₖ = αₖ₋₁ / ⟨v⁽ᵏ⁾, u⁽ᵏ⁾⟩</p>
                <p className="text-slate-400 text-xs">Minimiza g(x) a lo largo de la dirección v⁽ᵏ⁾</p>
              </div>
            </div>

            {/* Paso 3 */}
            <div className="p-4 bg-slate-950/50 rounded-xl border-l-4 border-cyan-500">
              <p className="font-bold text-cyan-300 mb-2">Paso 3: Actualizar la solución</p>
              <p className="font-mono text-slate-300 mb-2">x⁽ᵏ⁾ = x⁽ᵏ⁻¹⁾ + tₖ · v⁽ᵏ⁾</p>
              <p className="text-slate-400 text-xs">Componente a componente: xᵢ⁽ᵏ⁾ = xᵢ⁽ᵏ⁻¹⁾ + tₖ · vᵢ⁽ᵏ⁾, para i=1,...,n</p>
            </div>

            {/* Paso 4 */}
            <div className="p-4 bg-slate-950/50 rounded-xl border-l-4 border-green-500">
              <p className="font-bold text-green-300 mb-2">Paso 4: Actualizar el residuo</p>
              <p className="font-mono text-slate-300 mb-2">r⁽ᵏ⁾ = r⁽ᵏ⁻¹⁾ - tₖ · u⁽ᵏ⁾</p>
              <p className="text-slate-400 text-xs">Equivalente a: r⁽ᵏ⁾ = b - Ax⁽ᵏ⁾ (pero más eficiente)</p>
            </div>

            {/* Paso 5 */}
            <div className="p-4 bg-slate-950/50 rounded-xl border-l-4 border-yellow-500">
              <p className="font-bold text-yellow-300 mb-2">Paso 5: Calcular norma del nuevo residuo</p>
              <p className="font-mono text-slate-300">βₖ = ⟨r⁽ᵏ⁾, r⁽ᵏ⁾⟩ = ||r⁽ᵏ⁾||²</p>
            </div>

            {/* Paso 6 */}
            <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-xl">
              <p className="font-bold text-green-300 mb-2">Paso 6: Verificar convergencia</p>
              <p className="font-mono text-slate-300 mb-2">Si ||r⁽ᵏ⁾|| = √βₖ &lt; ε</p>
              <p className="text-green-200">Entonces retornamos: x⁽ᵏ⁾ (solución encontrada)</p>
            </div>

            {/* Paso 7 */}
            <div className="p-4 bg-slate-950/50 rounded-xl border-l-4 border-orange-500">
              <p className="font-bold text-orange-300 mb-2">Paso 7: Calcular factor de corrección</p>
              <p className="font-mono text-slate-300 mb-2">sₖ = βₖ / αₖ₋₁</p>
              <p className="text-slate-400 text-xs">Este factor corrige la dirección anterior</p>
            </div>

            {/* Paso 8 */}
            <div className="p-4 bg-slate-950/50 rounded-xl border-l-4 border-pink-500">
              <p className="font-bold text-pink-300 mb-2">Paso 8: Actualizar dirección de búsqueda</p>
              <p className="font-mono text-slate-300 mb-2">v⁽ᵏ⁺¹⁾ = r⁽ᵏ⁾ + sₖ · v⁽ᵏ⁾</p>
              <p className="text-slate-400 text-xs">Mezcla el nuevo residuo con la dirección anterior para mantener la A-ortogonalidad</p>
            </div>

            {/* Paso 9 */}
            <div className="p-4 bg-slate-950/50 rounded-xl border-l-4 border-indigo-500">
              <p className="font-bold text-indigo-300 mb-2">Paso 9: Actualizar α para siguiente iteración</p>
              <div className="space-y-1 font-mono text-slate-300">
                <p>αₖ = βₖ</p>
                <p>k = k + 1</p>
              </div>
            </div>

            {/* Paso 10 */}
            <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
              <p className="font-bold text-red-300 mb-2">Paso 10: Verificar límite de iteraciones</p>
              <p className="font-mono text-slate-300 mb-2">Si k &gt; N<sub>max</sub></p>
              <p className="text-red-200">Entonces: No convergió, retornar x⁽ᵏ⁾ (mejor aproximación)</p>
            </div>
          </div>
        </div>

        {/* RESULTADOS */}
        <div className="p-6 bg-blue-500/10 border border-blue-500/30 rounded-xl">
          <h4 className="font-bold text-blue-200 mb-3">📊 RESULTADOS:</h4>
          <ul className="space-y-2 text-slate-300 text-sm">
            <li>• x⁽ᵏ⁾: Vector solución</li>
            <li>• k: Número de iteraciones realizadas</li>
            <li>• ||r⁽ᵏ⁾||: Norma del residuo final</li>
          </ul>
        </div>
      </Card>

      {/* 5. Ejemplo Práctico: Sistema de Distribución Eléctrica */}
      <Card className="p-8">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <div className="w-1 h-8 bg-gradient-to-b from-yellow-500 to-orange-500 rounded-full"></div>
          5. Ejemplo Práctico: Sistema de Distribución Eléctrica
        </h2>

        {/* 5.1 Planteamiento del Problema */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4 text-yellow-300">5.1. Planteamiento del Problema</h3>
          
          {/* 5.1.1 Contexto Real */}
          <div className="mb-6">
            <h4 className="text-xl font-semibold mb-3 text-yellow-200">5.1.1. Contexto Real</h4>
            <div className="p-6 bg-yellow-500/10 border border-yellow-500/30 rounded-xl">
              <p className="text-slate-300 mb-4 leading-relaxed">
                Una empresa de distribución eléctrica regional gestiona una red de transmisión con{' '}
                <span className="font-bold text-yellow-300">5 estaciones principales</span> interconectadas. 
                El departamento de ingeniería necesita calcular los voltajes de operación óptimos en cada nodo de la red para:
              </p>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400">✓</span>
                  <span>Garantizar suministro estable a todas las zonas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400">✓</span>
                  <span>Prevenir sobretensiones que puedan dañar equipos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400">✓</span>
                  <span>Detectar puntos críticos que requieran refuerzo</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400">✓</span>
                  <span>Optimizar el flujo de energía para minimizar pérdidas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400">✓</span>
                  <span>Planificar mantenimiento preventivo</span>
                </li>
              </ul>
            </div>
          </div>

          {/* 5.1.2 Descripción de la Red */}
          <div className="mb-6">
            <h4 className="text-xl font-semibold mb-3 text-yellow-200">5.1.2. Descripción de la Red</h4>
            
            <div className="p-6 bg-slate-950/50 rounded-xl border border-yellow-500/30 mb-4">
              <h5 className="font-bold text-yellow-300 mb-4">🔌 Topología de la Red</h5>
              <div className="bg-slate-900/50 p-4 rounded-lg text-center">
                <img 
                  src={`${process.env.PUBLIC_URL}/images/metodo-cg.png`}
                  alt="Topología de red eléctrica de 5 nodos"
                  className="mx-auto max-w-md h-auto rounded-lg shadow-lg"
                /> 
                <p className="text-slate-400 italic mt-2">Red de 5 nodos interconectados con resistencias variables</p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left p-4 bg-gradient-to-r from-yellow-500/20 to-orange-500/20">Nodo</th>
                    <th className="text-left p-4 bg-gradient-to-r from-yellow-500/20 to-orange-500/20">Descripción</th>
                    <th className="text-left p-4 bg-gradient-to-r from-yellow-500/20 to-orange-500/20">Consumo</th>
                    <th className="text-left p-4 bg-gradient-to-r from-yellow-500/20 to-orange-500/20">Prioridad</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { nodo: 1, desc: 'Subestación Principal', consumo: '45 A', prioridad: 'ALTA', color: 'red' },
                    { nodo: 2, desc: 'Planta Industrial', consumo: '30 A', prioridad: 'ALTA', color: 'red' },
                    { nodo: 3, desc: 'Zona Residencial', consumo: '25 A', prioridad: 'MEDIA', color: 'yellow' },
                    { nodo: 4, desc: 'Centro Comercial', consumo: '35 A', prioridad: 'ALTA', color: 'red' },
                    { nodo: 5, desc: 'Parque Industrial', consumo: '20 A', prioridad: 'MEDIA', color: 'yellow' }
                  ].map((row) => (
                    <tr key={row.nodo} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="p-4 font-mono text-yellow-300">{row.nodo}</td>
                      <td className="p-4 text-slate-300">{row.desc}</td>
                      <td className="p-4 font-mono text-cyan-300">{row.consumo}</td>
                      <td className="p-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          row.color === 'red' ? 'bg-red-500/20 text-red-300 border border-red-500/30' :
                          'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30'
                        }`}>
                          {row.prioridad}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 5.1.3 Leyes físicas aplicadas */}
          <div className="mb-6">
            <h4 className="text-xl font-semibold mb-3 text-yellow-200">5.1.3. Leyes físicas aplicadas</h4>
            <p className="text-slate-300 mb-4">
              El sistema se modela usando las <span className="font-bold text-yellow-300">Leyes de Kirchhoff</span>:
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-6 bg-blue-500/10 border border-blue-500/30 rounded-xl">
                <h5 className="font-bold text-blue-300 mb-3">⚡ Ley de Corrientes de Kirchhoff (LCK)</h5>
                <p className="text-slate-300 italic mb-3 text-sm">"La suma algebraica de corrientes en un nodo es cero"</p>
                <div className="text-center py-3 bg-slate-950/50 rounded font-mono text-sm text-blue-300">
                  Σ I<sub>entrada</sub> - Σ I<sub>salida</sub> = 0
                </div>
              </div>

              <div className="p-6 bg-purple-500/10 border border-purple-500/30 rounded-xl">
                <h5 className="font-bold text-purple-300 mb-3">🔋 Ley de Ohm</h5>
                <div className="space-y-3">
                  <div className="text-center py-2 bg-slate-950/50 rounded font-mono text-sm text-purple-300">
                    V = I · R
                  </div>
                  <div className="text-center py-2 bg-slate-950/50 rounded font-mono text-sm text-purple-300">
                    I = (V₁ - V₂) / R
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 5.2 Modelo matemático */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4 text-orange-300">5.2. Modelo matemático</h3>
          
          {/* 5.2.1 Ecuaciones del sistema */}
          <div className="mb-6">
            <h4 className="text-xl font-semibold mb-4 text-orange-200">5.2.1. Ecuaciones del sistema</h4>
            <p className="text-slate-300 mb-4">Aplicando las leyes de Kirchhoff a cada nodo:</p>

            <div className="space-y-4">
              {/* NODO 1 */}
              <div className="p-6 bg-slate-950/50 rounded-xl border-l-4 border-blue-500">
                <h5 className="font-bold text-blue-300 mb-3">NODO 1 (Subestación Principal):</h5>
                <div className="space-y-2 text-sm text-slate-300">
                  <p>Corriente desde nodo 2: <span className="font-mono text-blue-300">I₂→₁ = (V₂ - V₁)/2</span></p>
                  <p>Corriente desde nodo 3: <span className="font-mono text-blue-300">I₃→₁ = (V₃ - V₁)/1</span></p>
                  <p>Corriente inyectada: <span className="font-bold text-yellow-300">45 A</span></p>
                  <p className="pt-2">LCK: <span className="font-mono">I₂→₁ + I₃→₁ = 45</span></p>
                  <div className="mt-3 p-3 bg-blue-900/20 rounded">
                    <p className="font-mono text-center text-blue-300">(V₂ - V₁)/2 + (V₃ - V₁)/1 = 45</p>
                  </div>
                  <div className="mt-3 p-3 bg-green-900/20 rounded border border-green-500/30">
                    <p className="font-mono text-center text-green-300 font-bold">10V₁ - 2V₂ - V₃ = 45</p>
                    <p className="text-center text-green-400 text-xs mt-1">← Ecuación 1</p>
                  </div>
                </div>
              </div>

              {/* NODO 2 */}
              <div className="p-6 bg-slate-950/50 rounded-xl border-l-4 border-purple-500">
                <h5 className="font-bold text-purple-300 mb-3">NODO 2 (Planta Industrial):</h5>
                <div className="space-y-2 text-sm text-slate-300">
                  <p>Corriente desde nodo 1: <span className="font-mono text-purple-300">I₁→₂ = (V₁ - V₂)/2</span></p>
                  <p>Corriente hacia nodo 4: <span className="font-mono text-purple-300">I₂→₄ = (V₂ - V₄)/2</span></p>
                  <p>Corriente inyectada: <span className="font-bold text-yellow-300">30 A</span></p>
                  <div className="mt-3 p-3 bg-green-900/20 rounded border border-green-500/30">
                    <p className="font-mono text-center text-green-300 font-bold">-2V₁ + 8V₂ - 2V₄ = 30</p>
                    <p className="text-center text-green-400 text-xs mt-1">← Ecuación 2</p>
                  </div>
                </div>
              </div>

              {/* NODO 3 */}
              <div className="p-6 bg-slate-950/50 rounded-xl border-l-4 border-cyan-500">
                <h5 className="font-bold text-cyan-300 mb-3">NODO 3 (Zona Residencial):</h5>
                <div className="space-y-2 text-sm text-slate-300">
                  <p>Corriente desde nodo 1: <span className="font-mono text-cyan-300">I₁→₃ = (V₁ - V₃)/1</span></p>
                  <p>Corriente hacia nodo 5: <span className="font-mono text-cyan-300">I₃→₅ = (V₃ - V₅)/1</span></p>
                  <p>Corriente inyectada: <span className="font-bold text-yellow-300">25 A</span></p>
                  <div className="mt-3 p-3 bg-green-900/20 rounded border border-green-500/30">
                    <p className="font-mono text-center text-green-300 font-bold">-V₁ + 6V₃ - V₅ = 25</p>
                    <p className="text-center text-green-400 text-xs mt-1">← Ecuación 3</p>
                  </div>
                </div>
              </div>

              {/* NODO 4 */}
              <div className="p-6 bg-slate-950/50 rounded-xl border-l-4 border-green-500">
                <h5 className="font-bold text-green-300 mb-3">NODO 4 (Centro Comercial):</h5>
                <div className="space-y-2 text-sm text-slate-300">
                  <p>Corriente desde nodo 2: <span className="font-mono text-green-300">I₂→₄ = (V₂ - V₄)/2</span></p>
                  <p>Corriente hacia nodo 5: <span className="font-mono text-green-300">I₄→₅ = (V₄ - V₅)/1</span></p>
                  <p>Corriente inyectada: <span className="font-bold text-yellow-300">35 A</span></p>
                  <div className="mt-3 p-3 bg-green-900/20 rounded border border-green-500/30">
                    <p className="font-mono text-center text-green-300 font-bold">-2V₂ + 7V₄ - V₅ = 35</p>
                    <p className="text-center text-green-400 text-xs mt-1">← Ecuación 4</p>
                  </div>
                </div>
              </div>

              {/* NODO 5 */}
              <div className="p-6 bg-slate-950/50 rounded-xl border-l-4 border-yellow-500">
                <h5 className="font-bold text-yellow-300 mb-3">NODO 5 (Parque Industrial):</h5>
                <div className="space-y-2 text-sm text-slate-300">
                  <p>Corriente desde nodo 3: <span className="font-mono text-yellow-300">I₃→₅ = (V₃ - V₅)/1</span></p>
                  <p>Corriente desde nodo 4: <span className="font-mono text-yellow-300">I₄→₅ = (V₄ - V₅)/1</span></p>
                  <p>Corriente inyectada: <span className="font-bold text-yellow-300">20 A</span></p>
                  <div className="mt-3 p-3 bg-green-900/20 rounded border border-green-500/30">
                    <p className="font-mono text-center text-green-300 font-bold">-V₃ - V₄ + 5V₅ = 20</p>
                    <p className="text-center text-green-400 text-xs mt-1">← Ecuación 5</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 5.2.2 Sistema matricial */}
          <div className="mb-6">
            <h4 className="text-xl font-semibold mb-4 text-orange-200">5.2.2. Sistema matricial</h4>
            
            <div className="p-6 bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-xl">
              <h5 className="font-bold text-orange-200 mb-4 text-center">Sistema de ecuaciones:</h5>
              <div className="font-mono text-sm text-slate-300 space-y-1 max-w-3xl mx-auto">
                <p className="text-center">10V₁ - 2V₂ - V₃ + 0V₄ + 0V₅ = 45  <span className="text-slate-500">(Nodo 1)</span></p>
                <p className="text-center">-2V₁ + 8V₂ + 0V₃ - 2V₄ + 0V₅ = 30  <span className="text-slate-500">(Nodo 2)</span></p>
                <p className="text-center">-V₁ + 0V₂ + 6V₃ + 0V₄ - V₅ = 25  <span className="text-slate-500">(Nodo 3)</span></p>
                <p className="text-center">0V₁ - 2V₂ + 0V₃ + 7V₄ - V₅ = 35  <span className="text-slate-500">(Nodo 4)</span></p>
                <p className="text-center">0V₁ + 0V₂ - V₃ - V₄ + 5V₅ = 20  <span className="text-slate-500">(Nodo 5)</span></p>
              </div>
            </div>
          </div>

          {/* 5.2.3 Verificación de condiciones */}
          <div className="mb-6">
            <h4 className="text-xl font-semibold mb-4 text-orange-200">5.2.3. Verificación de condiciones</h4>
            
            <div className="p-6 bg-slate-950/50 rounded-xl border border-green-500/30">
              <h5 className="font-bold text-green-300 mb-4">¿A = A<sup>T</sup> ?</h5>
              
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-slate-400 mb-2 text-center text-sm">Matriz A:</p>
                  <div className="font-mono text-xs text-slate-300 bg-slate-900/50 p-3 rounded">
                    <p className="text-center">[10  -2  -1   0   0]</p>
                    <p className="text-center">[-2   8   0  -2   0]</p>
                    <p className="text-center">[-1   0   6   0  -1]</p>
                    <p className="text-center">[ 0  -2   0   7  -1]</p>
                    <p className="text-center">[ 0   0  -1  -1   5]</p>
                  </div>
                </div>
                
                <div>
                  <p className="text-slate-400 mb-2 text-center text-sm">Matriz A<sup>T</sup>:</p>
                  <div className="font-mono text-xs text-slate-300 bg-slate-900/50 p-3 rounded">
                    <p className="text-center">[10  -2  -1   0   0]</p>
                    <p className="text-center">[-2   8   0  -2   0]</p>
                    <p className="text-center">[-1   0   6   0  -1]</p>
                    <p className="text-center">[ 0  -2   0   7  -1]</p>
                    <p className="text-center">[ 0   0  -1  -1   5]</p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-green-900/20 rounded border border-green-500/30 text-center">
                <p className="text-green-300 font-bold text-lg">✓ A = A<sup>T</sup>  ⟹  SÍ cumple (es simétrica)</p>
              </div>
            </div>
          </div>
        </div>

        {/* 5.3 Solución al problema */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4 text-red-300">5.3. Solución al problema </h3>
          
          {/* 5.3.1 Datos de entrada */}
          <div className="mb-6">
            <h4 className="text-xl font-semibold mb-4 text-red-200">5.3.1. Datos de entrada</h4>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-xl">
                <p className="text-blue-300 font-bold mb-2 text-center">Matriz A (5×5)</p>
                <div className="font-mono text-xs text-slate-300 text-center space-y-1">
                  <p>[10  -2  -1   0   0]</p>
                  <p>[-2   8   0  -2   0]</p>
                  <p>[-1   0   6   0  -1]</p>
                  <p>[ 0  -2   0   7  -1]</p>
                  <p>[ 0   0  -1  -1   5]</p>
                </div>
              </div>

              <div className="p-4 bg-purple-500/10 border border-purple-500/30 rounded-xl">
                <p className="text-purple-300 font-bold mb-2 text-center">Vector b</p>
                <div className="font-mono text-xs text-slate-300 text-center space-y-1">
                  <p>[45]</p>
                  <p>[30]</p>
                  <p>[25]</p>
                  <p>[35]</p>
                  <p>[20]</p>
                </div>
              </div>

              <div className="p-4 bg-cyan-500/10 border border-cyan-500/30 rounded-xl">
                <p className="text-cyan-300 font-bold mb-2 text-center">Vector x⁽⁰⁾</p>
                <div className="font-mono text-xs text-slate-300 text-center space-y-1">
                  <p>[0]</p>
                  <p>[0]</p>
                  <p>[0]</p>
                  <p>[0]</p>
                  <p>[0]</p>
                </div>
              </div>
            </div>
          </div>

          {/* 5.3.2 Iteraciones - Resumen */}
          <div className="mb-6">
            <h4 className="text-xl font-semibold mb-4 text-red-200">5.3.2. Iteraciones</h4>
            
            <div className="p-4 bg-amber-500/10 border border-amber-500/30 rounded-xl mb-4">
              <p className="text-amber-200 text-sm">
                <span className="font-bold">📊 Nota:</span> Se muestran las iteraciones clave. El método converge en 5 iteraciones con tolerancia {'<'} 10⁻¹⁰
              </p>
            </div>

            <div className="space-y-6">
              {/* Iteración k=0 */}
              <div className="mb-4 p-6 bg-slate-950/50 rounded-xl border border-cyan-500/30">
                <h5 className="font-bold text-cyan-300 mb-3">Iteración k=0 (Inicialización)</h5>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left p-2 text-cyan-300">Parámetro</th>
                        <th className="text-left p-2 text-cyan-300">Valores</th>
                      </tr>
                    </thead>
                    <tbody className="font-mono text-xs">
                      <tr className="border-b border-white/5">
                        <td className="p-2 text-slate-400">r⁽⁰⁾ (Residuo inicial)</td>
                        <td className="p-2 text-slate-300">[45, 30, 25, 35, 20]</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="p-2 text-slate-400">v⁽¹⁾ (Dirección)</td>
                        <td className="p-2 text-slate-300">[45, 30, 25, 35, 20]</td>
                      </tr>
                      <tr>
                        <td className="p-2 text-slate-400">α₀</td>
                        <td className="p-2 text-slate-300">5175</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Iteración k=1 */}
              <div className="mb-4 p-6 bg-slate-950/50 rounded-xl border border-cyan-500/30">
                <h5 className="font-bold text-cyan-300 mb-3">Iteración k=1</h5>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left p-2 text-cyan-300">Parámetro</th>
                        <th className="text-left p-2 text-cyan-300">Valores</th>
                      </tr>
                    </thead>
                    <tbody className="font-mono text-xs">
                      <tr className="border-b border-white/5">
                        <td className="p-2 text-slate-400">u = Av⁽¹⁾</td>
                        <td className="p-2 text-slate-300">[365, 80, 85, 165, 40]</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="p-2 text-slate-400">vᵀ·u</td>
                        <td className="p-2 text-slate-300">27525</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="p-2 text-slate-400">t₁</td>
                        <td className="p-2 text-slate-300">0.188010899</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="p-2 text-slate-400">x⁽¹⁾</td>
                        <td className="p-2 text-slate-300">[8.46049046, 5.64032698, 4.70027248, 6.58038147, 3.76021798]</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="p-2 text-slate-400">r⁽¹⁾</td>
                        <td className="p-2 text-slate-300">[-23.6239782, 14.9591281, 9.01907357, 3.97820163, 12.479564]</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="p-2 text-slate-400">β₁</td>
                        <td className="p-2 text-slate-300">1034.77715</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="p-2 text-slate-400">s₁</td>
                        <td className="p-2 text-slate-300">0.19995694</td>
                      </tr>
                      <tr>
                        <td className="p-2 text-slate-400">v⁽²⁾</td>
                        <td className="p-2 text-slate-300">[-14.625916, 20.9578362, 14.017997, 10.9766945, 16.4787028]</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Iteración k=2 */}
              <div className="mb-4 p-6 bg-slate-950/50 rounded-xl border border-cyan-500/30">
                <h5 className="font-bold text-cyan-300 mb-3">Iteración k=2</h5>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left p-2 text-cyan-300">Parámetro</th>
                        <th className="text-left p-2 text-cyan-300">Valores</th>
                      </tr>
                    </thead>
                    <tbody className="font-mono text-xs">
                      <tr className="border-b border-white/5">
                        <td className="p-2 text-slate-400">u = Av⁽²⁾</td>
                        <td className="p-2 text-slate-300">[-202.192829, 174.961133, 82.2551953, 18.442486, 57.3988225]</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="p-2 text-slate-400">vᵀ·u</td>
                        <td className="p-2 text-slate-300">8925.41085</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="p-2 text-slate-400">t₂</td>
                        <td className="p-2 text-slate-300">0.115936081</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="p-2 text-slate-400">x⁽²⁾</td>
                        <td className="p-2 text-slate-300">[6.76481908, 8.07009637, 6.32546411, 7.85297641, 5.6706942]</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="p-2 text-slate-400">r⁽²⁾</td>
                        <td className="p-2 text-slate-300">[-0.182534, -5.32517994, -0.5172714, 1.84005209, 5.82496951]</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="p-2 text-slate-400">β₂</td>
                        <td className="p-2 text-slate-300">65.9744913</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="p-2 text-slate-400">s₂</td>
                        <td className="p-2 text-slate-300">0.0637572</td>
                      </tr>
                      <tr>
                        <td className="p-2 text-slate-400">v⁽³⁾</td>
                        <td className="p-2 text-slate-300">[-1.11504142, -3.98896704, 0.37647681, 2.53989536, 6.87560542]</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Iteración k=3 */}
              <div className="mb-4 p-6 bg-slate-950/50 rounded-xl border border-cyan-500/30">
                <h5 className="font-bold text-cyan-300 mb-3">Iteración k=3</h5>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left p-2 text-cyan-300">Parámetro</th>
                        <th className="text-left p-2 text-cyan-300">Valores</th>
                      </tr>
                    </thead>
                    <tbody className="font-mono text-xs">
                      <tr className="border-b border-white/5">
                        <td className="p-2 text-slate-400">u = Av⁽³⁾</td>
                        <td className="p-2 text-slate-300">[-3.54895689, -34.7614442, -3.50170316, 18.8815962, 31.4616549]</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="p-2 text-slate-400">vᵀ·u</td>
                        <td className="p-2 text-slate-300">405.576383</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="p-2 text-slate-400">t₃</td>
                        <td className="p-2 text-slate-300">0.162668474</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="p-2 text-slate-400">x⁽³⁾</td>
                        <td className="p-2 text-slate-300">[6.583437, 7.42121718, 6.38670502, 8.26613731, 6.78913844]</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="p-2 text-slate-400">r⁽³⁾</td>
                        <td className="p-2 text-slate-300">[0.3947694, 0.32941114, 0.05234531, -1.23138835, 0.70715012]</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="p-2 text-slate-400">β₃</td>
                        <td className="p-2 text-slate-300">2.28347317</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="p-2 text-slate-400">s₃</td>
                        <td className="p-2 text-slate-300">0.03461146</td>
                      </tr>
                      <tr>
                        <td className="p-2 text-slate-400">v⁽⁴⁾</td>
                        <td className="p-2 text-slate-300">[0.35617619, 0.19134719, 0.06537572, -1.14347888, 0.94512483]</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Iteración k=4 */}
              <div className="mb-4 p-6 bg-slate-950/50 rounded-xl border border-cyan-500/30">
                <h5 className="font-bold text-cyan-300 mb-3">Iteración k=4</h5>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left p-2 text-cyan-300">Parámetro</th>
                        <th className="text-left p-2 text-cyan-300">Valores</th>
                      </tr>
                    </thead>
                    <tbody className="font-mono text-xs">
                      <tr className="border-b border-white/5">
                        <td className="p-2 text-slate-400">u = Av⁽⁴⁾</td>
                        <td className="p-2 text-slate-300">[3.11369183, 3.10538285, -0.90904668, -9.33217134, 5.8037273]</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="p-2 text-slate-400">vᵀ·u</td>
                        <td className="p-2 text-slate-300">17.8001872</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="p-2 text-slate-400">t₄</td>
                        <td className="p-2 text-slate-300">0.128283661</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="p-2 text-slate-400">x⁽⁴⁾</td>
                        <td className="p-2 text-slate-300">[6.62912859, 7.4457639, 6.39509166, 8.11944765, 6.91038252]</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="p-2 text-slate-400">r⁽⁴⁾</td>
                        <td className="p-2 text-slate-300">[-0.00466639, -0.06895874, 0.16896115, -0.03422325, -0.03737327]</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="p-2 text-slate-400">β₄</td>
                        <td className="p-2 text-slate-300">0.03589294</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="p-2 text-slate-400">s₄</td>
                        <td className="p-2 text-slate-300">0.01571858</td>
                      </tr>
                      <tr>
                        <td className="p-2 text-slate-400">v⁽⁵⁾</td>
                        <td className="p-2 text-slate-300">[0.00093219, -0.06595103, 0.16998876, -0.05219711, -0.02251725]</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Iteración k=5 (Final) */}
              <div className="p-6 bg-green-900/20 rounded-xl border border-green-500/30">
                <h5 className="font-bold text-green-300 mb-3">Iteración k=5 (Convergencia alcanzada) ✓</h5>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left p-2 text-green-300">Parámetro</th>
                        <th className="text-left p-2 text-green-300">Valores</th>
                      </tr>
                    </thead>
                    <tbody className="font-mono text-xs">
                      <tr className="border-b border-white/5">
                        <td className="p-2 text-slate-400">u = Av⁽⁵⁾</td>
                        <td className="p-2 text-slate-300">[-0.02876475, -0.42507845, 1.04151763, -0.21096043, -0.23037791]</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="p-2 text-slate-400">vᵀ·u</td>
                        <td className="p-2 text-slate-300">0.22125284</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="p-2 text-slate-400">t₅</td>
                        <td className="p-2 text-slate-300">0.162225913</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="p-2 text-slate-400">x⁽⁵⁾</td>
                        <td className="p-2 text-slate-300">[6.62927981, 7.43506494, 6.42266824, 8.11097993, 6.90672963]</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="p-2 text-slate-400">r⁽⁵⁾</td>
                        <td className="p-2 text-green-300">[-5.3083E-16, 2.7756E-16, 0, -1.8041E-16, -1.1102E-16]</td>
                      </tr>
                      <tr>
                        <td className="p-2 text-slate-400">||r⁽⁵⁾||</td>
                        <td className="p-2 text-green-300 font-bold">4.0369 × 10⁻³¹</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-4 p-3 bg-green-500/20 rounded border border-green-500/40 text-center">
                  <p className="text-green-200 font-bold">✓ r⁽⁵⁾ es prácticamente 0, entonces PARAMOS</p>
                </div>
              </div>
            </div>
          </div>

          {/* 5.3.3 Solución Final */}
          <div className="mb-6">
            <h4 className="text-xl font-semibold mb-4 text-red-200">5.3.3. Solución Final</h4>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left p-4 bg-gradient-to-r from-red-500/20 to-orange-500/20">Nodo</th>
                    <th className="text-left p-4 bg-gradient-to-r from-red-500/20 to-orange-500/20">Descripción</th>
                    <th className="text-left p-4 bg-gradient-to-r from-red-500/20 to-orange-500/20">Voltaje (V)</th>
                    <th className="text-left p-4 bg-gradient-to-r from-red-500/20 to-orange-500/20">Estado</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { nodo: 1, desc: 'Subestación Principal', voltaje: '6.62927981', estado: 'ALTA', color: 'red' },
                    { nodo: 2, desc: 'Planta Industrial', voltaje: '7.43506494', estado: 'NORMAL', color: 'green' },
                    { nodo: 3, desc: 'Zona Residencial', voltaje: '6.42266824', estado: 'NORMAL', color: 'green' },
                    { nodo: 4, desc: 'Centro Comercial', voltaje: '8.11097993', estado: 'ALTA', color: 'red' },
                    { nodo: 5, desc: 'Parque Industrial', voltaje: '6.90672963', estado: 'BAJO', color: 'yellow' }
                  ].map((row) => (
                    <tr key={row.nodo} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="p-4 font-mono text-orange-300 font-bold">{row.nodo}</td>
                      <td className="p-4 text-slate-300">{row.desc}</td>
                      <td className="p-4 font-mono text-cyan-300 font-bold">{row.voltaje}</td>
                      <td className="p-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          row.color === 'red' ? 'bg-red-500/20 text-red-300 border border-red-500/30' :
                          row.color === 'green' ? 'bg-green-500/20 text-green-300 border border-green-500/30' :
                          'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30'
                        }`}>
                          {row.estado}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* 5.4 Interpretación de Resultados */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4 text-green-300">5.4. Interpretación de Resultados</h3>
          
          <div className="p-6 bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-xl mb-6">
            <p className="text-slate-300 mb-4 leading-relaxed">
              El departamento de ingeniería necesita calcular los voltajes de operación óptimos en cada nodo de la red. 
              Los resultados obtenidos son:
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-green-500/30">
                    <th className="text-left p-3 text-green-300">Nodo</th>
                    <th className="text-left p-3 text-green-300">Descripción</th>
                    <th className="text-left p-3 text-green-300">Voltaje (V)</th>
                  </tr>
                </thead>
                <tbody className="font-mono text-sm">
                  <tr className="border-b border-white/5">
                    <td className="p-3 text-green-300">1</td>
                    <td className="p-3 text-slate-300">Subestación Principal</td>
                    <td className="p-3 text-cyan-300">6.62927981</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="p-3 text-green-300">2</td>
                    <td className="p-3 text-slate-300">Planta Industrial</td>
                    <td className="p-3 text-cyan-300">7.43506494</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="p-3 text-green-300">3</td>
                    <td className="p-3 text-slate-300">Zona Residencial</td>
                    <td className="p-3 text-cyan-300">6.42266824</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="p-3 text-green-300">4</td>
                    <td className="p-3 text-slate-300">Centro Comercial</td>
                    <td className="p-3 text-cyan-300">8.11097993</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-green-300">5</td>
                    <td className="p-3 text-slate-300">Parque Industrial</td>
                    <td className="p-3 text-cyan-300">6.90672963</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h4 className="font-bold text-green-300 mb-4 text-lg">📊 Análisis de los resultados:</h4>

            <div className="space-y-4">
              <div className="p-4 bg-slate-950/50 rounded-lg">
                <p className="font-bold text-blue-300 mb-2">1. Garantizar suministro estable</p>
                <ul className="text-slate-300 text-sm space-y-1">
                  <li>• Todos los nodos tienen voltajes operativos</li>
                  <li>• La red puede suministrar energía a todas las zonas</li>
                </ul>
              </div>

              <div className="p-4 bg-slate-950/50 rounded-lg">
                <p className="font-bold text-red-300 mb-2">2. Prevenir sobretensiones</p>
                <ul className="text-slate-300 text-sm space-y-1">
                  <li>• El <span className="font-bold text-red-300">Nodo 4 (Centro Comercial)</span> tiene 8.11V - es el más alto</li>
                  <li>• <span className="font-bold text-yellow-300">Recomendación:</span> Instalar protecciones contra picos de voltaje</li>
                </ul>
              </div>

              <div className="p-4 bg-slate-950/50 rounded-lg">
                <p className="font-bold text-orange-300 mb-2">3. Detectar puntos críticos</p>
                <ul className="text-slate-300 text-sm space-y-1">
                  <li>• <span className="font-bold text-red-300">Punto crítico 1:</span> Nodo 4 con voltaje muy alto (8.11V)</li>
                  <li>• <span className="font-bold text-yellow-300">Punto crítico 2:</span> Nodo 3 con voltaje bajo (6.42V)</li>
                  <li>• Ambos requieren refuerzo en el sistema</li>
                </ul>
              </div>

              <div className="p-4 bg-slate-950/50 rounded-lg">
                <p className="font-bold text-green-300 mb-2">4. Optimizar flujo de energía</p>
                <ul className="text-slate-300 text-sm space-y-1">
                  <li>• Los voltajes calculados minimizan las pérdidas</li>
                  <li>• La solución es matemáticamente óptima</li>
                </ul>
              </div>

              <div className="p-4 bg-slate-950/50 rounded-lg">
                <p className="font-bold text-purple-300 mb-2">5. Planificar mantenimiento</p>
                <ul className="text-slate-300 text-sm space-y-1">
                  <li>• <span className="font-bold text-red-300">Prioridad ALTA:</span> Nodos 4 y 3</li>
                  <li>• <span className="font-bold text-yellow-300">Prioridad MEDIA:</span> Revisar Nodos 2 y 5</li>
                  <li>• <span className="font-bold text-green-300">Prioridad BAJA:</span> Nodo 1 (estable)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="p-6 bg-blue-500/10 border border-blue-500/30 rounded-xl">
            <h4 className="font-bold text-blue-300 mb-3">💡 Conclusiones:</h4>
            <p className="text-slate-300 leading-relaxed">
              La red eléctrica puede operar de forma estable con los voltajes calculados, pero se requiere 
              atención inmediata en el <span className="font-bold text-red-300">Centro Comercial (Nodo 4)</span> y 
              la <span className="font-bold text-yellow-300">Zona Residencial (Nodo 3)</span> para prevenir fallos futuros.
            </p>
          </div>
        </div>
      </Card>

      {/* 6. Implementación */}
      <Card className="p-8 bg-gradient-to-br from-slate-900/80 to-slate-800/50">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <div className="w-1 h-8 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full"></div>
          6. Implementación en Python
        </h2>

        <div className="bg-slate-950 rounded-xl p-6 overflow-x-auto">
          <pre className="text-sm text-slate-300 font-mono leading-relaxed">
{`import numpy as np

def gradiente_conjugado(A, b, x0=None, tol=1e-10, max_iter=100):
    """
    Método del Gradiente Conjugado para resolver Ax = b
    
    Parámetros:
    -----------
    A : array_like
        Matriz de coeficientes (debe ser simétrica y definida positiva)
    b : array_like
        Vector de términos independientes
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
    
    # Verificar si la matriz es simétrica
    if not np.allclose(A, A.T):
        print("Advertencia: La matriz no es simétrica")
        return None
    
    # Inicialización
    if x0 is None:
        x = np.zeros(n)
    else:
        x = x0.copy()
    
    # Residuo inicial r⁽⁰⁾ = b - Ax⁽⁰⁾
    r = b - A @ x
    
    # Primera dirección de búsqueda v⁽¹⁾ = r⁽⁰⁾
    v = r.copy()
    
    print("Iteración k=0")
    print(f"x(0) = {x}")
    print(f"r(0) = {r}")
    print(f"v(1) = {v}")
    print("-" * 50)
    
    # Almacenar historial
    historial = {
        'x': [x.copy()],
        'r': [r.copy()],
        'v': [v.copy()],
        'alpha': [],
        'beta': []
    }
    
    for k in range(1, max_iter + 1):
        # Paso 1: u⁽ᵏ⁾ = Av⁽ᵏ⁾
        u = A @ v
        
        # Paso 2: v^T * u
        vT_u = np.dot(v, u)
        
        # Paso 3: alpha = (r⁽ᵏ⁻¹⁾·r⁽ᵏ⁻¹⁾) / (v⁽ᵏ⁾·u⁽ᵏ⁾)
        r_norm_sq = np.dot(r, r)
        alpha = r_norm_sq / vT_u
        
        # Paso 4: Actualización de la solución: x⁽ᵏ⁾ = x⁽ᵏ⁻¹⁾ + alpha * v⁽ᵏ⁾
        x_new = x + alpha * v
        
        # Paso 5: Actualización del residuo: r⁽ᵏ⁾ = r⁽ᵏ⁻¹⁾ - alpha * u⁽ᵏ⁾
        r_new = r - alpha * u
        
        # Paso 6: Norma del nuevo residuo
        r_new_norm_sq = np.dot(r_new, r_new)
        
        # Paso 7: beta = (r⁽ᵏ⁾·r⁽ᵏ⁾) / (r⁽ᵏ⁻¹⁾·r⁽ᵏ⁻¹⁾)
        beta = r_new_norm_sq / r_norm_sq
        
        # s = beta (en la hoja se llama s)
        s = beta
        
        # Paso 8: Actualizar dirección de búsqueda: v⁽ᵏ⁺¹⁾ = r⁽ᵏ⁾ + beta * v⁽ᵏ⁾
        v_new = r_new + beta * v
        
        print(f"Iteración k={k}")
        print(f"u = A*v = {u}")
        print(f"v^T * u = {vT_u}")
        print(f"t{k} = {alpha:.10f}")
        print(f"x({k}) = {x_new}")
        print(f"r({k}) = {r_new}")
        print(f"beta = {r_new_norm_sq:.10e}")
        print(f"s{k} = {beta:.10f}")
        print(f"v({k + 1}) = {v_new}")
        print("-" * 50)
        
        # Actualizar variables para la siguiente iteración
        x = x_new
        r = r_new
        v = v_new
        
        # Guardar en historial
        historial['x'].append(x.copy())
        historial['r'].append(r.copy())
        historial['v'].append(v.copy())
        historial['alpha'].append(alpha)
        historial['beta'].append(beta)
        
        # Paso 9: Verificar convergencia
        if np.linalg.norm(r) < tol:
            print(f"Convergencia alcanzada en la iteración {k}")
            print(f"Residuo final: {np.linalg.norm(r):.2e}")
            break
    
    return x, historial


def resolver_problema():
    # Matriz A del sistema
    A = np.array([
        [10, -2, -1,  0,  0],
        [-2,  8,  0, -2,  0],
        [-1,  0,  6,  0, -1],
        [ 0, -2,  0,  7, -1],
        [ 0,  0, -1, -1,  5]
    ])
    
    # Vector b
    b = np.array([45, 30, 25, 35, 20])
    
    # Aproximación inicial x⁽⁰⁾ = (0,0,0,0,0)
    x0 = np.zeros(5)
    
    print("=" * 70)
    print("RESOLVIENDO MEDIANTE EL MÉTODO DEL GRADIENTE CONJUGADO")
    print("=" * 70)
    print(f"Matriz A:\\n{A}")
    print(f"Vector b: {b}")
    print(f"Aproximación inicial x(0): {x0}")
    print()
    
    # Verificar si la matriz es simétrica
    es_simetrica = np.allclose(A, A.T)
    print(f"¿La matriz es simétrica? {es_simetrica}")
    if es_simetrica:
        print("✓ A = Aᵀ (La matriz es simétrica)")
    print()
    
    # Resolver el sistema
    solucion, historial = gradiente_conjugado(A, b, x0)
    
    print("\\n" + "=" * 70)
    print("SOLUCIÓN FINAL")
    print("=" * 70)
    print(f"x = {solucion}")
    
    # Verificar la solución
    residuo_final = b - A @ solucion
    print(f"Residuo final: b - Ax = {residuo_final}")
    print(f"Norma del residuo: {np.linalg.norm(residuo_final):.2e}")
    
    return solucion, historial


if __name__ == "__main__":
    solucion, historial = resolver_problema()
    print("\\n" + "=" * 70)`}
          </pre>
        </div>

        <div className="mt-6 p-6 bg-blue-500/10 border border-blue-500/30 rounded-xl">
          <h3 className="font-bold text-blue-300 mb-3">📝 Nota sobre la implementación:</h3>
          <p className="text-slate-300 text-sm leading-relaxed">
            Este código Python implementa completamente el Método del Gradiente Conjugado tal como se describió 
            en el algoritmo. Incluye verificación de simetría, cálculo de todas las variables intermedias, 
            y muestra el historial completo de iteraciones para fines educativos y de depuración.
          </p>
        </div>
      </Card>

      {/* Fin de la Parte I */}
      <div className="p-8 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-xl text-center">
        <h3 className="text-2xl font-bold text-blue-300 mb-3">✓ FIN DE LA PARTE I</h3>
        <p className="text-slate-300 text-lg mb-2">MÉTODO DEL GRADIENTE CONJUGADO (CG)</p>
        <p className="text-slate-400 text-sm">
          Implementación completa según el documento Word
        </p>
      </div>
    </div>
  );
};

export default MetodoCG;