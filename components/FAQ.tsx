
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQS } from '../constants';

const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(1);

  return (
    <section className="py-24 bg-offWhite">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <span className="text-softGold font-semibold uppercase tracking-widest text-sm">Dúvidas Frequentes</span>
          <h2 className="text-4xl font-serif text-deepCharcoal mt-4">Transparência e Confiança</h2>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq) => (
            <div 
              key={faq.id} 
              className="bg-white rounded-2xl shadow-soft overflow-hidden border border-transparent transition-all"
              style={{ borderColor: openId === faq.id ? '#C5A059' : 'transparent' }}
            >
              <button 
                className="w-full flex items-center justify-between p-6 text-left"
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
              >
                <span className="text-lg font-bold text-deepCharcoal pr-4">{faq.question}</span>
                <ChevronDown 
                  className={`text-softGold transition-transform duration-300 ${openId === faq.id ? 'rotate-180' : ''}`} 
                  size={24} 
                />
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openId === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-50 mt-2">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
