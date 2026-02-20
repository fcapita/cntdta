
import React from 'react';

const Home: React.FC = () => {
  const stats = [
    { label: 'Profissões Integradas', value: '28' },
    { label: 'Técnicos Contratados (2018-2024)', value: '10.283' },
    { label: 'Meta de Especialistas 2027', value: '38.000' },
    { label: 'Representação', value: 'Nacional' },
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[650px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/id/40/1280/720.webp" 
            alt="Profissionais de Saúde CNTDTA" 
            className="w-full h-full object-cover scale-105"
            width="1280"
            height="720"
            // Fix: Changed fetchpriority to fetchPriority to resolve TypeScript error in React.
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/40 dark:from-gray-950/95 dark:to-blue-950/40"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-2xl animate-slideUp">
            <span className="bg-blue-600/30 text-blue-200 dark:text-blue-300 px-4 py-1 rounded-full text-sm font-bold tracking-wider mb-6 inline-block backdrop-blur-sm border border-blue-400/20">
              FUNDADO EM OUTUBRO DE 2007
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              Representar, valorizar e defender os profissionais de <span className="text-blue-400 dark:text-blue-300">Diagnóstico e Terapêutica</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-50 mb-10 leading-relaxed opacity-90 dark:text-gray-200">
              O CNTDTA é o parceiro estratégico do Ministério da Saúde na regulação da atuação legal, ética e habilitada dos técnicos em Angola.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#portal" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-center transition-all shadow-xl hover:scale-105 active:scale-95">
                Portal do Associado
              </a>
              <a href="#institucional" className="bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md px-8 py-4 rounded-xl font-bold text-center transition-all">
                Saber Mais
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Buttons */}
      <section className="relative -mt-16 z-20 max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Inscrição Online', icon: 'fa-user-plus', color: 'border-blue-600', bg: 'bg-blue-50 dark:bg-blue-900/30', text: 'Regularize sua carteira profissional e integre-se legalmente ao sistema de saúde.', link: '#portal' },
            { title: 'Verificar Autenticidade', icon: 'fa-qrcode', color: 'border-emerald-500', bg: 'bg-emerald-50 dark:bg-emerald-900/30', text: 'Validação rápida de cédulas profissionais através de código QR para segurança pública.', link: '#portal' },
            { title: 'Regime Jurídico', icon: 'fa-download', color: 'border-amber-500', bg: 'bg-amber-50 dark:bg-amber-900/30', text: 'Consulte o Decreto Presidencial n.º 188/18 que regula a carreira de Diagnóstico.', link: '#profissoes' }
          ].map((item, idx) => (
            <div key={idx} className={`bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl border-t-4 ${item.color} animate-slideUp group transition-all duration-300 hover:-translate-y-2`}>
              <div className={`${item.bg} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors`}>
                <i className={`fa-solid ${item.icon} text-2xl text-blue-600 group-hover:text-white transition-colors`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-6">{item.text}</p>
              <a href={item.link} className="text-blue-600 dark:text-blue-400 font-bold flex items-center gap-2 hover:gap-4 transition-all">
                Saber mais <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Dynamic Statistics */}
      <section className="py-24 bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slideUp">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">A Força da Nossa Classe</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div 
                key={idx} 
                className="bg-white dark:bg-gray-800 p-8 rounded-[2rem] shadow-sm border border-gray-100 dark:border-gray-700 text-center hover:shadow-lg hover:border-blue-100 dark:hover:border-blue-900 transition-all animate-slideUp"
              >
                <p className="text-4xl font-extrabold text-blue-600 dark:text-blue-400 mb-2">{stat.value}</p>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-12 bg-white dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-gray-400 dark:text-gray-500 font-semibold mb-8 uppercase text-xs tracking-[0.3em]">Em parceria com</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 dark:brightness-200 transition-all duration-700">
            <span className="text-xl md:text-2xl font-bold text-gray-600 dark:text-gray-400">MINISTÉRIO DA SAÚDE</span>
            <span className="text-xl md:text-2xl font-bold text-gray-600 dark:text-gray-400">ORDEM DOS MÉDICOS</span>
            <span className="text-xl md:text-2xl font-bold text-gray-600 dark:text-gray-400">ORDEM DOS ENFERMEIROS</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
