
import React from 'react';

const Professions: React.FC = () => {
  const categories = [
    { title: 'Técnico Superior', icon: 'fa-user-doctor', desc: 'Profissionais com licenciatura ou pós-graduação em áreas específicas de diagnóstico e terapêutica.' },
    { title: 'Técnico Médio', icon: 'fa-user-nurse', desc: 'Profissionais com formação de nível médio técnico especializada.' },
    { title: 'Auxiliar de Diagnóstico', icon: 'fa-user-gear', desc: 'Apoio operacional e técnico direto nas unidades de saúde sob supervisão.' },
  ];

  const specialties = [
    "Análises Clínicas e Saúde Pública", "Radiologia", "Fisioterapia", "Farmácia", "Estomatologia",
    "Cardiopneumologia", "Ortóptica", "Terapia da Fala", "Terapia Ocupacional", "Dietética e Nutrição",
    "Anatomia Patológica", "Audiologia", "Saúde Ambiental", "Higiene Oral", "Prótese Dentária",
    "Instrumentação Cirúrgica", "Podologia", "Psicomotricidade", "Radioterapia", "Medicina Nuclear",
    "Neurofisiologia", "Hemodiálise", "Emergência Médica", "Ortoprotesia", "Anestesia",
    "Óptica", "Eletromedicina", "Vigilância Epidemiológica"
  ];

  return (
    <div className="animate-fadeIn pb-24">
      <div className="bg-emerald-800 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Profissões e Carreiras</h1>
          <p className="text-emerald-100 text-lg">Regulação, âmbitos de atuação e especialidades reconhecidas pelo CNTDTA.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        <section className="bg-white p-10 rounded-3xl shadow-xl mb-12">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="bg-amber-100 p-8 rounded-2xl md:w-1/3 flex flex-col items-center text-center">
              <i className="fa-solid fa-file-pdf text-5xl text-amber-600 mb-4"></i>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Decreto Presidencial n.º 188/18</h3>
              <p className="text-gray-500 text-sm mb-6">O marco regulatório fundamental que estabelece o regime de carreira dos profissionais.</p>
              <button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-lg font-bold transition-all">
                Download PDF
              </button>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Regime Jurídico da Carreira</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Desde 2018, a carreira especial e o regime geral têm sido fortalecidos através de contratações públicas massivas. Entre 2018 e 2024, foram contratados mais de 10 mil novos técnicos de diagnóstico e terapêutica.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {categories.map((cat, i) => (
                  <div key={i} className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                    <i className={`fa-solid ${cat.icon} text-blue-600 text-2xl mb-4`}></i>
                    <h4 className="font-bold text-gray-900 mb-2">{cat.title}</h4>
                    <p className="text-gray-500 text-xs">{cat.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white p-10 rounded-3xl shadow-xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <i className="fa-solid fa-list-check text-emerald-600"></i> Especialidades Controladas (28)
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {specialties.map((spec, i) => (
              <div key={i} className="flex items-center gap-3 p-4 rounded-xl hover:bg-emerald-50 border border-transparent hover:border-emerald-100 transition-all cursor-default group">
                <div className="w-2 h-2 rounded-full bg-emerald-300 group-hover:bg-emerald-500"></div>
                <span className="text-gray-600 text-sm font-medium">{spec}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Professions;
