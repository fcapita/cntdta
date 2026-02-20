
import React, { useState } from 'react';

interface NavbarProps {
  currentPage: string;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, isDarkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Início', href: '#home', id: 'home' },
    { label: 'Institucional', href: '#institucional', id: 'institucional' },
    { label: 'Profissões', href: '#profissoes', id: 'profissoes' },
    { label: 'Portal', href: '#portal', id: 'portal' },
    { label: 'Notícias', href: '#noticias', id: 'noticias' },
    { label: 'Contactos', href: '#contactos', id: 'contactos' },
  ];

  return (
    <nav className="fixed w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg z-50 transition-colors duration-300 border-b dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24">
          <div className="flex items-center">
            <a href="#home" className="flex items-center gap-4 group">
              <div className="relative overflow-hidden bg-white rounded-xl p-1 shadow-sm group-hover:shadow-md transition-all duration-300 border border-gray-100">
                <img 
                  src="./logo.png" 
                  alt="CNTDTA Logo" 
                  className="h-12 md:h-16 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://raw.githubusercontent.com/ai-gen-images/cntdta/main/logo.png";
                  }}
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl md:text-2xl font-black text-blue-900 dark:text-blue-400 block leading-none tracking-tight">CNTDTA</span>
                <span className="text-[8px] md:text-[10px] text-gray-500 dark:text-gray-400 font-bold uppercase tracking-[0.1em] hidden sm:block max-w-[200px] leading-tight mt-1">
                  Conselho Nacional dos Técnicos de Diagnóstico e Terapêutica
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`text-sm font-bold transition-all duration-200 hover:scale-105 ${
                  currentPage === item.id 
                    ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400 pb-1' 
                    : 'text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-300'
                }`}
              >
                {item.label}
              </a>
            ))}
            
            <div className="h-8 w-[1px] bg-gray-200 dark:bg-gray-700 mx-2"></div>

            {/* Theme Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2.5 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 transition-all active:scale-90 border border-transparent hover:border-gray-200 dark:hover:border-gray-700"
              aria-label="Alternar tema"
            >
              {isDarkMode ? (
                <i className="fa-solid fa-sun text-lg text-amber-400"></i>
              ) : (
                <i className="fa-solid fa-moon text-lg"></i>
              )}
            </button>

            <a 
              href="#portal" 
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-xl text-sm font-bold transition-all shadow-md hover:shadow-xl active:scale-95 flex items-center gap-2"
            >
              <i className="fa-solid fa-user-tie"></i> Área do Profissional
            </a>
          </div>

          {/* Mobile Actions */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full text-gray-600 dark:text-gray-300"
            >
              {isDarkMode ? <i className="fa-solid fa-sun text-amber-400"></i> : <i className="fa-solid fa-moon"></i>}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-300 focus:outline-none"
            >
              <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-800 py-6 px-4 space-y-3 animate-fadeIn shadow-2xl">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className={`block py-4 px-6 rounded-2xl text-lg font-bold transition-all ${
                currentPage === item.id 
                  ? 'bg-blue-600 text-white shadow-lg' 
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
              }`}
            >
              {item.label}
            </a>
          ))}
          <a 
            href="#portal"
            onClick={() => setIsMenuOpen(false)}
            className="block w-full text-center bg-gradient-to-r from-blue-700 to-blue-900 text-white py-4 rounded-2xl font-bold mt-6 shadow-xl"
          >
            Portal do Associado
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
