// src/App.js
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Inicio from './pages/Inicio';
import MetodoCG from './pages/MetodoCG';
import MetodoSOR from './pages/MetodoSOR';
import CGSolver from './pages/CGSolver';
import SORSolver from './pages/SORSolver';

import './styles/Global.css';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('inicio');

  const navigateTo = (page) => {
    setCurrentPage(page);
    setSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white">
      {/* Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <Sidebar 
        sidebarOpen={sidebarOpen} 
        setSidebarOpen={setSidebarOpen}
        currentPage={currentPage}
        navigateTo={navigateTo}
      />

      <main className="lg:ml-80 min-h-screen">
        <Navbar setSidebarOpen={setSidebarOpen} />

        <div className="p-6 lg:p-8">
          {currentPage === 'inicio' && <Inicio />}
          {currentPage === 'cg' && <MetodoCG />}
          {currentPage === 'sor' && <MetodoSOR />}
          {currentPage === 'cg-solver' && <CGSolver />}
          {currentPage === 'sor-solver' && <SORSolver />}
        </div>
      </main>
    </div>
  );
}

export default App;