
import React from 'react';

const News: React.FC = () => {
  const posts = [
    {
      title: "Expansão de Serviços de Hemodiálise no Interior",
      date: "25 Jan 2026",
      category: "Infraestrutura",
      image: "https://picsum.photos/id/221/800/600",
      excerpt: "O MINSA e o CNTDTA anunciam novas unidades equipadas em três províncias para descentralizar o atendimento especializado."
    },
    {
      title: "Contratação de 10.283 Novos Técnicos",
      date: "12 Jan 2026",
      category: "Carreira",
      image: "https://picsum.photos/id/222/800/600",
      excerpt: "Balanço positivo das recentes contratações públicas fortalece o diagnóstico em unidades de nível primário e secundário."
    },
    {
      title: "Parceria Internacional para Transferência de Tecnologia",
      date: "05 Jan 2026",
      category: "Pesquisa",
      image: "https://picsum.photos/id/223/800/600",
      excerpt: "Acordo firmado com centros de excelência permitirá formação avançada em medicina nuclear para técnicos angolanos."
    },
    {
      title: "Publicação do Novo Manual de Ética e Humanização",
      date: "28 Dez 2025",
      category: "Deontologia",
      image: "https://picsum.photos/id/225/800/600",
      excerpt: "Documento orienta a conduta dos profissionais visando a melhoria do atendimento humanizado no setor público."
    }
  ];

  return (
    <div className="animate-fadeIn pb-24">
      <div className="bg-rose-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Notícias e Publicações</h1>
          <p className="text-rose-100 text-lg">Mantenha-se informado sobre as atualizações do setor e editais em vigor.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {posts.map((post, i) => (
            <div key={i} className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-gray-100 group">
              <div className="md:w-2/5 relative overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-rose-600 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
                  {post.category}
                </div>
              </div>
              <div className="md:w-3/5 p-8 flex flex-col justify-between">
                <div>
                  <span className="text-gray-400 text-xs font-semibold mb-2 block">{post.date}</span>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-rose-600 transition-colors leading-tight">{post.title}</h3>
                  <p className="text-gray-500 text-sm line-clamp-3 mb-6">{post.excerpt}</p>
                </div>
                <a href="#" className="text-rose-600 font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                  Ler notícia completa <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-50 rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-lg">
            <h3 className="text-2xl font-bold text-blue-900 mb-2">Subscreva a nossa Newsletter</h3>
            <p className="text-blue-700">Receba editais, concursos e notícias diretamente no seu e-mail.</p>
          </div>
          <div className="flex w-full md:w-auto gap-2">
            <input type="email" placeholder="Seu e-mail..." className="flex-grow md:w-64 px-4 py-3 rounded-xl border border-blue-200 focus:ring-2 focus:ring-blue-500 outline-none" />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition-all">
              Aderir
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
