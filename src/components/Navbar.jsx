// src/components/Navbar.js
import React from 'react';
import { Menu } from 'lucide-react';

const Navbar = ({ setSidebarOpen }) => {
  return (
    <header className="sticky top-0 z-30 bg-slate-900/80 backdrop-blur-xl border-b border-white/10">
      <div className="flex items-center justify-between p-4">
        <button 
          onClick={() => setSidebarOpen(true)}
          className="lg:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
        >
          <Menu className="w-6 h-6" />
        </button>
        
        <div className="flex-1 px-4">
          <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Métodos Numéricos
          </h1>
          <p className="text-sm text-slate-400">Gradiente Conjugado y Sobre Relajación Sucesiva</p>
        </div>
        
        <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm">Abigail Mamani Mamani</span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;