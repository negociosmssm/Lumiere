
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Procedures from './components/Procedures';
import Transformations from './components/Transformations';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

// Novas Páginas
import AboutPage from './pages/AboutPage';
import ProceduresPage from './pages/ProceduresPage';
import ContactPage from './pages/ContactPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'sobre' | 'procedimentos' | 'contato'>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => observer.observe(el));

    return () => reveals.forEach(el => observer.unobserve(el));
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'sobre':
        return <AboutPage />;
      case 'procedimentos':
        return <ProceduresPage />;
      case 'contato':
        return <ContactPage />;
      default:
        return (
          <>
            <Hero />
            <section className="bg-white py-12 border-y border-champagne/30 overflow-hidden">
              <div className="container mx-auto px-6">
                <p className="text-center text-gray-400 text-xs uppercase tracking-[0.3em] font-semibold mb-10">Parceiros & Certificações</p>
                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                  <span className="text-xl font-bold tracking-widest font-serif text-deepCharcoal">STRAUMANN</span>
                  <span className="text-xl font-bold tracking-widest font-serif text-deepCharcoal">INVISALIGN</span>
                  <span className="text-xl font-bold tracking-widest font-serif text-deepCharcoal">DSD</span>
                  <span className="text-xl font-bold tracking-widest font-serif text-deepCharcoal">3SHAPE</span>
                  <span className="text-xl font-bold tracking-widest font-serif text-deepCharcoal">CEREC</span>
                </div>
              </div>
            </section>
            <Procedures onSeeMore={() => setCurrentPage('procedimentos')} />
            <Transformations />
            <Experience />
            <Testimonials />
            <FAQ />
          </>
        );
    }
  };

  return (
    <div className="relative antialiased bg-offWhite">
      <Header onNavigate={setCurrentPage} currentPage={currentPage} />
      <main className="min-h-screen">
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
      <WhatsAppButton />
    </div>
  );
};

export default App;
