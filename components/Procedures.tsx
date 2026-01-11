
import React from 'react';
import { Sparkles, User, Anchor, ArrowRight } from 'lucide-react';
import { PROCEDURES } from '../constants';

const IconMap: Record<string, React.ReactNode> = {
  sparkles: <Sparkles className="w-8 h-8" />,
  user: <User className="w-8 h-8" />,
  anchor: <Anchor className="w-8 h-8" />,
};

interface ProceduresProps {
  onSeeMore?: () => void;
}

const Procedures: React.FC<ProceduresProps> = ({ onSeeMore }) => {
  return (
    <section id="procedimentos" className="py-24 bg-white relative overflow-hidden reveal">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-softGold font-semibold uppercase tracking-widest text-sm">Tratamentos Exclusivos</span>
          <h2 className="text-4xl lg:text-5xl font-serif text-deepCharcoal mt-4">Design de Sorrisos Personalizado</h2>
          <div className="w-24 h-1 bg-champagne mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROCEDURES.map((p, index) => (
            <div 
              key={p.id}
              className={`group p-10 bg-offWhite rounded-[32px] border border-transparent hover:border-softGold hover:shadow-soft transition-all duration-500 relative overflow-hidden ${
                index % 2 === 1 ? 'md:-translate-y-8' : ''
              }`}
            >
              <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center text-softGold shadow-sm group-hover:bg-softGold group-hover:text-white transition-all duration-300 mb-8">
                {IconMap[p.icon]}
              </div>
              <h3 className="text-2xl font-serif text-deepCharcoal mb-4">{p.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                {p.description}
              </p>
              <button 
                onClick={onSeeMore}
                className="flex items-center text-softGold font-bold uppercase text-xs tracking-widest group-hover:gap-4 gap-2 transition-all"
              >
                Saiba Mais <ArrowRight size={16} />
              </button>
              
              {/* Background Glow */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-champagne/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Procedures;
