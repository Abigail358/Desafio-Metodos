// src/pages/Inicio.js
import React from 'react';
import { Zap, Target, TrendingUp, Calculator, Cpu, ChevronRight, Quote } from 'lucide-react';

const Card = ({ children, className = '', gradient = false }) => {
  return (
    <div className={`bg-slate-900/50 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden ${gradient ? 'bg-gradient-to-br from-slate-900/50 to-blue-900/20' : ''} ${className}`}>
      {children}
    </div>
  );
};

const Inicio = () => {
  return (
    <div className="space-y-8 max-w-6xl mx-auto animate-fadeIn">
      {/* Hero Section */}
      <Card gradient className="p-8 lg:p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 rounded-full border border-blue-500/30 mb-6">
            <Zap className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-300">DESAFIO</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Métodos Numéricos Avanzados
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl">
            Implementación y análisis de los métodos del Gradiente Conjugado (CG) y 
            Sobre Relajación Sucesiva (SOR) para la resolución de sistemas de ecuaciones lineales.
          </p>
        </div>
      </Card>

      {/* Info Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shrink-0">
              <Target className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Información:</h3>
              <div className="space-y-2 text-sm text-slate-400">
                <p><span className="text-slate-300 font-medium">Estudiante:</span> Univ. Mamani Mamani Abigail Blanca</p>
                <p><span className="text-slate-300 font-medium">Materia:</span> INF 373 - Métodos Numéricos I</p>
                <p><span className="text-slate-300 font-medium">Docente:</span> Lic. Brigida Carvajal Blanco</p>
                <p><span className="text-slate-300 font-medium">Fecha:</span> La Paz - 2025</p>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center shrink-0">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Objetivo</h3>
              <p className="text-sm text-slate-400">
                Implementar y analizar dos métodos numéricos avanzados para la resolución 
                de sistemas de ecuaciones lineales, comparando su eficiencia y aplicabilidad 
                en problemas reales de ingeniería.
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* Content Grid */}
      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
            <Calculator className="w-6 h-6 text-blue-400" />
            Método del Gradiente Conjugado
          </h3>
          <ul className="space-y-3 text-slate-300">
            <li className="flex items-start gap-2">
              <ChevronRight className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
              <span>Teoría y fundamentos matemáticos</span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
              <span>Algoritmo de optimización iterativa</span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
              <span>Aplicación en sistemas de distribución eléctrica</span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
              <span>Implementación en Python con NumPy</span>
            </li>
          </ul>
        </Card>

        <Card className="p-6">
          <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
            <Cpu className="w-6 h-6 text-purple-400" />
            Método SOR
          </h3>
          <ul className="space-y-3 text-slate-300">
            <li className="flex items-start gap-2">
              <ChevronRight className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
              <span>Teoría y parámetro de relajación ω</span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
              <span>Mejora del método Gauss-Seidel</span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
              <span>Aplicación en distribución de temperatura</span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
              <span>Análisis de convergencia y resultados</span>
            </li>
          </ul>
        </Card>
      </div>

      {/* Formula Card */}
      <Card className="p-8 bg-gradient-to-br from-slate-900/80 to-blue-900/30">
        <h3 className="font-bold text-xl mb-4 text-center">Ecuación General del Sistema</h3>
        <div className="text-center">
          <div className="inline-block px-8 py-6 bg-slate-950/50 rounded-2xl border border-blue-500/30">
            <p className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Ax = b
            </p>
            <p className="text-sm text-slate-400 mt-4">
              Donde A es la matriz de coeficientes, x el vector de incógnitas y b el vector de términos independientes
            </p>
          </div>
        </div>
      </Card>

      {/* Frase Inspiradora */}
      <Card className="p-8 bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/30">
        <div className="text-center max-w-4xl mx-auto">
          <Quote className="w-8 h-8 text-purple-400 mx-auto mb-4 opacity-50" />
          <blockquote className="text-xl lg:text-2xl font-light text-slate-300 italic leading-relaxed">
            "El arte del análisis numérico no reside en conocer un solo método, 
            sino en saber cuándo aplicar cada herramienta disponible"
          </blockquote>
          <div className="mt-6 pt-4 border-t border-purple-500/20">
            
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Inicio;