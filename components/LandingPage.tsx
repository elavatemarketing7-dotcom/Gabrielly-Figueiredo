
import React from 'react';
import { EXPERT_DATA, IMAGES } from '../constants';
import { Instagram, MapPin, ChevronRight, Star, ArrowUpRight, ShieldCheck, Sparkles, Award, Quote } from 'lucide-react';
import NavbarMarquee from './NavbarMarquee';
import Gallery from './Gallery';

interface LandingPageProps {
  onContact: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onContact }) => {
  const cleanAddressForQuery = (addr: string) => {
    return addr.replace('📍', '').replace(/\|/g, ',').replace(/\sl\s/g, ', ').trim();
  };

  const openGoogleMaps = () => {
    const query = encodeURIComponent(cleanAddressForQuery(EXPERT_DATA.address));
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
  };

  const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(cleanAddressForQuery(EXPERT_DATA.address))}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

  const testimonialCards = IMAGES.comments.map((img, i) => (
    <div key={i} className="paper-card p-10 rounded-[2.5rem] flex flex-col items-start editorial-shadow">
      <div className="flex gap-1 mb-6 text-premium-gold">
        {[1, 2, 3, 4, 5].map(s => <Star key={s} size={14} fill="currentColor" />)}
      </div>
      <div className="relative mb-6">
        <Quote className="absolute -top-4 -left-4 text-premium-sand opacity-50" size={40} />
        <img src={img} alt="Depoimento" className="w-full rounded-2xl grayscale-[0.5] hover:grayscale-0 transition-all duration-700" />
      </div>
      <p className="text-[10px] font-black uppercase tracking-widest text-premium-bronze">Paciente Real • Feedback Verificado</p>
    </div>
  ));

  return (
    <div className="relative bg-premium-champagne selection:bg-premium-espresso selection:text-premium-champagne">
      <NavbarMarquee />

      {/* Editorial Hero */}
      <section id="hero" className="relative min-h-screen flex items-center pt-32 pb-24 overflow-hidden">
        <div className="absolute right-0 top-0 w-full md:w-1/2 h-full z-0 opacity-20 md:opacity-100">
          <div className="absolute inset-0 bg-gradient-to-r from-premium-champagne via-transparent to-transparent z-10" />
          <img src={IMAGES.hero} alt="Beleza Editorial" className="w-full h-full object-cover grayscale-[0.2]" />
        </div>

        <div className="max-w-7xl mx-auto px-8 relative z-20 w-full">
          <div className="max-w-3xl space-y-10 animate-fade-up">
            <div className="inline-flex items-center gap-4">
              <span className="h-px w-12 bg-premium-bronze/40" />
              <span className="text-[10px] uppercase font-black tracking-[0.6em] text-premium-bronze">Estética de Elite</span>
            </div>
            
            <h1 className="text-[14vw] md:text-[8vw] font-bold serif leading-[0.8] tracking-tighter text-premium-espresso">
              Sua beleza,<br/>
              <span className="italic bronze-gradient">Elevada.</span>
            </h1>
            
            <div className="grid md:grid-cols-2 gap-10 items-end">
              <p className="text-xl md:text-2xl text-premium-bronze/80 font-light leading-relaxed text-balance">
                A Dra. Gabrielly Figueiredo une ciência e sensibilidade para criar resultados que honram sua história.
              </p>
              
              <div className="flex flex-col gap-6">
                <button 
                  onClick={onContact}
                  className="group px-12 py-7 bg-premium-espresso text-premium-pearl rounded-full font-bold text-lg shadow-2xl hover:bg-black transition-all flex items-center justify-center gap-4"
                >
                  Agendar Consulta
                  <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <div className="flex items-center gap-3 text-[9px] font-bold uppercase tracking-widest text-premium-bronze/50">
                   <ShieldCheck size={14} />
                   Protocolos Seguros e Individuais
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Feature - Asymmetric */}
      <section className="py-32 px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            <div className="absolute -left-20 top-20 text-[20vw] font-bold serif text-premium-sand/30 leading-none select-none -z-10">Real</div>
            <div className="flex flex-col md:flex-row gap-20 items-center">
              <div className="w-full md:w-2/3 relative group">
                <div className="absolute -inset-8 border border-premium-bronze/10 rounded-[4rem] group-hover:inset-0 transition-all duration-1000" />
                <div className="relative aspect-video rounded-[3rem] overflow-hidden editorial-shadow bg-premium-espresso">
                  <video src={IMAGES.video} className="w-full h-full object-cover" autoPlay muted loop playsInline />
                  <div className="absolute inset-0 bg-premium-espresso/5 pointer-events-none" />
                </div>
              </div>
              <div className="w-full md:w-1/3 space-y-8">
                <div className="space-y-4">
                  <h2 className="text-5xl font-bold serif leading-tight text-premium-espresso">O Play da<br/><span className="italic text-premium-bronze">Confiança</span></h2>
                  <div className="w-16 h-1 bg-premium-bronze" />
                </div>
                <p className="text-lg text-premium-bronze leading-relaxed font-light">
                  Descubra como a beleza pode ser realçada com técnica, sensibilidade e propósito. Resultados naturais e transformadores.
                </p>
                <button onClick={onContact} className="text-[10px] font-black uppercase tracking-[0.4em] text-premium-espresso flex items-center gap-3 group">
                   Comece sua Jornada <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Editorial Cutout */}
      <section id="sobre" className="py-32 px-8 bg-premium-sand/20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-center">
          <div className="relative order-2 md:order-1">
             <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative border-[20px] border-white z-10">
                <img src={IMAGES.about} alt="Dra Gabrielly" className="w-full h-full object-cover" />
             </div>
             <div className="absolute -bottom-10 -right-10 w-2/3 h-1/2 bg-premium-bronze -z-10 rounded-3xl opacity-20" />
          </div>
          <div className="space-y-12 order-1 md:order-2">
            <div className="space-y-6">
              <span className="text-premium-bronze font-black text-[10px] uppercase tracking-[0.5em]">A Especialista</span>
              <h2 className="text-6xl md:text-8xl font-bold serif leading-none">Gabrielly<br/><span className="italic text-premium-gold/50">Figueiredo</span></h2>
              <p className="text-xl text-premium-espresso/70 leading-relaxed font-light">
                Com um olhar treinado para a harmonia clássica, a Dra. Gabrielly atua em Porto Velho e região entregando refinamento a cada face.
              </p>
            </div>
            <div className="grid gap-8">
              {[
                { t: "Diagnóstico Bio-Facial", d: "Uma análise profunda das suas proporções e necessidades únicas." },
                { t: "Insumos de Luxo", d: "Apenas o que há de mais moderno e seguro na medicina estética global." },
                { t: "Cuidado Pós-Luxo", d: "Acompanhamento VIP para garantir que sua recuperação seja perfeita." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-premium-bronze border border-premium-bronze/10 group-hover:bg-premium-bronze group-hover:text-white transition-all">
                    <Award size={20} />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-premium-espresso text-lg serif">{item.t}</h4>
                    <p className="text-sm text-premium-bronze/60 leading-relaxed">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio - Gallery */}
      <section id="resultados" className="py-32 px-8 bg-premium-pearl">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="flex flex-col md:flex-row justify-between items-end gap-10">
            <div className="space-y-4">
              <span className="text-premium-bronze font-black text-[10px] uppercase tracking-[0.4em]">Le Portefeuille</span>
              <h2 className="text-6xl md:text-8xl font-bold serif leading-none">Resultados<br/><span className="italic bronze-gradient">Reais</span></h2>
            </div>
            <div className="max-w-sm text-right">
               <p className="text-sm text-premium-bronze/60 font-medium italic">
                 "A melhor propaganda é um rosto que sorri com naturalidade."
               </p>
            </div>
          </div>
          
          <Gallery items={IMAGES.results} aspectRatio="aspect-[4/5]" itemWidth="w-[85vw] md:w-[400px]" />
          
          <div className="flex justify-center">
             <div className="inline-flex items-center gap-3 px-8 py-3 bg-premium-champagne rounded-full border border-premium-bronze/10 text-[10px] text-premium-bronze font-black uppercase tracking-widest">
               Portfólio Ético • Imagens Reais
             </div>
          </div>
        </div>
      </section>

      {/* Aesthetic Section - Hearts Gallery */}
      <section id="harmonizacao" className="py-32 px-8 bg-premium-champagne">
        <div className="max-w-7xl mx-auto text-center mb-24 space-y-6">
           <h2 className="text-5xl md:text-7xl font-bold serif text-premium-espresso leading-tight">Harmonização Facial<br/><span className="text-premium-bronze italic">De Verdade</span></h2>
           <p className="text-premium-bronze/60 font-light text-xl max-w-2xl mx-auto italic">
              Um conceito focado na delicadeza dos detalhes.
           </p>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <Gallery 
            items={IMAGES.hearts} 
            itemWidth="w-[75vw] md:w-[380px]" 
            aspectRatio="aspect-square"
          />
        </div>
      </section>

      {/* Experiences Section */}
      <section id="depoimentos" className="py-32 px-8 bg-premium-espresso text-premium-pearl overflow-hidden">
        <div className="max-w-7xl mx-auto">
           <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-12">
             <div className="max-w-2xl space-y-6">
                <span className="text-premium-gold font-bold text-xs uppercase tracking-[0.5em]">Experiências</span>
                <h2 className="text-6xl md:text-8xl font-bold serif italic leading-none">O que Elas<br/>Vivenciaram</h2>
             </div>
             <a href={EXPERT_DATA.instagram} target="_blank" rel="noopener noreferrer" className="px-10 py-5 bg-white/5 border border-white/10 rounded-full text-xs font-black uppercase tracking-widest hover:bg-white/10 transition-all flex items-center gap-4">
                Instagram <Instagram size={18} />
             </a>
           </div>

           <Gallery 
             items={testimonialCards} 
             type="custom" 
             itemWidth="w-[90vw] md:w-[500px]" 
             aspectRatio="aspect-auto"
           />
        </div>
      </section>

      {/* Process Section - Minimal Steps */}
      <section id="processo" className="py-32 px-8 bg-premium-pearl">
        <div className="max-w-5xl mx-auto space-y-24">
           <div className="text-center space-y-6">
             <h2 className="text-5xl md:text-7xl font-bold serif">Sua Experiência VIP</h2>
             <div className="w-20 h-1 bg-premium-bronze mx-auto" />
           </div>
           
           <div className="grid gap-20">
              {[
                { n: "01", t: "O Primeiro Contato", d: "Triagem personalizada via WhatsApp para entender suas expectativas iniciais." },
                { n: "02", t: "O Mapeamento Facial", d: "Sua consulta presencial onde desenhamos o plano estratégico para sua face." },
                { n: "03", t: "O Despertar da Beleza", d: "Realização do procedimento com o máximo conforto e acompanhamento imediato." }
              ].map((step, i) => (
                <div key={i} className="flex flex-col md:flex-row gap-10 items-center text-center md:text-left">
                   <div className="text-[12vw] md:text-[8vw] font-bold serif text-premium-sand leading-none">{step.n}</div>
                   <div className="space-y-3">
                      <h3 className="text-3xl font-bold serif text-premium-espresso">{step.t}</h3>
                      <p className="text-lg text-premium-bronze font-light max-w-xl">{step.d}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Location - Editorial Map */}
      <section id="onde" className="py-32 px-8 bg-premium-champagne">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <div className="space-y-4">
              <span className="text-premium-bronze font-bold text-xs uppercase tracking-[0.4em]">Visite-nos</span>
              <h2 className="text-5xl md:text-7xl font-bold serif leading-tight">Um refúgio de<br/><span className="italic text-premium-gold/50">Autoestima</span></h2>
            </div>
            <div className="flex gap-8 items-start">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-lg border border-premium-bronze/10">
                <MapPin className="text-premium-bronze" size={24} />
              </div>
              <div className="space-y-2 pt-2">
                <p className="text-2xl font-bold serif text-premium-espresso">{EXPERT_DATA.address}</p>
                <p className="text-premium-bronze/60 font-light text-lg">Ambiente seguro, exclusivo e projetado para seu bem-estar.</p>
              </div>
            </div>
            <button 
              onClick={openGoogleMaps}
              className="w-full md:w-auto px-12 py-6 bg-premium-espresso text-premium-pearl rounded-full font-bold text-lg hover:bg-black transition-all flex items-center justify-center gap-4 shadow-xl"
            >
              Traçar Rota no Google Maps
              <ArrowUpRight size={20} />
            </button>
          </div>
          
          <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl group border-[12px] border-white">
             <iframe 
                src={mapUrl}
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale opacity-80 hover:opacity-100 transition-all duration-700"
                title="Mapa Dra. Gabrielly"
             ></iframe>
          </div>
        </div>
      </section>

      {/* Decision Section */}
      <section id="contato" className="py-48 px-8 bg-premium-sand/10 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-premium-bronze/20 to-transparent" />
        <div className="max-w-5xl mx-auto text-center space-y-16 relative z-10">
          <h2 className="text-[12vw] md:text-[8vw] font-bold serif leading-[0.8] text-premium-espresso tracking-tighter">
            Sua Essência,<br/>
            <span className="italic bronze-gradient">Nossa Arte.</span>
          </h2>
          <div className="flex flex-col items-center gap-8">
            <button 
              onClick={onContact}
              className="w-full sm:w-auto px-16 py-8 bg-premium-espresso text-premium-pearl rounded-full font-bold text-2xl shadow-3xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-6 group"
            >
              Reservar Minha Consulta
              <ArrowUpRight size={32} />
            </button>
            <p className="text-premium-bronze font-black text-[10px] uppercase tracking-[0.5em]">Atendimento exclusivo com hora marcada</p>
          </div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="py-32 px-8 bg-premium-pearl border-t border-premium-bronze/10 text-center">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="space-y-4">
             <h2 className="text-4xl font-bold serif italic text-premium-espresso">{EXPERT_DATA.name}</h2>
             <p className="text-[10px] text-premium-bronze font-black uppercase tracking-[0.6em]">Harmonização Facial de Performance</p>
          </div>
          
          <div className="flex justify-center gap-12">
             <a href={EXPERT_DATA.instagram} target="_blank" rel="noopener noreferrer" className="text-premium-bronze/30 hover:text-premium-espresso transition-all hover:scale-125"><Instagram size={32} /></a>
          </div>

          <div className="w-24 h-px bg-premium-bronze/10 mx-auto" />
          
          <div className="space-y-6">
            <p className="text-sm text-premium-bronze/60 font-medium tracking-wide">
              {EXPERT_DATA.address}
            </p>
            <div className="text-[9px] text-premium-bronze/30 font-black uppercase tracking-[0.4em] space-y-2">
              <p>© {new Date().getFullYear()} Dra. Gabrielly Figueiredo</p>
              <p>Feito para Mulheres que Valorizam Detalhes</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
