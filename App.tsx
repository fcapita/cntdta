
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Professions from './pages/Professions';
import Portal from './pages/Portal';
import News from './pages/News';
import Contact from './pages/Contact';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>('home');

  // Handle hash changes for routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') || 'home';
      setCurrentPage(hash);
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Initial load

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
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
    <div className="flex flex-col min-h-screen">
      <Navbar currentPage={currentPage} />
      <main className="flex-grow pt-20">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
