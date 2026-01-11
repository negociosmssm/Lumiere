
import React, { useState, useRef, useEffect } from 'react';
import { TRANSFORMATIONS } from '../constants';
import { ChevronLeft, ChevronRight, Sparkles, MoveHorizontal } from 'lucide-react';

const Transformations: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === TRANSFORMATIONS.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? TRANSFORMATIONS.length - 1 : prev - 1));
  };

  return (
    <section id="transformacoes" className="py-24 bg-white relative overflow-hidden reveal">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-softGold font-semibold uppercase tracking-[0.3em] text-xs italic block mb-4 flex items-center justify-center gap-2">
            <Sparkles size={14} /> Resultados de Excelência
          </span>
          <h2 className="text-4xl lg:text-6xl font-serif text-deepCharcoal mb-6">Transformações Incríveis</h2>
          <div className="w-20 h-0.5 bg-champagne mx-auto mb-6"></div>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed font-sans">
            Arraste o divisor central para comparar a precisão clínica e o refinamento estético de nossos tratamentos exclusivos.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Main Carousel Area */}
          <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-[40px] overflow-hidden shadow-2xl bg-offWhite">
            {TRANSFORMATIONS.map((t, idx) => (
              <div
                key={t.id}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  idx === currentIndex ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
                }`}
              >
                {/* Only render the slider for the current, previous and next slides to save memory/performance */}
                {Math.abs(idx - currentIndex) <= 1 || (currentIndex === 0 && idx === TRANSFORMATIONS.length - 1) || (currentIndex === TRANSFORMATIONS.length - 1 && idx === 0) ? (
                  <BeforeAfterSlider before={t.beforeImg} after={t.afterImg} category={t.category} />
                ) : null}
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center mt-12 gap-8">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border border-champagne flex items-center justify-center text-softGold hover:bg-softGold hover:text-white transition-all shadow-sm"
              aria-label="Anterior"
            >
              <ChevronLeft size={24} />
            </button>
            
            <div className="flex gap-3">
              {TRANSFORMATIONS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-1.5 transition-all duration-300 rounded-full ${
                    idx === currentIndex ? 'w-8 bg-softGold' : 'w-2 bg-champagne'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border border-champagne flex items-center justify-center text-softGold hover:bg-softGold hover:text-white transition-all shadow-sm"
              aria-label="Próximo"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-deepCharcoal font-serif italic text-2xl mb-4">
            {TRANSFORMATIONS[currentIndex].category}
          </p>
          <p className="text-gray-400 text-sm uppercase tracking-widest">
            Protocolo Personalizado Lumière
          </p>
        </div>
      </div>
      
      {/* Decorative Blur */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-champagne/20 rounded-full blur-[120px] pointer-events-none"></div>
    </section>
  );
};

const BeforeAfterSlider: React.FC<{ before: string; after: string; category: string }> = ({ before, after, category }) => {
  const [sliderPos, setSliderPos] = useState(50);
  const [beforeLoaded, setBeforeLoaded] = useState(false);
  const [afterLoaded, setAfterLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = (e: MouseEvent | TouchEvent) => {
    if (!isDragging.current || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const relativeX = x - rect.left;
    const position = Math.max(0, Math.min(100, (relativeX / rect.width) * 100));
    
    setSliderPos(position);
  };

  const onMouseDown = () => (isDragging.current = true);
  const onMouseUp = () => (isDragging.current = false);

  useEffect(() => {
    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('touchmove', handleMove);
    window.addEventListener('touchend', onMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('touchmove', handleMove);
      window.removeEventListener('touchend', onMouseUp);
    };
  }, []);

  const allLoaded = beforeLoaded && afterLoaded;

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-full select-none cursor-ew-resize group"
      onMouseDown={onMouseDown}
      onTouchStart={onMouseDown}
    >
      {/* Shimmer Effect while loading */}
      {!allLoaded && (
        <div className="absolute inset-0 z-40 bg-gray-100 animate-pulse flex items-center justify-center">
          <div className="w-10 h-10 border-4 border-champagne border-t-softGold rounded-full animate-spin"></div>
        </div>
      )}

      {/* BEFORE IMAGE (Base) */}
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src={before} 
          alt="Antes" 
          loading="lazy"
          decoding="async"
          onLoad={() => setBeforeLoaded(true)}
          className={`w-full h-full object-cover grayscale brightness-90 transition-all duration-[1.5s] ease-out group-hover:scale-110 ${beforeLoaded ? 'opacity-100' : 'opacity-0'}`} 
        />
        <div className="absolute top-6 left-6 bg-deepCharcoal/40 backdrop-blur-md text-white text-[10px] font-bold uppercase px-4 py-2 rounded-full tracking-[0.2em] border border-white/10 z-10">
          Antes
        </div>
      </div>

      {/* AFTER IMAGE (Overlay) */}
      <div 
        className="absolute inset-0 overflow-hidden z-10"
        style={{ width: `${sliderPos}%` }}
      >
        <div className="h-full relative overflow-hidden" style={{ width: containerRef.current?.offsetWidth || '100vw' }}>
          <img 
            src={after} 
            alt="Depois" 
            loading="lazy"
            decoding="async"
            onLoad={() => setAfterLoaded(true)}
            className={`absolute inset-0 h-full w-full object-cover transition-all duration-[1.5s] ease-out group-hover:scale-110 ${afterLoaded ? 'opacity-100' : 'opacity-0'}`} 
          />
        </div>
        <div className="absolute top-6 left-6 bg-softGold/80 backdrop-blur-md text-white text-[10px] font-bold uppercase px-4 py-2 rounded-full tracking-[0.2em] shadow-lg whitespace-nowrap z-20">
          Lumière Result
        </div>
      </div>

      {/* SLIDER HANDLE */}
      {allLoaded && (
        <div 
          className="absolute top-0 bottom-0 z-30 w-1 bg-softGold shadow-[0_0_15px_rgba(197,160,89,0.5)] flex items-center justify-center cursor-ew-resize"
          style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}
        >
          <div className="w-12 h-12 bg-white rounded-full shadow-2xl flex items-center justify-center border-2 border-softGold transform group-hover:scale-110 transition-transform">
            <MoveHorizontal className="text-softGold" size={20} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Transformations;
