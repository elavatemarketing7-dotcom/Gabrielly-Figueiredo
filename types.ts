
export interface Question {
  id: number;
  text: string;
  options: string[];
}

export enum AppState {
  HOME_OR_QUIZ = 'HOME_OR_QUIZ',
  QUIZ = 'QUIZ',
  ANALYZING = 'ANALYZING',
  RESULT = 'RESULT',
  MAIN_SITE = 'MAIN_SITE'
}
