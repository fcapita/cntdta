
import React, { useState } from 'react';

const Portal: React.FC = () => {
  const [isLogged, setIsLogged] = useState(false);

  const services = [
    { title: 'Emissão de Carteiras', icon: 'fa-id-card', color: 'bg-blue-600', desc: 'Solicite ou renove sua cédula profissional digital e física.' },
    { title: 'Formação Contínua', icon: 'fa-graduation-cap', color: 'bg-purple-600', desc: 'Aceda ao calendário de cursos e plano de especialização do MINSA.' },
    { title: 'Ética e Deontologia', icon: 'fa-scale-balanced', color: 'bg-emerald-600', desc: 'Canal de supervisão da ética e humanização do serviço.' },
    { title: 'Pagamento de Quotas', icon: 'fa-credit-card', color: 'bg-amber-600', desc: 'Regularize sua situação financeira de forma simples e segura.' },
    { title: 'Oportunidades', icon: 'fa-briefcase', color: 'bg-rose-600', desc: 'Acompanhe editais de concursos e vagas no setor público e privado.' },
    { title: 'Suporte Técnico', icon: 'fa-headset', color: 'bg-gray-600', desc: 'Ajuda direta com o software desenvolvido pela Zulumuka.' },
  ];

  if (!isLogged) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex flex-col items-center justify-center p-4 animate-fadeIn transition-colors duration-300">
        <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-10 border dark:border-gray-700">
          <div className="text-center mb-10">
            <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <i className="fa-solid fa-user-lock text-3xl text-blue-600 dark:text-blue-400"></i>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Portal do Profissional</h1>
            <p className="text-gray-500 dark:text-gray-400">Introduza os seus dados para aceder à área reservada.</p>
          </div>
          
          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setIsLogged(true); }}>
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Número da Cédula / E-mail</label>
              <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="Ex: CNT/1234/2024" required />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Palavra-passe</label>
              <input type="password" className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="••••••••" required />
            </div>
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold shadow-lg transition-all hover:scale-[1.02] active:scale-95">
              Entrar no Portal
            </button>
          </form>
          
          <div className="mt-8 pt-8 border-t border-gray-100 dark:border-gray-700 flex flex-col gap-4 text-center">
            <a href="#" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">Esqueceu a palavra-passe?</a>
            <p className="text-sm text-gray-500 dark:text-gray-400">Ainda não tem conta? <a href="#" className="text-blue-600 dark:text-blue-400 font-bold">Solicitar Inscrição</a></p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fadeIn max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Bem-vindo ao seu Portal</h1>
          <p className="text-gray-500 dark:text-gray-400">Aceda aos serviços integrados da Zulumuka para o CNTDTA.</p>
        </div>
        <button onClick={() => setIsLogged(false)} className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 px-6 py-2 rounded-full font-bold hover:bg-red-100 dark:hover:bg-red-900/40 transition-all flex items-center gap-2">
          <i className="fa-solid fa-right-from-bracket"></i> Terminar Sessão
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <div key={i} className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all cursor-pointer group">
            <div className={`${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
              <i className={`fa-solid ${service.icon} text-2xl text-white`}></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{service.title}</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-6 leading-relaxed">{service.desc}</p>
            <div className="flex items-center text-blue-600 dark:text-blue-400 font-bold gap-2 text-sm group-hover:gap-4 transition-all">
              Aceder Serviço <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portal;
