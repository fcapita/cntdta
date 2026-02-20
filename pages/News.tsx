
import React, { useState, useEffect } from 'react';

const News: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;

  const allPosts = [
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
    },
    {
      title: "Congresso Nacional de Diagnóstico e Terapêutica 2026",
      date: "15 Dez 2025",
      category: "Eventos",
      image: "https://picsum.photos/id/227/800/600",
      excerpt: "Abertas as inscrições para o maior evento científico da classe em Luanda. Submeta o seu resumo técnico até final de Janeiro."
    },
    {
      title: "Novas Regras para Renovação de Carteiras Profissionais",
      date: "10 Dez 2025",
      category: "Avisos",
      image: "https://picsum.photos/id/228/800/600",
      excerpt: "O processo de renovação agora é 100% digital através do portal. Saiba como atualizar os seus dados e evitar multas."
    },
    {
      title: "Fisioterapia em Angola: Desafios da Modernização",
      date: "02 Dez 2025",
      category: "Especialidade",
      image: "https://picsum.photos/id/229/800/600",
      excerpt: "Entrevista exclusiva com o coordenador nacional sobre a aquisição de novos equipamentos de reabilitação robótica."
    },
    {
      title: "Vigilância Epidemiológica: O papel dos Técnicos",
      date: "20 Nov 2025",
      category: "Saúde Pública",
      image: "https://picsum.photos/id/230/800/600",
      excerpt: "Análise do impacto positivo dos técnicos de diagnóstico na contenção de surtos sazonais em zonas periféricas."
    }
  ];

  const totalPages = Math.ceil(allPosts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = allPosts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 400, behavior: 'smooth' });
  };

  return (
    <div className="animate-fadeIn pb-24 bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      <div className="bg-rose-900 dark:bg-rose-950 text-white py-24 px-4 overflow-hidden relative">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10 animate-slideUp">
          <h1 className="text-5xl font-extrabold mb-4">Notícias e Publicações</h1>
          <p className="text-rose-100 dark:text-rose-200 text-xl max-w-2xl mx-auto leading-relaxed">
            Mantenha-se informado sobre as atualizações do setor, editais em vigor e conquistas da classe em Angola.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {currentPosts.map((post, i) => (
            <div 
              key={`${currentPage}-${i}`} 
              className={`bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-gray-100 dark:border-gray-700 group animate-slideUp stagger-${i + 1}`}
            >
              <div className="md:w-2/5 relative overflow-hidden bg-gray-200 dark:bg-gray-900">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute top-4 left-4 bg-rose-600 text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                  {post.category}
                </div>
              </div>
              <div className="md:w-3/5 p-8 flex flex-col justify-between">
                <div>
                  <span className="text-gray-400 dark:text-gray-500 text-xs font-semibold mb-3 block flex items-center gap-2">
                    <i className="fa-regular fa-calendar"></i> {post.date}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-3 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
                <a href="#" className="text-rose-600 dark:text-rose-400 font-bold text-sm flex items-center gap-2 group-hover:gap-4 transition-all uppercase tracking-tight">
                  Ler artigo completo <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="mt-12 flex justify-center items-center gap-2 animate-fadeIn">
            <button 
              onClick={() => paginate(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${currentPage === 1 ? 'bg-gray-100 text-gray-300 dark:bg-gray-800 dark:text-gray-600 cursor-not-allowed' : 'bg-white text-gray-600 hover:bg-rose-50 hover:text-rose-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-rose-900/30 shadow-sm'}`}
            >
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            
            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                <button
                  key={number}
                  onClick={() => paginate(number)}
                  className={`w-12 h-12 rounded-2xl font-bold transition-all shadow-sm ${currentPage === number ? 'bg-rose-600 text-white scale-110 shadow-rose-200 dark:shadow-rose-900/20' : 'bg-white text-gray-600 hover:bg-rose-50 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'}`}
                >
                  {number}
                </button>
              ))}
            </div>

            <button 
              onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${currentPage === totalPages ? 'bg-gray-100 text-gray-300 dark:bg-gray-800 dark:text-gray-600 cursor-not-allowed' : 'bg-white text-gray-600 hover:bg-rose-50 hover:text-rose-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-rose-900/30 shadow-sm'}`}
            >
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        )}

        <div className="mt-20 bg-blue-600 dark:bg-blue-800 rounded-[3rem] p-12 flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden animate-slideUp stagger-5 transition-colors duration-300">
          <div className="absolute inset-0 bg-blue-700 dark:bg-blue-900 opacity-20 pointer-events-none"></div>
          <div className="max-w-lg relative z-10 text-center md:text-left">
            <h3 className="text-3xl font-bold text-white mb-3">Newsletter CNTDTA</h3>
            <p className="text-blue-100 dark:text-blue-200 text-lg">Receba editais, concursos e notícias diretamente no seu e-mail.</p>
          </div>
          <div className="flex w-full md:w-auto gap-3 relative z-10">
            <input 
              type="email" 
              placeholder="Seu melhor e-mail..." 
              className="flex-grow md:w-80 px-6 py-4 rounded-2xl border-0 focus:ring-4 focus:ring-blue-400 outline-none shadow-inner dark:bg-gray-900 dark:text-white" 
            />
            <button className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition-all shadow-lg active:scale-95 whitespace-nowrap">
              Subscrever
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
