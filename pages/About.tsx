
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="animate-fadeIn pb-24 bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      {/* Hero Header */}
      <div className="relative bg-blue-900 dark:bg-gray-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://picsum.photos/id/122/1920/1080" alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl font-extrabold mb-4">Institucional</h1>
          <p className="text-blue-200 dark:text-blue-300 text-xl max-w-2xl mx-auto leading-relaxed">
            Conselho Nacional dos Técnicos de Diagnóstico e Terapêutica de Angola
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Coluna Principal */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* História Section */}
            <section className="bg-white dark:bg-gray-800 p-10 rounded-3xl shadow-xl border-t-8 border-blue-600 dark:border-blue-500" id="historia">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-2xl">
                  <i className="fa-solid fa-clock-rotate-left text-blue-600 dark:text-blue-400 text-3xl"></i>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">História</h2>
              </div>
              <div className="prose prose-lg text-gray-600 dark:text-gray-300 leading-relaxed space-y-6">
                <p>
                  Fundado em <strong>outubro de 2007</strong>, o Conselho é um parceiro estratégico do Ministério da Saúde, atuando lado a lado com a Ordem dos Médicos e a Ordem dos Enfermeiros para elevar os padrões da saúde em Angola.
                </p>
                <p>
                  Desde a sua criação, o CNTDTA tem trabalhado na regulação e supervisão das 28 especialidades que compõem a classe, garantindo que o diagnóstico e a terapêutica sejam pilares de confiança para a população.
                </p>
              </div>
            </section>

            {/* Missão e Visão */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <section className="bg-white dark:bg-gray-800 p-10 rounded-3xl shadow-xl border-l-8 border-emerald-500" id="missao">
                <div className="bg-emerald-100 dark:bg-emerald-900/30 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <i className="fa-solid fa-bullseye text-2xl text-emerald-600 dark:text-emerald-400"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Missão</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Velar pela atuação <strong>legal, ética e habilitada</strong> dos profissionais, assegurando o cumprimento das normas que regem a carreira e protegendo o bem-estar dos utentes do sistema nacional de saúde.
                </p>
              </section>

              <section className="bg-white dark:bg-gray-800 p-10 rounded-3xl shadow-xl border-l-8 border-amber-500" id="visao">
                <div className="bg-amber-100 dark:bg-amber-900/30 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <i className="fa-solid fa-eye text-2xl text-amber-600 dark:text-amber-400"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Visão 2027</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Implementação plena do <strong>regime jurídico</strong> e descentralização dos serviços para garantir uma <strong>cobertura nacional equitativa</strong>, levando a representação e o apoio do conselho a todas as províncias.
                </p>
              </section>
            </div>

            {/* Objetivos Estratégicos */}
            <section className="bg-blue-900 dark:bg-blue-950 text-white p-10 rounded-3xl shadow-2xl">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <i className="fa-solid fa-check-double text-blue-400"></i> Objetivos Estratégicos
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Regulamentação das 28 profissões",
                  "Valorização salarial e progressão na carreira",
                  "Humanização e ética no atendimento",
                  "Expansão dos Conselhos Provinciais",
                  "Certificação e cédulas profissionais digitais",
                  "Formação contínua especializada"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-blue-700 dark:bg-blue-800 rounded-full flex items-center justify-center flex-shrink-0">
                      <i className="fa-solid fa-check text-[10px]"></i>
                    </div>
                    <span className="text-blue-100 dark:text-blue-200 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Sidebar: Corpo Diretivo */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden text-center group transition-colors duration-300" id="diretivo">
                <div className="h-32 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-800 dark:to-gray-900"></div>
                <div className="px-8 pb-10 -mt-16">
                  <div className="relative inline-block mb-6">
                    <div className="w-32 h-32 rounded-full border-4 border-white dark:border-gray-800 shadow-lg overflow-hidden mx-auto bg-gray-200">
                      <img src="https://picsum.photos/id/65/300/300" alt="João Eurico Sozinho" className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute bottom-0 right-0 bg-emerald-500 w-8 h-8 rounded-full border-4 border-white dark:border-gray-800 flex items-center justify-center">
                      <i className="fa-solid fa-shield-check text-white text-[10px]"></i>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">João Eurico Sozinho</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-bold text-xs uppercase tracking-widest mb-6">Presidente da Direção Executiva</p>
                  
                  <div className="text-left bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl italic text-gray-600 dark:text-gray-400 text-sm leading-relaxed border-l-4 border-blue-600 relative">
                    <i className="fa-solid fa-quote-left text-blue-100 dark:text-blue-900/40 text-4xl absolute -top-2 left-2"></i>
                    <p className="relative z-10 pt-2">
                      "O CNTDTA tem se consolidado como uma instituição de referência, envidando todos os esforços para a sua expansão nacional e para a justa valorização profissional da nossa classe. O nosso foco permanece na excelência do serviço prestado aos cidadãos e no fortalecimento do Sistema Nacional de Saúde de Angola."
                    </p>
                  </div>
                </div>
              </div>

              {/* Links Rápidos */}
              <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-8 border border-gray-100 dark:border-gray-700">
                <h4 className="font-bold text-gray-900 dark:text-white mb-6 uppercase text-xs tracking-widest">Navegação</h4>
                <div className="space-y-3">
                  <a href="#historia" className="flex items-center justify-between p-3 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors text-sm font-medium text-gray-700 dark:text-gray-300">
                    História <i className="fa-solid fa-chevron-right text-[10px] text-gray-400"></i>
                  </a>
                  <a href="#missao" className="flex items-center justify-between p-3 rounded-xl hover:bg-emerald-50 dark:hover:bg-emerald-900/30 transition-colors text-sm font-medium text-gray-700 dark:text-gray-300">
                    Missão <i className="fa-solid fa-chevron-right text-[10px] text-gray-400"></i>
                  </a>
                  <a href="#visao" className="flex items-center justify-between p-3 rounded-xl hover:bg-amber-50 dark:hover:bg-amber-900/30 transition-colors text-sm font-medium text-gray-700 dark:text-gray-300">
                    Visão 2027 <i className="fa-solid fa-chevron-right text-[10px] text-gray-400"></i>
                  </a>
                  <a href="#diretivo" className="flex items-center justify-between p-3 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors text-sm font-medium text-gray-700 dark:text-gray-300">
                    Corpo Diretivo <i className="fa-solid fa-chevron-right text-[10px] text-gray-400"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
