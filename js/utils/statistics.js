import {answerTypes} from '../blocks/games/game-data';

export const getResultAnswers = (data) => {
  let correctAnswers = 0;
  let wrongAnswers = 0;
  let fastAnswers = 0;
  let slowAnswers = 0;

  for (const result of data.results) {
    switch (result) {
      case answerTypes.CORRECT:
        correctAnswers++;
        break;
      case answerTypes.WRONG:
        wrongAnswers++;
        break;
      case answerTypes.FAST:
        fastAnswers++;
        break;
      case answerTypes.SLOW:
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
  return data.correct * 100 + data.fast * 100 + data.slow * 100;
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

export const finalGameResults = {
  FAIL: `fail`,
  WIN: `win`
};

const finalResult = {
  FAIL: `FAIL`,
  WIN: `Победа`
};

export const getGameResult = (data) => {
  if (data.wrong > 3) {
    return `fail`;
  } else {
    return `win`;
  }
};

export const getResultTitle = (data) => {
  if (data.wrong > 3) {
    return finalResult.FAIL;
  } else {
    return finalResult.WIN;
  }
};
