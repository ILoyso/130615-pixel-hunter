import {initialData, answerTypes, gameTypes, gameDataAnswerType} from '../blocks/games/game-data';

export let userData = JSON.parse(JSON.stringify(initialData));

export const resetUserData = () => {
  userData = JSON.parse(JSON.stringify(initialData));
};

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

export let gameHistory = [];

export const addToHistory = (data) => {
  gameHistory.push(data);
  return gameHistory;
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
  if (data.wrong > 2) {
    return `fail`;
  } else {
    return `win`;
  }
};

export const resultTitle = (data) => {
  if (data.wrong > 2) {
    return finalResult.FAIL;
  } else {
    return finalResult.WIN;
  }
};

export const getTimer = (time) => {
  if (time < 0) {
    return `time is over`;
  }
  if (typeof time !== `number`) {
    return 0;
  }
  return {
    value: time,
    tick() {
      return getTimer(time - 1);
    },
    reset() {
      return getTimer(0);
    }
  };
};

export const noAnswer = `no answer`;
const firstGameCheck = (game) => {
  const question1 = game.element.querySelectorAll(`input[name=question1]`);
  const question2 = game.element.querySelectorAll(`input[name=question2]`);
  let result1 = false;
  let result2 = false;
  for (const question of question1) {
    if (question.checked) {
      result1 = question.getAttribute(`value`);
    }
  }
  for (const question of question2) {
    if (question.checked) {
      result2 = question.getAttribute(`value`);
    }
  }
  if (result1 && result2) {
    if ((result1 === game.currentData.answers[0].type) && (result2 === game.currentData.answers[1].type)) {
      return true;
    } else {
      return false;
    }
  }
  return noAnswer;
};

const secondGameCheck = (game) => {
  const question1 = game.element.querySelectorAll(`input[name=question1]`);
  let result1 = false;
  for (const question of question1) {
    if (question.checked) {
      result1 = question.getAttribute(`value`);
    }
  }
  if (result1) {
    if (result1 === game.currentData.answers[0].type) {
      return true;
    } else {
      return false;
    }
  }
  return noAnswer;
};

const findCorrectAnswer = (game) => {
  let answerType;
  let counter = 0;

  game.currentData.answers.forEach((it) => {
    if (it.type === gameDataAnswerType.PAINT) {
      counter++;
    }
  });

  if (counter > (game.currentData.answers.length / 2)) {
    answerType = gameDataAnswerType.PHOTO;
  } else {
    answerType = gameDataAnswerType.PAINT;
  }

  for (let i = 0; i < game.currentData.answers.length; i++) {
    if (game.currentData.answers[i].type === answerType) {
      return i;
    }
  }
  return false;
};

const thirdGameCheck = (game, evt) => {
  const answers = game.element.querySelectorAll(`.game__option`);
  if (evt.target.classList.contains(`game__option`)) {
    evt.target.classList.add(`game__option--selected`);

    for (let i = 0; i < answers.length; i++) {
      if (answers[i].classList.contains(`game__option--selected`)) {
        if (i === findCorrectAnswer(game)) {
          return true;
        } else {
          return false;
        }
      }
    }
  }
  return noAnswer;
};

export const gameCheck = (game, evt) => {
  let correctAnswer;
  switch (game.currentData.type) {
    case gameTypes.GAME_1:
      correctAnswer = firstGameCheck(game);
      break;
    case gameTypes.GAME_2:
      correctAnswer = secondGameCheck(game);
      break;
    case gameTypes.GAME_3:
      correctAnswer = thirdGameCheck(game, evt);
      break;
  }
  return correctAnswer;
};
