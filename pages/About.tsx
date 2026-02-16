
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="animate-fadeIn pb-24">
      {/* Header */}
      <div className="bg-blue-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Institucional</h1>
          <p className="text-blue-200 text-lg">Conheça a história, missão e os rostos por trás da nossa instituição.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <section className="bg-white p-10 rounded-3xl shadow-xl">
              <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center gap-3">
                <i className="fa-solid fa-landmark text-blue-600"></i> Nossa História
              </h2>
              <div className="prose prose-blue max-w-none text-gray-600 space-y-4">
                <p>
                  O Conselho Nacional dos Técnicos de Diagnóstico e Terapêutica de Angola (CNTDTA) foi legalmente constituído em <strong>outubro de 2007</strong>. Desde então, tem desempenhado um papel fundamental na regulação dos cuidados no Sistema Nacional de Saúde.
                </p>
                <p>
                  Somos um parceiro estratégico do Ministério da Saúde (MINSA), atuando lado a lado com a Ordem dos Médicos e a Ordem dos Enfermeiros para assegurar a excelência técnica em todo o território nacional.
                </p>
              </div>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <section className="bg-white p-10 rounded-3xl shadow-xl border-l-4 border-blue-600">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Missão</h3>
                <p className="text-gray-600">
                  Velar pela atuação legal, ética e habilitada dos profissionais de Diagnóstico e Terapêutica, salvaguardando o interesse público e a proteção dos utentes.
                </p>
              </section>
              <section className="bg-white p-10 rounded-3xl shadow-xl border-l-4 border-emerald-500">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Visão 2027</h3>
                <p className="text-gray-600">
                  Implementação plena do regime jurídico de carreira e descentralização total dos serviços para garantir uma cobertura nacional equitativa e de qualidade.
                </p>
              </section>
            </div>

            <section className="bg-white p-10 rounded-3xl shadow-xl">
              <h2 className="text-2xl font-bold text-blue-900 mb-6">Nossos Objetivos</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Garantir a implementação plena do regime jurídico",
                  "Assegurar a formação especializada e valorização",
                  "Supervisionar a ética profissional e humanização",
                  "Reforçar a capacidade nacional de diagnóstico",
                  "Promover parcerias nacionais e internacionais",
                  "Transformar o conselho em instituição de utilidade pública"
                ].map((obj, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600">
                    <i className="fa-solid fa-circle-check text-emerald-500 mt-1"></i>
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Sidebar / Leadership */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden text-center p-8">
                <div className="w-40 h-40 mx-auto rounded-full overflow-hidden mb-6 border-4 border-blue-100">
                  <img src="https://picsum.photos/id/64/400/400" alt="João Eurico Sozinho" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">João Eurico Sozinho</h3>
                <p className="text-blue-600 font-semibold mb-4">Presidente da Direção Executiva</p>
                <div className="w-12 h-0.5 bg-blue-200 mx-auto mb-6"></div>
                <p className="text-gray-500 text-sm italic">
                  "O CNTDTA tem se consolidado, envidando esforços para sua expansão nacional e valorização profissional da nossa classe em prol do sistema nacional de saúde."
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl shadow-xl p-8 text-white">
                <h4 className="text-lg font-bold mb-4">Informação Rápida</h4>
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between border-b border-blue-500 pb-2">
                    <span>Fundação</span>
                    <span className="font-bold">Outubro de 2007</span>
                  </div>
                  <div className="flex justify-between border-b border-blue-500 pb-2">
                    <span>Sede</span>
                    <span className="font-bold">Luanda</span>
                  </div>
                  <div className="flex justify-between border-b border-blue-500 pb-2">
                    <span>Profissões</span>
                    <span className="font-bold">28 Integradas</span>
                  </div>
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
