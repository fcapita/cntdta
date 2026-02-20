
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-950 text-white pt-20 pb-8 border-t border-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-white p-1 rounded-lg w-12 h-12 flex items-center justify-center shadow-inner">
                 <img 
                  src="./logo.png" 
                  alt="CNTDTA Logo" 
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://raw.githubusercontent.com/ai-gen-images/cntdta/main/logo.png";
                  }}
                />
              </div>
              <h3 className="text-2xl font-black tracking-tighter">CNTDTA</h3>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed mb-8 opacity-80">
              Conselho Nacional dos Técnicos de Diagnóstico e Terapêutica de Angola. 
              Garantindo a ética e excelência profissional no setor da saúde desde 2007.
            </p>
            <div className="flex space-x-5">
              {[
                { icon: 'fa-x-twitter', href: '#' },
                { icon: 'fa-linkedin', href: '#' },
                { icon: 'fa-instagram', href: '#' },
                { icon: 'fa-facebook', href: '#' }
              ].map((social, idx) => (
                <a key={idx} href={social.href} className="w-10 h-10 bg-blue-900 rounded-xl flex items-center justify-center hover:bg-blue-600 transition-all hover:-translate-y-1 shadow-md">
                  <i className={`fa-brands ${social.icon} text-lg`}></i>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-8 text-blue-400">Institucional</h4>
            <ul className="space-y-4 text-sm text-blue-100/70">
              <li><a href="#institucional" className="hover:text-white hover:pl-2 transition-all">História do Conselho</a></li>
              <li><a href="#institucional" className="hover:text-white hover:pl-2 transition-all">Missão e Valores</a></li>
              <li><a href="#institucional" className="hover:text-white hover:pl-2 transition-all">Corpo Diretivo Nacional</a></li>
              <li><a href="#profissoes" className="hover:text-white hover:pl-2 transition-all">Estatutos e Decretos</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 text-blue-400">Serviços Digitais</h4>
            <ul className="space-y-4 text-sm text-blue-100/70">
              <li><a href="#portal" className="hover:text-white hover:pl-2 transition-all">Inscrição de Novos Membros</a></li>
              <li><a href="#portal" className="hover:text-white hover:pl-2 transition-all">Emissão de Cédula Profissional</a></li>
              <li><a href="#portal" className="hover:text-white hover:pl-2 transition-all">Validação de Documentos</a></li>
              <li><a href="#portal" className="hover:text-white hover:pl-2 transition-all">Quotas e Emolumentos</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 text-blue-400">Contactos</h4>
            <ul className="space-y-6 text-sm text-blue-100/70">
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="fa-solid fa-location-dot text-blue-400"></i>
                </div>
                <span>Sede: Rua Direita do Gamek, Luanda, Angola</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-8 h-8 bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="fa-solid fa-phone text-blue-400"></i>
                </div>
                <span>+244 9XX XXX XXX</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-8 h-8 bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="fa-solid fa-envelope text-blue-400"></i>
                </div>
                <span>geral@cntdta.ao</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-900/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-blue-400 uppercase font-bold tracking-[0.2em]">
          <p>© {new Date().getFullYear()} CNTDTA - PORTAL OFICIAL</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          </div>
          <p>Powered by Zulumuka & AI</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
