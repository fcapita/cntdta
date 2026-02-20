
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

console.log('CNTDTA: Inicializando aplicação...');

const renderApp = () => {
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    console.error("CNTDTA Erro: Elemento #root não encontrado no DOM.");
    return;
  }

  try {
    const root = createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    console.log('CNTDTA: Aplicação renderizada com sucesso.');
  } catch (error) {
    console.error("CNTDTA Erro Crítico na Renderização:", error);
  }
};

// Garante que o DOM está pronto antes de renderizar
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderApp);
} else {
  renderApp();
}
