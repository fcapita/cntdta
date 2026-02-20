
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
    <div className="animate-fadeIn pb-24 bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      <div className="bg-emerald-800 dark:bg-emerald-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center animate-slideUp">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Profissões e Carreiras</h1>
          <p className="text-emerald-100 dark:text-emerald-300 text-lg max-w-2xl mx-auto">Regulação, âmbitos de atuação e as 28 especialidades reconhecidas pelo CNTDTA.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <section className="bg-white dark:bg-gray-800 p-8 md:p-12 rounded-3xl shadow-xl mb-12 border dark:border-gray-700 animate-slideUp stagger-1">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="bg-amber-100 dark:bg-amber-900/30 p-8 rounded-3xl lg:w-1/3 flex flex-col items-center text-center">
              <i className="fa-solid fa-file-pdf text-6xl text-amber-600 dark:text-amber-400 mb-6"></i>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Decreto Presidencial n.º 188/18</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-8">O marco regulatório fundamental que estabelece o regime de carreira dos profissionais.</p>
              <button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-4 rounded-xl font-bold transition-all shadow-lg active:scale-95">
                Download PDF
              </button>
            </div>
            <div className="lg:w-2/3">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">Regime Jurídico da Carreira</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                Desde 2018, a carreira especial e o regime geral têm sido fortalecidos através de contratações públicas massivas. Entre 2018 e 2024, o Sistema Nacional de Saúde integrou mais de 10 mil novos técnicos qualificados.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {categories.map((cat, i) => (
                  <div key={i} className="bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-800 transition-all">
                    <i className={`fa-solid ${cat.icon} text-blue-600 dark:text-blue-400 text-2xl mb-4`}></i>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">{cat.title}</h4>
                    <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed">{cat.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-800 p-8 md:p-12 rounded-3xl shadow-xl border dark:border-gray-700 animate-slideUp stagger-2">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-10 flex items-center gap-4">
            <div className="bg-emerald-100 dark:bg-emerald-900/30 p-3 rounded-xl">
              <i className="fa-solid fa-list-check text-emerald-600 dark:text-emerald-400"></i>
            </div>
            Especialidades Controladas (28)
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {specialties.map((spec, i) => (
              <div key={i} className="flex items-center gap-3 p-4 rounded-xl hover:bg-emerald-50 dark:hover:bg-emerald-900/20 border border-transparent hover:border-emerald-100 dark:hover:border-emerald-800 transition-all cursor-default group">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-300 dark:bg-emerald-700 group-hover:bg-emerald-600 transition-colors"></div>
                <span className="text-gray-600 dark:text-gray-300 text-sm font-medium">{spec}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Professions;
