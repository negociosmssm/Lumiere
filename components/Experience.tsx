
import React from 'react';
import { Check } from 'lucide-react';

const Experience: React.FC = () => {
  const highlights = [
    "Digital Smile Design (DSD)",
    "Consultório com Aroma Terapia",
    "Suporte Pós-Procedimento 24h",
    "Scanner Intraoral 3D",
    "Equipe Multidisciplinar",
    "Ambiente Lounge Exclusivo"
  ];

  return (
    <section id="experiencia" className="py-24 bg-offWhite overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1609139006231-e420150bf90a?auto=format&fit=crop&q=80&w=600&h=800" 
                alt="Ambiente Lumière" 
                className="rounded-[40px] shadow-lg w-full h-[300px] object-cover mt-8"
              />
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=600&h=800" 
                alt="Tecnologia Lumière" 
                className="rounded-[40px] shadow-lg w-full h-[300px] object-cover"
              />
            </div>
          </div>
          
          <div className="lg:w-1/2 space-y-8">
            <div>
              <span className="text-softGold font-semibold uppercase tracking-widest text-sm">O Conceito Lumière</span>
              <h2 className="text-4xl lg:text-5xl font-serif text-deepCharcoal mt-4 mb-6">
                Muito além de uma consulta, um momento de cuidado.
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Na Lumière, entendemos que cada sorriso é único. Por isso, unimos o Digital Smile Design (planejamento digital 3D) a um ambiente acolhedor e exclusivo. Aqui, o seu conforto é nossa prioridade absoluta, desde o aroma do nosso café até o suporte pós-procedimento.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-champagne rounded-full flex items-center justify-center text-softGold">
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <span className="text-deepCharcoal font-medium">{item}</span>
                </div>
              ))}
            </div>

            <button className="bg-softGold text-white px-10 py-4 rounded-full font-bold hover:shadow-gold transition-all">
              Agendar Visita à Clínica
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
