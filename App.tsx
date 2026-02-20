
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Professions from './pages/Professions';
import Portal from './pages/Portal';
import News from './pages/News';
import Contact from './pages/Contact';
import Skeleton from './components/Skeleton';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [isPageLoading, setIsPageLoading] = useState<boolean>(true);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    return localStorage.getItem('theme') === 'dark' || 
      (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') || 'home';
      
      // Inicia animação de transição
      setIsTransitioning(true);
      setIsPageLoading(true);

      setTimeout(() => {
        setCurrentPage(hash);
        setIsTransitioning(false);
        window.scrollTo(0, 0);
        
        // Simula um pequeno delay para o conteúdo "assentar"
        setTimeout(() => {
          setIsPageLoading(false);
        }, 500);
      }, 400);
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const renderPage = () => {
    if (isPageLoading) {
      return <Skeleton type={currentPage} />;
    }

    switch (currentPage) {
      case 'home': return <Home />;
      case 'institucional': return <About />;
      case 'profissoes': return <Professions />;
      case 'portal': return <Portal />;
      case 'noticias': return <News />;
      case 'contactos': return <Contact />;
      default: return <Home />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      <div className={`loading-bar ${isTransitioning ? 'opacity-100' : 'opacity-0'}`} />
      
      <Navbar 
        currentPage={currentPage} 
        isDarkMode={isDarkMode} 
        toggleDarkMode={toggleDarkMode} 
      />
      
      <main className={`flex-grow pt-20 transition-all duration-500 ${isTransitioning ? 'opacity-0 scale-[0.98]' : 'opacity-100 scale-100'}`}>
        {renderPage()}
      </main>
      
      <Footer />
    </div>
  );
};

export default App;
