
import React from 'react';
import { Instagram, Facebook, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

interface FooterProps {
  onNavigate: (page: 'home' | 'sobre' | 'procedimentos' | 'contato') => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer id="contato" className="bg-deepCharcoal text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1 space-y-6">
            <button onClick={() => onNavigate('home')} className="flex items-center space-x-2">
              <span className="text-3xl font-serif font-bold tracking-widest text-white uppercase">
                Lumière
              </span>
              <div className="w-2 h-2 rounded-full bg-softGold mb-1"></div>
            </button>
            <p className="text-gray-400 leading-relaxed">
              Excelência em odontologia estética e reabilitação oral. Criando sorrisos inesquecíveis através da arte e ciência.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-softGold hover:border-softGold transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-softGold hover:border-softGold transition-all text-sm font-bold">In</a>
            </div>
          </div>

          <div className="lg:col-span-1">
            <h4 className="text-lg font-serif mb-8 text-softGold italic">Navegação</h4>
            <ul className="space-y-4 text-gray-400">
              <li><button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">Início</button></li>
              <li><button onClick={() => onNavigate('sobre')} className="hover:text-white transition-colors">A Clínica</button></li>
              <li><button onClick={() => onNavigate('procedimentos')} className="hover:text-white transition-colors">Procedimentos</button></li>
              <li><button onClick={() => onNavigate('contato')} className="hover:text-white transition-colors">Contato</button></li>
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-8">
            <h4 className="text-lg font-serif mb-2 text-softGold italic">O seu novo sorriso começa com uma conversa.</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start space-x-3 text-gray-400">
                  <MapPin className="text-softGold mt-1 flex-shrink-0" size={20} />
                  <span>{CONTACT_INFO.address}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <Phone className="text-softGold flex-shrink-0" size={20} />
                  <span>{CONTACT_INFO.phone}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <Mail className="text-softGold flex-shrink-0" size={20} />
                  <span>{CONTACT_INFO.email}</span>
                </div>
              </div>

              <div className="bg-gray-800 p-6 rounded-2xl flex flex-col justify-between">
                <p className="text-sm font-bold uppercase tracking-widest text-softGold mb-4">Atendimento</p>
                <div className="space-y-2 text-sm text-gray-300">
                  <div className="flex justify-between">
                    <span>Segunda - Sexta</span>
                    <span>08:00 - 19:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sábado</span>
                    <span>08:00 - 13:00</span>
                  </div>
                </div>
                <button 
                  onClick={() => onNavigate('contato')}
                  className="mt-6 flex items-center justify-center space-x-2 bg-softGold text-white py-3 rounded-xl font-bold hover:bg-opacity-90 transition-all"
                >
                  <span>Agendar Consulta</span>
                  <ExternalLink size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-10 flex flex-col md:row items-center justify-between text-gray-500 text-sm">
          <p>© 2024 Lumière Odontologia Estética. Todos os direitos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacidade</a>
            <a href="#" className="hover:text-white">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
