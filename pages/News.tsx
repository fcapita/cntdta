
import React, { useState } from 'react';

const News: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;

  const allPosts = [
    {
      title: "Expansão de Serviços de Hemodiálise no Interior",
      date: "25 Jan 2026",
      category: "Infraestrutura",
      image: "https://picsum.photos/id/221/400/300.webp",
      excerpt: "O MINSA e o CNTDTA anunciam novas unidades equipadas em três províncias para descentralizar o atendimento especializado."
    },
    {
      title: "Contratação de 10.283 Novos Técnicos",
      date: "12 Jan 2026",
      category: "Carreira",
      image: "https://picsum.photos/id/222/400/300.webp",
      excerpt: "Balanço positivo das recentes contratações públicas fortalece o diagnóstico em unidades de nível primário e secundário."
    },
    {
      title: "Parceria Internacional para Transferência de Tecnologia",
      date: "05 Jan 2026",
      category: "Pesquisa",
      image: "https://picsum.photos/id/223/400/300.webp",
      excerpt: "Acordo firmado com centros de excelência permitirá formação avançada em medicina nuclear para técnicos angolanos."
    },
    {
      title: "Publicação do Novo Manual de Ética e Humanização",
      date: "28 Dez 2025",
      category: "Deontologia",
      image: "https://picsum.photos/id/225/400/300.webp",
      excerpt: "Documento orienta a conduta dos profissionais visando a melhoria do atendimento humanizado no setor público."
    }
  ];

  const totalPages = Math.ceil(allPosts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = allPosts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 300, behavior: 'smooth' });
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
            <article 
              key={`${currentPage}-${i}`} 
              className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-gray-100 dark:border-gray-700 group animate-fadeIn"
            >
              <div className="md:w-2/5 relative aspect-video md:aspect-auto overflow-hidden bg-gray-200 dark:bg-gray-900">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  loading="lazy"
                  decoding="async"
                  width="400"
                  height="300"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute top-4 left-4 bg-rose-600 text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest">
                  {post.category}
                </div>
              </div>
              <div className="md:w-3/5 p-8 flex flex-col justify-between">
                <div>
                  <span className="text-gray-400 dark:text-gray-500 text-xs font-semibold mb-3 block flex items-center gap-2">
                    <i className="fa-regular fa-calendar"></i> {post.date}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-rose-600 transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-3 mb-6">
                    {post.excerpt}
                  </p>
                </div>
                <a href="#" className="text-rose-600 dark:text-rose-400 font-bold text-sm flex items-center gap-2 group-hover:gap-4 transition-all">
                  Ler artigo <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Call to Action */}
        <div className="mt-20 bg-blue-600 dark:bg-blue-800 rounded-[3rem] p-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden transition-colors duration-300">
          <div className="max-w-lg relative z-10 text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-2">Newsletter CNTDTA</h3>
            <p className="text-blue-100 text-lg">Receba editais e notícias no seu e-mail.</p>
          </div>
          <div className="flex w-full md:w-auto gap-3 relative z-10">
            <input 
              type="email" 
              placeholder="Seu e-mail..." 
              className="flex-grow md:w-64 px-5 py-3.5 rounded-2xl focus:ring-4 focus:ring-blue-400 outline-none dark:bg-gray-900 dark:text-white" 
            />
            <button className="bg-white text-blue-600 px-6 py-3.5 rounded-2xl font-bold hover:bg-gray-100 transition-all active:scale-95 shadow-md">
              Subscrever
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
