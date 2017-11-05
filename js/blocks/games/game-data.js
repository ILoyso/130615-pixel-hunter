export const initialData = {
  time: 30,
  lives: 3,
  results: [`unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`]
};

export const gameTypes = {
  GAME_1: `two-of-two`,
  GAME_2: `tinder-like`,
  GAME_3: `one-of-three`
};

export const answerTypes = {
  CORRECT: `correct`,
  WRONG: `wrong`,
  FAST: `fast`,
  SLOW: `slow`
};

export const answerTimeLimits = {
  SLOW: 10,
  FAST: 20
};

export const gameStatus = {
  PLAY: `play`,
  END: `end`
};

export const gameDataAnswerType = {
  PAINT: `paint`,
  PHOTO: `photo`
};

export const TIMER_INTERVAL = 1000;
export const TIME_LIMIT = 30;
export const TIME_WARNING_START = 5;
export const TIME_WARNING_INTERVAL = 500;
