
import React from 'react';

const Contact: React.FC = () => {
  const provinciais = [
    { province: "Luanda (Sede)", contact: "+244 923 XXX XXX", address: "Rua Direita do Gamek, Prédio X" },
    { province: "Benguela", contact: "+244 912 XXX XXX", address: "Av. do Governador, CP 12" },
    { province: "Huambo", contact: "+244 934 XXX XXX", address: "Rua do Comércio, Edifício Saúde" },
    { province: "Huíla", contact: "+244 945 XXX XXX", address: "Lubango, Centro da Cidade" },
    { province: "Cabinda", contact: "+244 911 XXX XXX", address: "Bairro 1º de Maio" },
    { province: "Zaire", contact: "+244 927 XXX XXX", address: "Mbanza Kongo, Sede" },
  ];

  return (
    <div className="animate-fadeIn pb-24 bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      <div className="bg-slate-800 dark:bg-gray-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center animate-slideUp">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Contactos e Localização</h1>
          <p className="text-slate-300 dark:text-gray-400 text-lg">Estamos presentes em todo o território nacional para apoiar a classe técnica.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 p-8 md:p-12 rounded-3xl shadow-xl border dark:border-gray-700 animate-slideUp stagger-1">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Envie-nos uma Mensagem</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Nome Completo</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all" required />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">E-mail</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all" required />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Assunto</label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all">
                  <option>Informações sobre Inscrição</option>
                  <option>Dúvidas Éticas/Deontológicas</option>
                  <option>Emissão de Cédulas</option>
                  <option>Outros Assuntos</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Mensagem</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none resize-none transition-all" required></textarea>
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold shadow-lg transition-all active:scale-95">
                Enviar Mensagem
              </button>
            </form>
          </div>

          {/* Map and Details */}
          <div className="space-y-8 animate-slideUp stagger-2">
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden h-64 md:h-80 relative border dark:border-gray-700">
              <img src="https://picsum.photos/id/164/1000/800" alt="Map Placeholder" className="w-full h-full object-cover dark:opacity-60" />
              <div className="absolute inset-0 bg-blue-900/10 dark:bg-black/40 flex items-center justify-center">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-2xl border-b-4 border-blue-600">
                  <p className="font-bold text-gray-900 dark:text-white text-center mb-1">
                    <i className="fa-solid fa-location-dot text-blue-600 mr-2"></i> Sede Nacional
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Rua Direita do Gamek, Luanda</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-3xl flex items-start gap-5 transition-colors border border-transparent dark:border-blue-900/30">
                <div className="bg-blue-600 text-white p-4 rounded-2xl shadow-lg"><i className="fa-solid fa-phone"></i></div>
                <div>
                  <h4 className="font-bold text-blue-900 dark:text-blue-300 text-sm mb-1">Linha de Apoio</h4>
                  <p className="text-blue-700 dark:text-gray-300 text-sm font-medium">+244 9XX XXX XXX</p>
                </div>
              </div>
              <div className="bg-emerald-50 dark:bg-emerald-900/20 p-8 rounded-3xl flex items-start gap-5 transition-colors border border-transparent dark:border-emerald-900/30">
                <div className="bg-emerald-600 text-white p-4 rounded-2xl shadow-lg"><i className="fa-solid fa-envelope"></i></div>
                <div>
                  <h4 className="font-bold text-emerald-900 dark:text-emerald-300 text-sm mb-1">E-mail Oficial</h4>
                  <p className="text-emerald-700 dark:text-gray-300 text-sm font-medium">apoio@cntdta.ao</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Provincial Councils */}
        <section className="mt-20 animate-slideUp stagger-3">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-10 flex items-center gap-4">
            <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-xl">
              <i className="fa-solid fa-map-location-dot text-blue-600 dark:text-blue-400"></i>
            </div>
            Conselhos Provinciais
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {provinciais.map((prov, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-md border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-800 transition-all group">
                <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{prov.province}</h3>
                <div className="space-y-3 text-sm text-gray-500 dark:text-gray-400">
                  <p className="flex items-center gap-3">
                    <i className="fa-solid fa-phone text-blue-400"></i> {prov.contact}
                  </p>
                  <p className="flex items-start gap-3">
                    <i className="fa-solid fa-location-dot text-blue-400 mt-1"></i> {prov.address}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
