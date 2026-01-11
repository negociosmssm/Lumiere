
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onNavigate: (page: 'home' | 'sobre' | 'procedimentos' | 'contato') => void;
  currentPage: string;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, currentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { name: string; id: 'home' | 'sobre' | 'procedimentos' | 'contato' }[] = [
    { name: 'Início', id: 'home' },
    { name: 'A Clínica', id: 'sobre' },
    { name: 'Procedimentos', id: 'procedimentos' },
    { name: 'Contato', id: 'contato' },
  ];

  const handleLinkClick = (id: 'home' | 'sobre' | 'procedimentos' | 'contato') => {
    onNavigate(id);
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || currentPage !== 'home' ? 'bg-white/95 backdrop-blur-md shadow-soft py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <button onClick={() => onNavigate('home')} className="flex items-center space-x-2 outline-none">
          <span className="text-2xl font-serif font-bold tracking-widest text-deepCharcoal uppercase">
            Lumière
          </span>
          <div className="w-1.5 h-1.5 rounded-full bg-softGold mb-1"></div>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className={`text-[11px] font-bold transition-colors uppercase tracking-[0.2em] outline-none ${
                currentPage === link.id ? 'text-softGold' : 'text-deepCharcoal hover:text-softGold'
              }`}
            >
              {link.name}
            </button>
          ))}
          <button 
            onClick={() => handleLinkClick('contato')}
            className="bg-softGold text-white px-6 py-2.5 rounded-full text-[11px] font-bold hover:bg-opacity-90 transition-all transform hover:-translate-y-0.5 shadow-gold uppercase tracking-[0.2em]"
          >
            Agendar Consulta
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-deepCharcoal"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-xl transition-all duration-300 transform ${
          isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col p-6 space-y-4">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className={`text-lg font-medium text-left ${currentPage === link.id ? 'text-softGold' : 'text-deepCharcoal'}`}
            >
              {link.name}
            </button>
          ))}
          <button 
            onClick={() => handleLinkClick('contato')}
            className="bg-softGold text-white text-center py-3 rounded-lg font-bold"
          >
            Agendar Consulta
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
