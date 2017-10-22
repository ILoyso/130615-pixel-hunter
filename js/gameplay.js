import {showScreen} from './utils';
import gameData from './blocks/games/game-data';
import gameScreen from './blocks/games/game';

const initialData = {
  time: 30,
  lives: 3,
  results: [`unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`]
};

export let userData = JSON.parse(JSON.stringify(initialData));

export const resetUserData = () => {
  userData = JSON.parse(JSON.stringify(initialData));
};

export const letsPlay = () => {
  resetUserData();
  showScreen(gameScreen(gameData, userData));
};

export const getResultAnswers = (data) => {
  let correctAnswers = 0;
  let wrongAnswers = 0;
  let fastAnswers = 0;
  let slowAnswers = 0;

  for (let i = 0; i < data.results.length; i++) {
    switch (data.results[i]) {
      case `correct`:
        correctAnswers++;
        break;
      case `wrong`:
        wrongAnswers++;
        break;
      case `fast`:
        fastAnswers++;
        break;
      case `slow`:
        slowAnswers++;
        break;
    }
  }
  return {
    correct: correctAnswers,
    wrong: wrongAnswers,
    fast: fastAnswers,
    slow: slowAnswers
  };
};

export const correctPoints = (data) => {
  return data.correct * 100;
};

export const fastPoints = (data) => {
  return data.fast * 50;
};

export const livePoints = (data) => {
  return data.lives * 50;
};

export const slowPoints = (data) => {
  return data.slow * -50;
};

export const totalPoints = (userResults, finalResults) => {
  return correctPoints(finalResults) + fastPoints(finalResults) + livePoints(userResults) + slowPoints(finalResults);
};

export let gameHistory = [];

export const addToHistory = (data) => {
  gameHistory.push(data);

  if (gameHistory.length > 2) {
    gameHistory.shift();
  }
  return gameHistory;
};

const result = {
  FAIL: `FAIL`,
  WIN: `Победа`
};

export const resultTitle = (data) => {
  if (data.wrong > 2) {
    return result.FAIL;
  } else {
    return result.WIN;
  }
};
