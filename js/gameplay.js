import moduleGreeting from './blocks/greeting/greeting';
import moduleFirstGame from './blocks/games/game-1';
import moduleSecondGame from './blocks/games/game-2';
import moduleThirdGame from './blocks/games/game-3';
import {showScreen} from './utils';
import gameData from './blocks/games/gameData';
import moduleStats from './blocks/stats/stats';

const initialData = {
  time: 30,
  lives: 3,
  results: [`unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`]
};

export let userData = JSON.parse(JSON.stringify(initialData));
let gameNumber = 0;

export const resetUserData = () => {
  userData = JSON.parse(JSON.stringify(initialData));
};

export const resetGame = () => {
  gameNumber = 0;
};

export const changeStats = (result) => {
  if (result) {
    userData.results[gameNumber - 1] = `correct`;
  } else {
    userData.results[gameNumber - 1] = `wrong`;
  }
};

export const changeLives = () => {
  userData.lives--;
};

export const goBack = () => {
  resetUserData();
  resetGame();
  showScreen(moduleGreeting);
};

export const letsPlay = () => {
  if ((gameNumber === gameData.length) || (userData.lives < 1)) {
    moduleStats(userData);
    return;
  }

  switch (gameData[gameNumber].type) {
    case `game1`:
      moduleFirstGame(gameData[gameNumber], userData);
      gameNumber++;
      break;
    case `game2`:
      moduleSecondGame(gameData[gameNumber], userData);
      gameNumber++;
      break;
    case `game3`:
      moduleThirdGame(gameData[gameNumber], userData);
      gameNumber++;
      break;
  }
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
