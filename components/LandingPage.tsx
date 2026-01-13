
import React from 'react';
import { EXPERT_DATA, IMAGES } from '../constants';
import { Instagram, MapPin, ChevronRight, Star, ArrowUpRight, ShieldCheck, Sparkles, Award, Quote, MessageCircle } from 'lucide-react';
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
    <div key={i} className="paper-card p-8 md:p-12 rounded-[3rem] flex flex-col items-start editorial-shadow">
      <div className="flex gap-1 mb-8 text-premium-gold">
        {[1, 2, 3, 4, 5].map(s => <Star key={s} size={14} fill="currentColor" />)}
      </div>
      <div className="relative mb-8 w-full">
        <div className="absolute -top-6 -left-6 text-premium-sand opacity-40 z-10 pointer-events-none">
          <Quote size={50} />
        </div>
        <img src={img} alt="Depoimento" className="w-full rounded-3xl grayscale-[0.3] hover:grayscale-0 transition-all duration-1000" />
      </div>
      <div className="space-y-1">
        <p className="text-[10px] font-black uppercase tracking-widest text-premium-espresso">Paciente Verificada</p>
        <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-premium-bronze/50">Experiência Real</p>
      </div>
    </div>
  ));

  return (
    <div className="relative bg-premium-champagne selection:bg-premium-espresso selection:text-premium-champagne overflow-hidden">
      <NavbarMarquee />

      {/* Editorial Hero - High End Focus */}
      <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden">
        {/* Background Expert Image - Large Scale */}
        <div className="absolute right-0 top-0 w-full md:w-[55%] h-full z-0 opacity-30 md:opacity-100">
          <div className="absolute inset-0 bg-gradient-to-r from-premium-champagne via-premium-champagne/40 to-transparent z-10" />
          <img src={IMAGES.hero} alt="Dra. Gabrielly Figueiredo" className="w-full h-full object-cover grayscale-[0.1] object-top" />
        </div>

        <div className="max-w-7xl mx-auto px-8 relative z-20 w-full">
          <div className="max-w-4xl space-y-12 animate-fade-up">
            <div className="inline-flex items-center gap-6">
              <span className="h-[1px] w-16 bg-premium-bronze/30" />
              <span className="text-[11px] uppercase font-black tracking-[0.7em] text-premium-bronze">Expertise & Estética</span>
            </div>
            
            <h1 className="text-[16vw] md:text-[10vw] font-bold serif leading-[0.75] tracking-tighter text-premium-espresso">
              A Arte da<br/>
              <span className="italic bronze-gradient">Naturalidade.</span>
            </h1>
            
            <div className="grid md:grid-cols-2 gap-12 items-end">
              <p className="text-xl md:text-2xl text-premium-bronze/80 font-light leading-relaxed text-balance border-l border-premium-bronze/20 pl-8">
                Unindo técnica cirúrgica à sensibilidade estética para revelar sua versão mais sofisticada. Sem exageros, apenas harmonia.
              </p>
              
              <div className="flex flex-col gap-8">
                <button 
                  onClick={onContact}
                  className="group relative px-12 py-8 bg-premium-espresso text-premium-pearl rounded-full font-bold text-xl shadow-[0_30px_60px_-15px_rgba(28,25,23,0.3)] hover:scale-105 transition-all flex items-center justify-center gap-5 overflow-hidden"
                >
                  <div className="absolute inset-0 gold-shimmer opacity-10" />
                  Agendar Primeira Consulta
                  <ChevronRight size={22} className="group-hover:translate-x-2 transition-transform" />
                </button>
                <div className="flex items-center justify-center md:justify-start gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-premium-bronze/40">
                   <ShieldCheck size={16} />
                   Atendimento 100% Personalizado
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section - Premium Cut */}
      <section className="py-40 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-24 items-center">
            <div className="w-full lg:w-3/5 relative group">
              <div className="absolute -inset-10 border border-premium-bronze/5 rounded-[5rem] group-hover:inset-0 transition-all duration-1000 -z-10" />
              <div className="relative aspect-video rounded-[3rem] overflow-hidden shadow-3xl bg-premium-espresso">
                <video src={IMAGES.video} className="w-full h-full object-cover" autoPlay muted loop playsInline />
                <div className="absolute inset-0 bg-premium-espresso/10 mix-blend-multiply" />
              </div>
            </div>
            <div className="w-full lg:w-2/5 space-y-10">
              <div className="space-y-6">
                <span className="text-premium-gold font-bold text-xs uppercase tracking-[0.6em]">Processo Criativo</span>
                <h2 className="text-6xl font-bold serif leading-[0.9] text-premium-espresso">Técnica &<br/><span className="italic text-premium-bronze">Sensibilidade</span></h2>
                <div className="w-20 h-1 bg-premium-gold/30" />
              </div>
              <p className="text-xl text-premium-bronze leading-relaxed font-light">
                Descubra como a beleza pode ser realçada com propósito. Cada traço é pensado para respeitar sua anatomia única e entregar resultados que você sentirá na alma.
              </p>
              <div className="pt-4">
                <button onClick={onContact} className="px-10 py-5 border border-premium-espresso text-premium-espresso rounded-full text-[10px] font-black uppercase tracking-[0.5em] hover:bg-premium-espresso hover:text-white transition-all flex items-center gap-4 group">
                  Saber mais sobre o método <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About The Expert - Professional Branding */}
      <section id="sobre" className="py-40 px-8 bg-premium-champagne relative">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-32 items-center">
          <div className="relative">
             <div className="aspect-[3/4] rounded-[3rem] overflow-hidden shadow-3xl relative z-10 border-[16px] border-white group">
                <img src={IMAGES.about} alt="Gabrielly Figueiredo" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute bottom-0 left-0 w-full p-10 bg-gradient-to-t from-premium-espresso/80 to-transparent text-white">
                  <p className="text-[10px] font-black uppercase tracking-[0.5em] mb-2">Fundadora</p>
                  <p className="text-4xl font-bold serif">Dra. Gabrielly</p>
                </div>
             </div>
             <div className="absolute -top-10 -left-10 w-40 h-40 border-l-[1px] border-t-[1px] border-premium-bronze/20 -z-0" />
          </div>
          <div className="space-y-16">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-8 h-[1px] bg-premium-bronze" />
                <span className="text-premium-bronze font-black text-[11px] uppercase tracking-[0.6em]">A Especialista</span>
              </div>
              <h2 className="text-7xl lg:text-9xl font-bold serif leading-[0.8] tracking-tighter">Gabrielly<br/><span className="italic bronze-gradient">Figueiredo</span></h2>
              <p className="text-2xl text-premium-espresso/60 leading-relaxed font-light italic">
                "Harmonizar não é mudar quem você é, mas iluminar o que você já possui de mais belo."
              </p>
            </div>
            
            <div className="grid gap-12">
              {[
                { t: "Diagnóstico Bio-Facial", d: "Análise profunda das proporções áureas e simetrias individuais." },
                { t: "Materiais Premium", d: "Utilizamos apenas as marcas líderes mundiais em preenchedores e bioestimuladores." },
                { t: "Conforto & Segurança", d: "Ambiente privativo com protocolos de dor minimizada para sua tranquilidade." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-10 group">
                  <div className="flex-shrink-0 w-16 h-16 bg-white rounded-3xl flex items-center justify-center text-premium-gold border border-premium-bronze/5 group-hover:bg-premium-espresso group-hover:text-white transition-all shadow-sm">
                    <Award size={24} />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-bold text-premium-espresso text-xl serif">{item.t}</h4>
                    <p className="text-base text-premium-bronze/70 leading-relaxed font-light">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Gallery - Visual Proof */}
      <section id="resultados" className="py-40 px-8 bg-white">
        <div className="max-w-7xl mx-auto space-y-24">
          <div className="flex flex-col md:flex-row justify-between items-end gap-12">
            <div className="space-y-6">
              <span className="text-premium-bronze font-black text-[11px] uppercase tracking-[0.5em]">Real Outcomes</span>
              <h2 className="text-7xl md:text-9xl font-bold serif leading-[0.8] tracking-tighter">Resultados<br/><span className="italic bronze-gradient">Genuínos</span></h2>
            </div>
            <div className="max-w-md text-right pb-4">
               <p className="text-lg text-premium-bronze/60 font-medium italic leading-relaxed">
                 A excelência está nos detalhes que ninguém percebe que foram feitos, mas todos notam a diferença.
               </p>
            </div>
          </div>
          
          <Gallery items={IMAGES.results} aspectRatio="aspect-[4/5]" itemWidth="w-[85vw] md:w-[420px]" />
          
          <div className="flex justify-center pt-8">
             <div className="inline-flex items-center gap-4 px-10 py-4 bg-premium-champagne rounded-full border border-premium-bronze/10 text-[11px] text-premium-bronze font-black uppercase tracking-[0.4em] shadow-sm">
               <ShieldCheck size={14} /> Protocolo Ético • Imagens Sem Filtros
             </div>
          </div>
        </div>
      </section>

      {/* Aesthetic Moments - Hearts Section */}
      <section id="harmonizacao" className="py-40 px-8 bg-premium-champagne relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent" />
        <div className="max-w-7xl mx-auto text-center mb-24 space-y-8">
           <div className="flex justify-center mb-6">
              <Sparkles className="text-premium-gold animate-pulse-soft" size={32} />
           </div>
           <h2 className="text-6xl md:text-8xl font-bold serif text-premium-espresso leading-[0.9]">Harmonização de <span className="italic bronze-gradient">Propósito</span></h2>
           <p className="text-premium-bronze/60 font-light text-2xl max-w-3xl mx-auto italic leading-relaxed px-4">
              Onde a técnica rigorosa encontra a arte da estética refinada.
           </p>
        </div>
        
        <div className="max-w-full">
          <Gallery 
            items={IMAGES.hearts} 
            itemWidth="w-[80vw] md:w-[400px]" 
            aspectRatio="aspect-square"
          />
        </div>
      </section>

      {/* Experience Gallery - Social Proof */}
      <section id="depoimentos" className="py-40 px-8 bg-premium-espresso text-premium-pearl relative overflow-hidden">
        {/* Background Texture */}
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/paper.png')]" />
        
        <div className="max-w-7xl mx-auto relative z-10">
           <div className="flex flex-col md:flex-row justify-between items-start mb-32 gap-16">
             <div className="max-w-2xl space-y-8">
                <span className="text-premium-gold font-bold text-xs uppercase tracking-[0.7em]">Privileged Feedback</span>
                <h2 className="text-7xl md:text-9xl font-bold serif italic leading-[0.8] tracking-tighter">O que elas<br/>sentiram.</h2>
             </div>
             <a href={EXPERT_DATA.instagram} target="_blank" rel="noopener noreferrer" className="group px-12 py-6 bg-white/5 border border-white/10 rounded-full text-xs font-black uppercase tracking-[0.4em] hover:bg-white/10 transition-all flex items-center gap-5">
                Ver no Instagram <Instagram size={20} className="group-hover:rotate-12 transition-transform" />
             </a>
           </div>

           <Gallery 
             items={testimonialCards} 
             type="custom" 
             itemWidth="w-[90vw] md:w-[550px]" 
             aspectRatio="aspect-auto"
           />
        </div>
      </section>

      {/* Process Section - High End Journey */}
      <section id="processo" className="py-40 px-8 bg-white">
        <div className="max-w-5xl mx-auto space-y-32">
           <div className="text-center space-y-8">
             <span className="text-premium-bronze font-black text-[11px] uppercase tracking-[0.6em]">The Experience</span>
             <h2 className="text-6xl md:text-8xl font-bold serif tracking-tighter">Seu Percurso VIP</h2>
             <div className="w-24 h-1.5 bg-premium-gold/30 mx-auto rounded-full" />
           </div>
           
           <div className="grid gap-24">
              {[
                { n: "01", nLabel: "01", t: "Acolhimento Digital", d: "Iniciamos sua jornada com uma conversa privativa via WhatsApp para alinhar suas expectativas." },
                { n: "02", nLabel: "02", t: "Consultoria Face-to-Face", d: "Um encontro exclusivo onde mapeamos suas proporções e definimos o plano mestre." },
                { n: "03", nLabel: "03", t: "O Despertar da Beleza", d: "O momento da transformação, conduzido com precisão e cuidado pós-luxo total." }
              ].map((step, i) => (
                <div key={i} className="flex flex-col md:flex-row gap-16 items-start text-left group">
                   <div className="text-[15vw] md:text-[10vw] font-bold serif text-premium-sand/40 leading-none transition-colors group-hover:text-premium-bronze/20">{step.nLabel}</div>
                   <div className="space-y-5 pt-4">
                      <h3 className="text-4xl font-bold serif text-premium-espresso">{step.t}</h3>
                      <p className="text-xl text-premium-bronze font-light max-w-2xl leading-relaxed">{step.d}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Location - Luxury Map Design */}
      <section id="onde" className="py-40 px-8 bg-premium-champagne">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-32 items-center">
          <div className="space-y-16">
            <div className="space-y-6">
              <span className="text-premium-bronze font-bold text-xs uppercase tracking-[0.5em]">L'Atelier</span>
              <h2 className="text-7xl md:text-8xl font-bold serif leading-[0.8] tracking-tighter">Onde nos<br/><span className="italic text-premium-gold/50">Encontrar</span></h2>
            </div>
            <div className="flex gap-10 items-start">
              <div className="w-20 h-20 bg-white rounded-[2rem] flex items-center justify-center flex-shrink-0 shadow-xl border border-premium-bronze/5">
                <MapPin className="text-premium-bronze" size={28} />
              </div>
              <div className="space-y-4 pt-3">
                <p className="text-3xl font-bold serif text-premium-espresso leading-tight">{EXPERT_DATA.address}</p>
                <p className="text-xl text-premium-bronze/60 font-light max-w-md">Um ambiente projetado para ser seu refúgio de autocuidado e confiança.</p>
              </div>
            </div>
            <button 
              onClick={openGoogleMaps}
              className="w-full md:w-auto px-16 py-8 bg-premium-espresso text-premium-pearl rounded-full font-bold text-xl hover:bg-black hover:scale-105 transition-all flex items-center justify-center gap-6 shadow-2xl"
            >
              Traçar Rota no Google Maps
              <ArrowUpRight size={24} />
            </button>
          </div>
          
          <div className="relative aspect-square rounded-[4rem] overflow-hidden shadow-3xl group border-[20px] border-white">
             <iframe 
                src={mapUrl}
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale-[0.8] opacity-90 hover:opacity-100 hover:grayscale-0 transition-all duration-1000"
                title="Localização Dra. Gabrielly"
             ></iframe>
          </div>
        </div>
      </section>

      {/* Ultimate CTA - High Conversion Decision */}
      <section id="contato" className="py-60 px-8 bg-premium-sand/5 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-premium-bronze/30 to-transparent" />
        <div className="max-w-6xl mx-auto text-center space-y-20 relative z-10">
          <div className="space-y-4">
             <span className="text-premium-gold font-bold text-xs uppercase tracking-[0.8em]">Final Invitation</span>
             <h2 className="text-[14vw] md:text-[10vw] font-bold serif leading-[0.7] text-premium-espresso tracking-tighter">
               Sua Essência,<br/>
               <span className="italic bronze-gradient">Nossa Arte.</span>
             </h2>
          </div>
          <div className="flex flex-col items-center gap-12">
            <button 
              onClick={onContact}
              className="w-full sm:w-auto px-20 py-10 bg-premium-espresso text-premium-pearl rounded-full font-bold text-2xl shadow-[0_40px_80px_-20px_rgba(28,25,23,0.4)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-8 group relative overflow-hidden"
            >
              <div className="absolute inset-0 gold-shimmer opacity-20" />
              <span className="relative z-10">Agendar Agora no WhatsApp</span>
              <MessageCircle size={32} className="relative z-10 group-hover:rotate-12 transition-transform" />
            </button>
            <div className="space-y-2">
              <p className="text-premium-bronze font-black text-[12px] uppercase tracking-[0.6em]">Consultas com hora marcada</p>
              <p className="text-premium-bronze/40 text-[10px] uppercase font-bold tracking-widest italic">Vagas limitadas para este mês</p>
            </div>
          </div>
        </div>
      </section>

      {/* Minimal Signature Footer */}
      <footer className="py-40 px-8 bg-white border-t border-premium-bronze/5 text-center">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="space-y-6">
             <h2 className="text-6xl font-bold serif italic text-premium-espresso tracking-tighter">{EXPERT_DATA.name}</h2>
             <p className="text-[12px] text-premium-bronze font-black uppercase tracking-[0.8em]">Fine Art Faciale • Harmonização</p>
          </div>
          
          <div className="flex justify-center gap-16">
             <a href={EXPERT_DATA.instagram} target="_blank" rel="noopener noreferrer" className="text-premium-bronze/30 hover:text-premium-espresso transition-all hover:scale-125 hover:rotate-6"><Instagram size={40} /></a>
          </div>

          <div className="w-32 h-[1px] bg-premium-bronze/10 mx-auto" />
          
          <div className="space-y-8">
            <p className="text-lg text-premium-bronze/60 font-medium tracking-wide max-w-md mx-auto">
              {EXPERT_DATA.address}
            </p>
            <div className="text-[10px] text-premium-bronze/40 font-black uppercase tracking-[0.5em] space-y-3">
              <p>© {new Date().getFullYear()} Gabrielly Figueiredo</p>
              <p className="italic">Projetado para quem valoriza a sofisticação da beleza real.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
