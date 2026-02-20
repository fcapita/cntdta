
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
    <nav className="fixed w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md z-50 transition-colors duration-300 border-b dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <a href="#home" className="flex items-center gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 bg-white rounded-lg p-1">
                <img 
                  src="https://raw.githubusercontent.com/ai-gen-images/cntdta/main/logo.png" 
                  alt="CNTDTA Logo" 
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://picsum.photos/id/1/200/200";
                  }}
                />
              </div>
              <div>
                <span className="text-lg md:text-xl font-bold text-blue-900 dark:text-blue-400 block leading-none">CNTDTA</span>
                <span className="text-[9px] text-gray-500 dark:text-gray-400 uppercase tracking-tight hidden lg:block">
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
                className={`text-sm font-semibold transition-colors duration-200 ${
                  currentPage === item.id 
                    ? 'text-blue-600 dark:text-blue-400' 
                    : 'text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-300'
                }`}
              >
                {item.label}
              </a>
            ))}
            
            {/* Theme Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 transition-all active:scale-90"
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
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all shadow-md active:scale-95"
            >
              Área do Profissional
            </a>
          </div>

          {/* Mobile Actions */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full text-gray-600 dark:text-gray-300"
            >
              {isDarkMode ? <i className="fa-solid fa-sun"></i> : <i className="fa-solid fa-moon"></i>}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 dark:text-gray-300 focus:outline-none"
            >
              <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-800 py-4 px-4 space-y-2 animate-fadeIn">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className={`block py-3 px-4 rounded-xl text-base font-medium ${
                currentPage === item.id 
                  ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' 
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
              }`}
            >
              {item.label}
            </a>
          ))}
          <a 
            href="#portal"
            onClick={() => setIsMenuOpen(false)}
            className="block w-full text-center bg-blue-600 text-white py-3.5 rounded-xl font-bold mt-4"
          >
            Portal do Associado
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
