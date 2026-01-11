
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-softGold font-semibold uppercase tracking-widest text-sm">Depoimentos</span>
          <h2 className="text-4xl lg:text-5xl font-serif text-deepCharcoal mt-4">Quem já transformou o sorriso conosco</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="p-10 bg-offWhite rounded-[40px] shadow-sm hover:shadow-lg transition-all border border-gray-100 relative group">
              <Quote className="absolute top-8 right-10 text-champagne w-12 h-12 opacity-50" />
              
              <div className="flex space-x-1 mb-6">
                {[...Array(t.stars)].map((_, i) => (
                  <Star key={i} size={16} fill="#C5A059" color="#C5A059" />
                ))}
              </div>

              <p className="text-lg text-gray-700 italic leading-relaxed mb-8">
                "{t.text}"
              </p>

              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-champagne">
                  <img src={`https://i.pravatar.cc/150?u=${t.id}`} alt={t.name} />
                </div>
                <div>
                  <h4 className="font-bold text-deepCharcoal">{t.name}</h4>
                  <p className="text-sm text-softGold font-medium tracking-wide">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
