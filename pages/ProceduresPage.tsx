
import React from 'react';
import { PROCEDURES } from '../constants';

const ProceduresPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <section className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-24 reveal">
          <span className="text-softGold font-bold uppercase tracking-[0.3em] text-xs">Nosso Portfólio</span>
          <h1 className="text-5xl lg:text-6xl font-serif text-deepCharcoal mt-6 mb-8">Especialidades de Luxo</h1>
          <p className="text-lg text-gray-600">
            Oferecemos uma gama completa de soluções odontológicas de alto padrão, combinando estética e funcionalidade.
          </p>
        </div>

        <div className="space-y-32">
          {PROCEDURES.map((p, index) => (
            <div 
              key={p.id} 
              className={`flex flex-col lg:items-center gap-12 lg:gap-24 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'
              } reveal`}
            >
              <div className="lg:w-1/2 relative group">
                <div className="absolute inset-0 bg-softGold rounded-[40px] rotate-3 opacity-10 group-hover:rotate-6 transition-transform"></div>
                <img 
                  src={`https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=1000&seed=${p.id}`} 
                  alt={p.title} 
                  className="rounded-[40px] shadow-2xl relative z-10 w-full aspect-video object-cover"
                />
              </div>
              <div className="lg:w-1/2 space-y-6">
                <h2 className="text-4xl font-serif text-deepCharcoal">{p.title}</h2>
                <p className="text-xl text-softGold italic font-serif">Onde a ciência encontra a arte.</p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {p.description} Além do resultado estético imediato, focamos na longevidade do tratamento através de materiais biocompatíveis de última geração.
                </p>
                <ul className="space-y-3 pt-4">
                  <li className="flex items-center space-x-3 text-gray-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-softGold"></div>
                    <span>Planejamento Digital 3D</span>
                  </li>
                  <li className="flex items-center space-x-3 text-gray-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-softGold"></div>
                    <span>Resultados Naturais e Duradouros</span>
                  </li>
                  <li className="flex items-center space-x-3 text-gray-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-softGold"></div>
                    <span>Equipamentos com Tecnologia Suíça</span>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProceduresPage;
