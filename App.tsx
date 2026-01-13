
import React, { useState, useEffect } from 'react';
import { AppState } from './types';
import { EXPERT_DATA, IMAGES } from './constants';
import LandingPage from './components/LandingPage';
import QuizOverlay from './components/QuizOverlay';
import InitialChoice from './components/InitialChoice';

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<AppState>(AppState.HOME_OR_QUIZ);
  const [quizAnswers, setQuizAnswers] = useState<string[]>([]);

  const handleStartQuiz = () => setCurrentStep(AppState.QUIZ);
  const handleGoDirectly = () => setCurrentStep(AppState.MAIN_SITE);

  const finishQuiz = (answers: string[]) => {
    setQuizAnswers(answers);
    setCurrentStep(AppState.ANALYZING);
  };

  const handleBackToSite = () => {
    setCurrentStep(AppState.MAIN_SITE);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWhatsAppContact = () => {
    window.open(EXPERT_DATA.whatsapp, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Background Main Site (Visible through overlay sometimes) */}
      <div className={`${currentStep === AppState.MAIN_SITE ? 'block' : 'hidden md:block blur-sm brightness-50 pointer-events-none'}`}>
        <LandingPage onContact={handleWhatsAppContact} />
      </div>

      {currentStep === AppState.HOME_OR_QUIZ && (
        <InitialChoice onSelectQuiz={handleStartQuiz} onSelectDirect={handleGoDirectly} />
      )}

      {(currentStep === AppState.QUIZ || currentStep === AppState.ANALYZING || currentStep === AppState.RESULT) && (
        <QuizOverlay 
          step={currentStep} 
          onFinish={finishQuiz} 
          onShowResult={() => setCurrentStep(AppState.RESULT)}
          onClose={handleBackToSite}
          answers={quizAnswers}
        />
      )}
    </div>
  );
};

export default App;
