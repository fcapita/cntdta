
import React, { useState } from 'react';

interface NavbarProps {
  currentPage: string;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage }) => {
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
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <a href="#home" className="flex items-center gap-3">
              <div className="w-12 h-12 flex-shrink-0">
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
                <span className="text-xl font-bold text-blue-900 block leading-none">CNTDTA</span>
                <span className="text-[10px] text-gray-500 uppercase tracking-tight hidden md:block">
                  Conselho Nacional dos Técnicos de Diagnóstico e Terapêutica
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`text-sm font-semibold transition-colors duration-200 ${
                  currentPage === item.id ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-500'
                }`}
              >
                {item.label}
              </a>
            ))}
            <a 
              href="#portal" 
              className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-blue-700 transition-all shadow-md"
            >
              Área do Profissional
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-blue-600 focus:outline-none"
            >
              <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 px-4 space-y-2">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className={`block py-2 px-4 rounded-md text-base font-medium ${
                currentPage === item.id ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              {item.label}
            </a>
          ))}
          <a 
            href="#portal"
            onClick={() => setIsMenuOpen(false)}
            className="block w-full text-center bg-blue-600 text-white py-3 rounded-md font-bold mt-4"
          >
            Portal do Associado
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
