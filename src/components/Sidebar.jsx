// src/components/Sidebar.js
import React from 'react';
import { Home, Calculator, Cpu, X, ChevronRight, PlayCircle } from 'lucide-react';

const Sidebar = ({ sidebarOpen, setSidebarOpen, currentPage, navigateTo }) => {
  const menuItems = [
    { 
      id: 'inicio', 
      icon: Home, 
      label: 'Inicio', 
      desc: 'Bienvenida' 
    },
    { 
      id: 'cg', 
      icon: Calculator, 
      label: 'Método CG', 
      desc: 'Gradiente Conjugado' 
    },
    { 
      id: 'cg-solver', 
      icon: PlayCircle, 
      label: 'Resolver CG', 
      desc: 'Ejercicios Prácticos' 
    },
    { 
      id: 'sor', 
      icon: Cpu, 
      label: 'Método SOR', 
      desc: 'Sobre Relajación' 
    },
    { 
      id: 'sor-solver', 
      icon: PlayCircle, 
      label: 'Resolver SOR', 
      desc: 'Ejercicios Prácticos' 
    }
  ];

  return (
    <aside 
      className={`fixed top-0 left-0 h-full w-80 bg-gradient-to-b from-slate-900/95 to-slate-950/95 backdrop-blur-xl border-r border-white/10 z-50 transition-transform duration-300 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0`}
    >
      {/* Header - Logo y botón cerrar */}
      <div className="p-6 border-b border-white/10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
              <Cpu className="w-6 h-6" />
            </div>
            <div>
              <h2 className="font-bold text-lg">Métodos Numéricos</h2>
              <p className="text-xs text-slate-400">CG & SOR</p>
            </div>
          </div>
          <button 
            onClick={() => setSidebarOpen(false)} 
            className="lg:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="p-4 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => navigateTo(item.id)}
            className={`w-full p-4 rounded-xl flex items-center gap-3 transition-all duration-300 group ${
              currentPage === item.id 
                ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/50 shadow-lg shadow-blue-500/10' 
                : 'hover:bg-white/5 border border-transparent'
            }`}
          >
            {/* Icon Container */}
            <div 
              className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all ${
                currentPage === item.id 
                  ? item.id.includes('solver') 
                    ? 'bg-gradient-to-br from-green-500 to-emerald-600 shadow-lg shadow-green-500/30'
                    : 'bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg shadow-blue-500/30'
                  : 'bg-white/5 group-hover:bg-white/10'
              }`}
            >
              <item.icon className="w-5 h-5" />
            </div>
            
            {/* Label */}
            <div className="flex-1 text-left">
              <div className="font-semibold">{item.label}</div>
              <div className="text-xs text-slate-400">{item.desc}</div>
            </div>
            
            {/* Arrow indicator */}
            <ChevronRight 
              className={`w-5 h-5 transition-all ${
                currentPage === item.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'
              }`} 
            />
          </button>
        ))}
      </nav>

      {/* Footer - Información Universidad */}
      <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10 bg-gradient-to-t from-slate-950/90 to-transparent">
        <div className="text-center space-y-1">
          <p className="font-semibold text-sm">Universidad Mayor de San Andrés</p>
          <p className="text-xs text-slate-400">Facultad de Ciencias Puras y Naturales</p>
          <p className="text-xs text-slate-500">Carrera de Informática</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;