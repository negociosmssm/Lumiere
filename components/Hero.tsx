
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-offWhite">
      {/* Decorative Elements */}
      <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[60%] bg-champagne/30 rounded-full blur-[100px] pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[30%] h-[50%] bg-softGold/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center relative z-10">
        <div className="lg:w-1/2 text-left space-y-8 animate-fade-in">
          <div className="space-y-4">
            <span className="inline-block text-softGold font-semibold uppercase tracking-[0.3em] text-sm animate-slide-up">
              Referência em Reabilitação Oral e Estética
            </span>
            <h1 className="text-5xl lg:text-7xl font-serif text-deepCharcoal leading-[1.1] animate-slide-up delay-100">
              A arte de esculpir <br />
              <span className="italic text-softGold">sorrisos</span> que transformam vidas.
            </h1>
            <p className="text-lg text-gray-600 max-w-lg leading-relaxed animate-slide-up delay-200">
              Tecnologia de ponta e design humanizado para criar o sorriso que você sempre sonhou. 
              Recupere sua autoconfiança com tratamentos personalizados e indolores.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 animate-slide-up delay-300">
            <button className="bg-deepCharcoal text-white px-8 py-4 rounded-full font-bold hover:bg-gray-800 transition-all shadow-xl">
              Agendar Minha Avaliação VIP
            </button>
            <button className="border-2 border-softGold text-softGold px-8 py-4 rounded-full font-bold hover:bg-softGold hover:text-white transition-all">
              Conhecer a Clínica
            </button>
          </div>
        </div>

        <div className="lg:w-1/2 mt-16 lg:mt-0 relative flex justify-center lg:justify-end animate-fade-in-right">
          <div className="relative w-full max-w-lg">
             {/* Main Image */}
            <div className="rounded-[40px] overflow-hidden shadow-2xl relative z-10 border-[12px] border-white">
              <img 
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=800&h=1000" 
                alt="Sorriso Perfeito Lumière" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Float Card */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-2xl z-20 border border-champagne hidden sm:block">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-champagne rounded-full flex items-center justify-center text-softGold">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                </div>
                <div>
                  <p className="font-bold text-deepCharcoal">+2.500</p>
                  <p className="text-xs text-gray-500">Sorrisos Transformados</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
