
import React, { useState, useEffect } from 'react';
import { AppState } from '../types';
import { QUIZ_QUESTIONS, EXPERT_DATA, IMAGES } from '../constants';
import { Send, MessageCircle, X, ChevronRight, UserCheck, MessageSquare } from 'lucide-react';

interface QuizOverlayProps {
  step: AppState;
  onFinish: (answers: string[]) => void;
  onShowResult: () => void;
  onClose: () => void;
  answers: string[];
}

const QuizOverlay: React.FC<QuizOverlayProps> = ({ step, onFinish, onShowResult, onClose, answers }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (step === AppState.ANALYZING) {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(onShowResult, 1000);
            return 100;
          }
          return prev + 1;
        });
      }, 35);
      return () => clearInterval(interval);
    }
  }, [step, onShowResult]);

  const handleAnswer = (option: string) => {
    const newAnswers = [...selectedAnswers, option];
    if (currentQuestion < QUIZ_QUESTIONS.length - 1) {
      setSelectedAnswers(newAnswers);
      setCurrentQuestion(prev => prev + 1);
    } else {
      onFinish(newAnswers);
    }
  };

  const progressPercentage = ((currentQuestion + 1) / QUIZ_QUESTIONS.length) * 100;

  if (step === AppState.QUIZ) {
    return (
      <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-premium-champagne/95 backdrop-blur-md overflow-y-auto">
        <div className="w-full max-w-md flex flex-col min-h-0 animate-fade-up">
          
          {/* Header Compacto com Foto Flutuante e Botão WhatsApp */}
          <div className="flex flex-col gap-4 mb-6">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden border-4 border-white shadow-xl rotate-3">
                    <img src={IMAGES.hero} alt={EXPERT_DATA.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-2 border-white rounded-full animate-pulse" />
                </div>
                <div>
                  <h2 className="text-premium-espresso font-bold serif text-lg leading-tight">{EXPERT_DATA.name}</h2>
                  <span className="text-[9px] uppercase tracking-widest text-premium-bronze font-black">Harmonização Facial</span>
                </div>
              </div>
              <button onClick={onClose} className="p-2 bg-white rounded-full border border-premium-bronze/10 text-premium-espresso/40 shadow-sm">
                <X size={18} />
              </button>
            </div>

            {/* Botão de WhatsApp Direto no Começo */}
            <a 
              href={EXPERT_DATA.whatsapp} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 px-4 bg-white border border-green-100 rounded-2xl shadow-sm group hover:border-green-300 transition-all"
            >
              <MessageSquare size={14} className="text-green-500" />
              <span className="text-[10px] font-bold text-premium-espresso uppercase tracking-wider">Prefiro falar agora no WhatsApp</span>
              <ChevronRight size={12} className="text-premium-bronze/40 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="flex-grow flex flex-col justify-center space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between items-end">
                <span className="text-premium-bronze font-black text-[9px] uppercase tracking-[0.4em]">Diagnóstico {currentQuestion + 1}/{QUIZ_QUESTIONS.length}</span>
              </div>
              <h3 className="text-3xl font-bold text-premium-espresso serif leading-tight">
                {QUIZ_QUESTIONS[currentQuestion].text}
              </h3>
            </div>
            
            <div className="grid gap-3">
              {QUIZ_QUESTIONS[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  className="w-full text-left p-5 rounded-2xl border border-premium-bronze/10 bg-white hover:border-premium-bronze/40 hover:shadow-lg transition-all active:scale-[0.98] group"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-premium-espresso text-base">{option}</span>
                    <ChevronRight size={16} className="text-premium-bronze opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 space-y-4">
            <div className="w-full bg-premium-sand h-1.5 rounded-full overflow-hidden">
               <div className="h-full bg-premium-espresso transition-all duration-700 ease-out" style={{ width: `${progressPercentage}%` }} />
            </div>
            <p className="text-center text-premium-bronze/30 text-[8px] font-black uppercase tracking-[0.4em]">Sua avaliação personalizada está sendo construída</p>
          </div>
        </div>
      </div>
    );
  }

  if (step === AppState.ANALYZING) {
    return (
      <div className="fixed inset-0 z-[120] bg-premium-champagne flex flex-col items-center justify-center p-8 text-center">
        <div className="relative mb-8">
          <div className="w-32 h-32 rounded-full border-2 border-premium-bronze/10 flex items-center justify-center p-4 relative">
             <div className="absolute inset-0 border-4 border-premium-bronze border-t-transparent rounded-full animate-spin" />
             <div className="w-full h-full rounded-full overflow-hidden">
                <img src={IMAGES.hero} alt={EXPERT_DATA.name} className="w-full h-full object-cover" />
             </div>
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="text-3xl font-bold serif text-premium-espresso">Analisando seu<br/><span className="italic bronze-gradient">Perfil Estético</span></h2>
          <p className="text-premium-bronze font-black uppercase tracking-[0.4em] text-[10px]">Aguarde um instante...</p>
        </div>
        <div className="mt-12 w-full max-w-[200px] space-y-2">
           <div className="flex justify-between text-[8px] font-black uppercase tracking-widest text-premium-espresso">
              <span>Status</span>
              <span>{Math.floor(progress)}%</span>
           </div>
           <div className="bg-premium-sand h-1 rounded-full overflow-hidden">
             <div className="h-full bg-premium-espresso transition-all duration-300" style={{ width: `${progress}%` }} />
           </div>
        </div>
      </div>
    );
  }

  if (step === AppState.RESULT) {
    const whatsappMessage = encodeURIComponent(`Olá Dra Gabrielly! Realizei o diagnóstico no site.\n\nPreferências:\n${QUIZ_QUESTIONS.map((q, i) => `• ${q.text}: ${answers[i]}`).join('\n')}`);
    const whatsappLink = `https://wa.me/5569992974949?text=${whatsappMessage}`;

    return (
      <div className="fixed inset-0 z-[130] bg-premium-champagne flex items-center justify-center overflow-y-auto p-4">
        <div className="w-full max-w-md bg-white rounded-[3rem] p-6 shadow-2xl border border-premium-bronze/10 animate-fade-up flex flex-col items-center">
          
          <div className="text-center mb-4 space-y-2">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-premium-sand text-premium-espresso text-[8px] font-black tracking-[0.2em] uppercase">
               <UserCheck size={12} />
               Perfil Compatível. Você é a Paciente ideal.
             </div>
             <h1 className="text-3xl font-bold serif leading-tight text-premium-espresso">Conexão Confirmada</h1>
             <p className="text-premium-bronze/80 font-light text-sm italic leading-tight px-4">
               Com base nas suas respostas, o Método da Dra. Gabrielly consegue entregar exatamente a naturalidade e segurança que você procura.
             </p>
          </div>

          <div className="relative mb-6 group flex justify-center w-full max-w-[200px]">
             <div className="relative rounded-2xl overflow-hidden shadow-lg border-4 border-premium-champagne">
                <div className="absolute inset-0 bg-gradient-to-t from-premium-espresso/30 via-transparent to-transparent z-10" />
                <img src={IMAGES.hero} alt={EXPERT_DATA.name} className="w-full aspect-[4/5] object-cover" />
             </div>
          </div>

          <div className="flex flex-col gap-2 w-full">
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 bg-premium-espresso text-premium-pearl rounded-full font-bold text-base shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
              <Send size={16} />
              1 - Enviar minha avaliação a DRA
            </a>

            <a 
              href={EXPERT_DATA.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 bg-premium-sand text-premium-espresso rounded-full font-bold text-sm border border-premium-bronze/10 flex items-center justify-center gap-2 hover:bg-premium-sand/80 transition-all"
            >
              <MessageCircle size={16} className="text-premium-bronze" />
              2 - CHAMAR NO WHATSAPP SEM COMPROMISSO
            </a>

            <button 
              onClick={onClose}
              className="w-full py-3 text-premium-bronze/50 font-black text-[9px] uppercase tracking-[0.2em] hover:text-premium-espresso transition-colors"
            >
              3 - NÃO ENVIAR E CONTINUAR NO SITE
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default QuizOverlay;
