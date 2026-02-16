
import React from 'react';

const Home: React.FC = () => {
  const stats = [
    { label: 'Profissões Integradas', value: '28' },
    { label: 'Técnicos Contratados (2018-2024)', value: '10.283' },
    { label: 'Meta de Especialistas 2027', value: '38.000' },
    { label: 'Representação', value: 'Nacional' },
  ];

  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/id/40/1920/1080" 
            alt="Medical Professionals" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/40"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-2xl">
            <span className="bg-blue-600/30 text-blue-200 px-4 py-1 rounded-full text-sm font-bold tracking-wider mb-6 inline-block backdrop-blur-sm">
              FUNDADO EM OUTUBRO DE 2007
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              Representar, valorizar e defender os profissionais de <span className="text-blue-400">Diagnóstico e Terapêutica</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-50 mb-10 leading-relaxed">
              O CNTDTA é o parceiro estratégico do Ministério da Saúde na regulação da atuação legal, ética e habilitada dos técnicos em Angola.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#portal" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-center transition-all shadow-xl hover:scale-105">
                Portal do Associado
              </a>
              <a href="#profissoes" className="bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md px-8 py-4 rounded-lg font-bold text-center transition-all">
                Ver Carreiras
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Buttons */}
      <section className="relative -mt-16 z-20 max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-blue-600 transform hover:-translate-y-2 transition-all group">
            <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
              <i className="fa-solid fa-user-plus text-2xl text-blue-600 group-hover:text-white"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Inscrição Online</h3>
            <p className="text-gray-500 mb-6">Regularize sua carteira profissional e integre-se legalmente ao sistema de saúde.</p>
            <a href="#portal" className="text-blue-600 font-bold flex items-center gap-2 hover:gap-4 transition-all">
              Começar agora <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-emerald-500 transform hover:-translate-y-2 transition-all group">
            <div className="bg-emerald-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-500 transition-colors">
              <i className="fa-solid fa-qrcode text-2xl text-emerald-600 group-hover:text-white"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Verificar Autenticidade</h3>
            <p className="text-gray-500 mb-6">Validação rápida de cédulas profissionais através de código QR para segurança pública.</p>
            <a href="#portal" className="text-emerald-600 font-bold flex items-center gap-2 hover:gap-4 transition-all">
              Validar QR Code <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-amber-500 transform hover:-translate-y-2 transition-all group">
            <div className="bg-amber-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-amber-500 transition-colors">
              <i className="fa-solid fa-download text-2xl text-amber-600 group-hover:text-white"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Regime Jurídico</h3>
            <p className="text-gray-500 mb-6">Consulte o Decreto Presidencial n.º 188/18 que regula a carreira de Diagnóstico.</p>
            <a href="#profissoes" className="text-amber-600 font-bold flex items-center gap-2 hover:gap-4 transition-all">
              Baixar Decreto <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </section>

      {/* Dynamic Statistics Panel */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">A Força da Nossa Classe</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
                <p className="text-4xl font-extrabold text-blue-600 mb-2">{stat.value}</p>
                <p className="text-sm font-medium text-gray-600 uppercase tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners/Minsa Link */}
      <section className="py-12 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-gray-400 font-semibold mb-8 uppercase text-xs tracking-[0.3em]">Em parceria com</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="text-2xl font-bold text-gray-600">MINISTÉRIO DA SAÚDE</span>
            <span className="text-2xl font-bold text-gray-600">ORDEM DOS MÉDICOS</span>
            <span className="text-2xl font-bold text-gray-600">ORDEM DOS ENFERMEIROS</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
