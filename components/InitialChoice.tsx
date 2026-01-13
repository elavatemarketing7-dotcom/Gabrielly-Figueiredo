
import React from 'react';
import { EXPERT_DATA, IMAGES } from '../constants';
import { Sparkles, ArrowRight, ShieldCheck, MessageCircle } from 'lucide-react';

interface InitialChoiceProps {
  onSelectQuiz: () => void;
  onSelectDirect: () => void;
}

const InitialChoice: React.FC<InitialChoiceProps> = ({ onSelectQuiz, onSelectDirect }) => {
  return (
    <div className="fixed inset-0 z-[100] bg-premium-champagne flex items-center justify-center p-6 overflow-hidden">
      {/* Editorial Background Elements */}
      <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-premium-bronze/5 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-premium-gold/5 rounded-full blur-[120px] animate-float" style={{ animationDelay: '-4s' }} />
      
      <div className="w-full max-w-sm space-y-8 relative animate-fade-up">
        {/* Hero Entry Identity */}
        <div className="text-center space-y-4">
          <div className="flex justify-center mb-4">
            <div className="relative">
              <div className="absolute inset-0 bg-premium-gold/20 blur-xl rounded-full scale-125 animate-pulse-soft" />
              <div className="w-24 h-24 rounded-full border-[3px] border-white overflow-hidden shadow-2xl relative z-10">
                <img src={IMAGES.hero} alt={EXPERT_DATA.name} className="w-full h-full object-cover scale-110" />
              </div>
            </div>
          </div>
          <div className="space-y-1">
            <span className="text-premium-bronze font-black text-[9px] uppercase tracking-[0.6em] block opacity-80">Private invitation</span>
            <h1 className="text-3xl font-bold serif text-premium-espresso tracking-tight">{EXPERT_DATA.name}</h1>
            <p className="text-premium-bronze/60 font-light italic text-sm leading-relaxed">Harmonização Facial de Alta Performance</p>
          </div>
        </div>
        
        {/* Action Group */}
        <div className="space-y-3">
          {/* Main CTA: Diagnosis */}
          <button 
            onClick={onSelectQuiz}
            className="w-full group relative py-5 bg-premium-espresso text-premium-pearl rounded-full font-bold text-lg shadow-[0_20px_40px_-10px_rgba(28,25,23,0.3)] hover:shadow-[0_25px_50px_-12px_rgba(28,25,23,0.4)] hover:-translate-y-1 active:scale-95 transition-all flex flex-col items-center gap-0 overflow-hidden"
          >
            <div className="absolute inset-0 gold-shimmer opacity-20" />
            <div className="flex items-center gap-2 relative z-10">
              <Sparkles size={16} className="text-premium-gold" />
              Diagnóstico Facial VIP
            </div>
            <span className="text-[7px] uppercase tracking-widest opacity-40 relative z-10">Descubra seu perfil ideal em 1 min</span>
          </button>
          
          {/* Secondary: Quick Contact */}
          <a 
            href={EXPERT_DATA.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 bg-white text-green-600 rounded-full font-bold border border-green-50/50 transition-all flex items-center justify-center gap-3 shadow-sm text-base hover:bg-green-50/30"
          >
            <MessageCircle size={18} fill="currentColor" className="opacity-10" />
            WhatsApp Direto
          </a>

          {/* Tertiary: Minimal Site Entry */}
          <button 
            onClick={onSelectDirect}
            className="w-full py-4 text-premium-bronze/40 font-black text-[9px] uppercase tracking-[0.4em] flex items-center justify-center gap-2 hover:text-premium-espresso transition-colors group"
          >
            Acessar Site Principal
            <ArrowRight size={10} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Confidence Footer */}
        <div className="pt-4 flex flex-col items-center gap-3 border-t border-premium-bronze/5">
          <div className="flex items-center gap-2 text-[8px] text-premium-bronze/30 font-black uppercase tracking-[0.4em]">
             <ShieldCheck size={12} />
             Protocolo de Atendimento Exclusivo
          </div>
        </div>
      </div>
    </div>
  );
};

export default InitialChoice;
