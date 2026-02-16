
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-bold mb-6">CNTDTA</h3>
            <p className="text-blue-100 text-sm leading-relaxed mb-6">
              Conselho Nacional dos Técnicos de Diagnóstico e Terapêutica de Angola. 
              Representando e valorizando a classe desde 2007.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400 transition-colors"><i className="fa-brands fa-facebook text-xl"></i></a>
              <a href="#" className="hover:text-blue-400 transition-colors"><i className="fa-brands fa-linkedin text-xl"></i></a>
              <a href="#" className="hover:text-blue-400 transition-colors"><i className="fa-brands fa-instagram text-xl"></i></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Institucional</h4>
            <ul className="space-y-4 text-sm text-blue-100">
              <li><a href="#institucional" className="hover:text-white transition-colors">História</a></li>
              <li><a href="#institucional" className="hover:text-white transition-colors">Missão e Visão</a></li>
              <li><a href="#institucional" className="hover:text-white transition-colors">Corpo Diretivo</a></li>
              <li><a href="#profissoes" className="hover:text-white transition-colors">Regime Jurídico</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Serviços</h4>
            <ul className="space-y-4 text-sm text-blue-100">
              <li><a href="#portal" className="hover:text-white transition-colors">Inscrição Online</a></li>
              <li><a href="#portal" className="hover:text-white transition-colors">Emissão de Carteiras</a></li>
              <li><a href="#portal" className="hover:text-white transition-colors">Verificação de Autenticidade</a></li>
              <li><a href="#portal" className="hover:text-white transition-colors">Ética e Deontologia</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Contactos</h4>
            <ul className="space-y-4 text-sm text-blue-100">
              <li className="flex items-start gap-3">
                <i className="fa-solid fa-location-dot mt-1"></i>
                <span>Sede Nacional: Luanda, Angola</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fa-solid fa-phone"></i>
                <span>+244 9XX XXX XXX</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fa-solid fa-envelope"></i>
                <span>secretaria@cntdta.ao</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 pt-8 text-center text-xs text-blue-300">
          <p>© {new Date().getFullYear()} CNTDTA - Todos os direitos reservados. Software por Zulumuka.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
