
import React from 'react';
import { Mail, Phone, MapPin, Instagram, Clock } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const ContactPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <section className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row bg-white rounded-[40px] shadow-2xl overflow-hidden reveal">
          
          {/* Info Side */}
          <div className="lg:w-2/5 bg-deepCharcoal p-12 lg:p-16 text-white space-y-12">
            <div>
              <h1 className="text-4xl lg:text-5xl font-serif mb-6">Inicie sua <br/><span className="italic text-softGold">transformação.</span></h1>
              <p className="text-gray-400">Nossa equipe está pronta para oferecer um atendimento exclusivo e personalizado para você.</p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-softGold">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-[10px] text-softGold mb-1">Localização</h4>
                  <p className="text-gray-300">{CONTACT_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-softGold">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-[10px] text-softGold mb-1">Contato</h4>
                  <p className="text-gray-300">{CONTACT_INFO.phone}</p>
                  <p className="text-gray-400 text-sm">{CONTACT_INFO.email}</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-softGold">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-[10px] text-softGold mb-1">Atendimento</h4>
                  <p className="text-gray-300">Seg - Sex: 08:00 às 19:00</p>
                  <p className="text-gray-400 text-sm">Sábados: 08:00 às 13:00</p>
                </div>
              </div>
            </div>

            <div className="flex space-x-4 pt-10">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-softGold transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-softGold transition-all text-sm font-bold">In</a>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-3/5 p-12 lg:p-20 bg-white">
            <h2 className="text-3xl font-serif text-deepCharcoal mb-10">Agende sua Avaliação VIP</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Nome Completo</label>
                  <input type="text" className="w-full bg-offWhite border-none rounded-xl p-4 text-deepCharcoal focus:ring-2 focus:ring-softGold/20" placeholder="Ex: Maria Silva" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Celular / WhatsApp</label>
                  <input type="tel" className="w-full bg-offWhite border-none rounded-xl p-4 text-deepCharcoal focus:ring-2 focus:ring-softGold/20" placeholder="(00) 00000-0000" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Interesse Principal</label>
                <select className="w-full bg-offWhite border-none rounded-xl p-4 text-deepCharcoal focus:ring-2 focus:ring-softGold/20">
                  <option>Lentes de Contato Dental</option>
                  <option>Harmonização Orofacial</option>
                  <option>Implantes</option>
                  <option>Outros Procedimentos</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Mensagem (Opcional)</label>
                <textarea rows={4} className="w-full bg-offWhite border-none rounded-xl p-4 text-deepCharcoal focus:ring-2 focus:ring-softGold/20" placeholder="Conte-nos um pouco sobre o que busca..."></textarea>
              </div>

              <button className="w-full bg-softGold text-white py-5 rounded-xl font-bold uppercase tracking-[0.2em] shadow-gold hover:bg-opacity-90 transition-all transform hover:-translate-y-1">
                Solicitar Agendamento
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="container mx-auto px-6 mt-24 reveal">
        <div className="h-[400px] w-full bg-champagne/20 rounded-[40px] flex items-center justify-center overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
           {/* In a real scenario, an iframe with Google Maps would go here */}
           <div className="text-center space-y-4">
              <MapPin size={48} className="text-softGold mx-auto animate-bounce" />
              <p className="font-serif italic text-xl text-deepCharcoal">Nossa localização privilegiada no Edifício Platinum.</p>
           </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
