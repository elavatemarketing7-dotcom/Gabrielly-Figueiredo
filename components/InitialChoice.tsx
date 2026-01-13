
import React from 'react';
import { EXPERT_DATA, IMAGES } from '../constants';
import { Sparkles, ArrowRight, ShieldCheck, MessageCircle } from 'lucide-react';

interface InitialChoiceProps {
  onSelectQuiz: () => void;
  onSelectDirect: () => void;
}

const InitialChoice: React.FC<InitialChoiceProps> = ({ onSelectQuiz, onSelectDirect }) => {
  return (
    <div className="fixed inset-0 z-[100] bg-premium-champagne flex items-center justify-center p-4 overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-premium-bronze/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-premium-gold/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
      
      <div className="w-full max-w-sm space-y-5 relative animate-fade-up">
        <div className="text-center space-y-3">
          <div className="flex justify-center mb-2">
            <div className="w-20 h-20 rounded-full border-4 border-white overflow-hidden shadow-lg">
              <img src={IMAGES.hero} alt={EXPERT_DATA.name} className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="space-y-0.5">
            <span className="text-premium-bronze font-black text-[8px] uppercase tracking-[0.5em] block">Premium Invitation</span>
            <h1 className="text-2xl font-bold serif text-premium-espresso tracking-tight">{EXPERT_DATA.name}</h1>
            <p className="text-premium-bronze/60 font-light italic text-xs leading-none">Estética Facial de Alta Performance</p>
          </div>
        </div>
        
        <div className="space-y-2">
          {/* Botão Principal: Quiz */}
          <button 
            onClick={onSelectQuiz}
            className="w-full group relative py-4 bg-premium-espresso text-premium-pearl rounded-full font-bold text-base shadow-xl hover:scale-105 active:scale-95 transition-all flex flex-col items-center gap-0 overflow-hidden"
          >
            <div className="flex items-center gap-2">
              <Sparkles size={14} className="text-premium-gold" />
              Diagnóstico Facial VIP
            </div>
            <span className="text-[7px] uppercase tracking-widest opacity-40">Descubra seu perfil ideal</span>
          </button>
          
          {/* Botão Novo: WhatsApp Direto */}
          <a 
            href={EXPERT_DATA.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 bg-white text-green-600 rounded-full font-bold border border-green-100 transition-all flex items-center justify-center gap-2 shadow-sm text-sm hover:bg-green-50"
          >
            <MessageCircle size={16} fill="currentColor" className="opacity-20" />
            Falar agora no WhatsApp
          </a>

          {/* Botão Secundário: Site */}
          <button 
            onClick={onSelectDirect}
            className="w-full py-3 text-premium-bronze/50 font-black text-[9px] uppercase tracking-[0.3em] flex items-center justify-center gap-2 hover:text-premium-espresso transition-colors"
          >
            Acessar Site Direto
            <ArrowRight size={10} />
          </button>
        </div>

        <div className="pt-1 flex flex-col items-center gap-2">
          <div className="flex items-center gap-1.5 text-[7px] text-premium-bronze/30 font-black uppercase tracking-[0.3em]">
             <ShieldCheck size={10} />
             Ambiente Seguro e Privativo
          </div>
        </div>
      </div>
    </div>
  );
};

export default InitialChoice;
