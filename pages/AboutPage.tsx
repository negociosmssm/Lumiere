
import React from 'react';
import { Award, ShieldCheck, HeartPulse } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      {/* Hero Section About */}
      <section className="container mx-auto px-6 mb-24">
        <div className="max-w-4xl mx-auto text-center mb-16 reveal">
          <span className="text-softGold font-bold uppercase tracking-[0.3em] text-xs">Nossa História</span>
          <h1 className="text-5xl lg:text-7xl font-serif text-deepCharcoal mt-6 mb-8 italic">Paixão pela perfeição, compromisso com você.</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Fundada com o propósito de redefinir os padrões da odontologia estética, a Lumière nasceu da união entre tecnologia avançada e o olhar artístico necessário para criar sorrisos harmônicos.
          </p>
        </div>

        <div className="relative rounded-[40px] overflow-hidden h-[500px] shadow-2xl reveal delay-200">
          <img 
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=2000" 
            alt="Clínica Lumière" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deepCharcoal/60 to-transparent"></div>
          <div className="absolute bottom-10 left-10 right-10 flex flex-wrap justify-between items-end text-white">
            <div className="max-w-md">
              <h2 className="text-3xl font-serif mb-2">Um ambiente planejado</h2>
              <p className="text-gray-200">Cada detalhe da nossa clínica foi projetado para oferecer tranquilidade e exclusividade.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center space-y-4 reveal">
              <div className="w-16 h-16 bg-champagne rounded-full flex items-center justify-center text-softGold mx-auto">
                <Award size={32} />
              </div>
              <h3 className="text-xl font-serif font-bold">Excelência Técnica</h3>
              <p className="text-gray-500">Formação internacional e atualização constante nas técnicas mais modernas do mundo.</p>
            </div>
            <div className="text-center space-y-4 reveal delay-100">
              <div className="w-16 h-16 bg-champagne rounded-full flex items-center justify-center text-softGold mx-auto">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-xl font-serif font-bold">Ética e Segurança</h3>
              <p className="text-gray-500">Protocolos rígidos de biossegurança e transparência total em cada etapa do tratamento.</p>
            </div>
            <div className="text-center space-y-4 reveal delay-200">
              <div className="w-16 h-16 bg-champagne rounded-full flex items-center justify-center text-softGold mx-auto">
                <HeartPulse size={32} />
              </div>
              <h3 className="text-xl font-serif font-bold">Design Humanizado</h3>
              <p className="text-gray-500">Tratamos pessoas, não apenas dentes. Sua história e desejos guiam nosso design.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Staff Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 reveal">
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71f1e3c770?auto=format&fit=crop&q=80&w=800&h=1000" 
                alt="Doutora Lumière" 
                className="rounded-[40px] shadow-2xl"
              />
            </div>
            <div className="lg:w-1/2 space-y-8 reveal delay-200">
              <span className="text-softGold font-bold uppercase tracking-widest text-xs">Corpo Clínico</span>
              <h2 className="text-4xl lg:text-5xl font-serif text-deepCharcoal">Liderança em Estética Dental</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Nossa diretora clínica, Dra. Adriana Valente, é mestre em reabilitação oral e especialista em design de sorrisos pelo DSD World. Com mais de 15 anos de experiência, ela lidera uma equipe focada em transformar não apenas sorrisos, mas vidas.
              </p>
              <div className="space-y-4 pt-4">
                <div className="border-l-4 border-softGold pl-6 italic text-gray-500">
                  "Acreditamos que o sorriso perfeito é aquele que reflete a alma e a felicidade genuína do paciente."
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
