import {initialData, gameTypes, gameDataAnswerType} from '../blocks/games/game-data';

export let userData = JSON.parse(JSON.stringify(initialData));

export const resetUserData = () => {
  userData = JSON.parse(JSON.stringify(initialData));
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
    return (result1 === game.currentData.answers[0].type) && (result2 === game.currentData.answers[1].type);
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
    return result1 === game.currentData.answers[0].type;
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

  const correctdAnswer = game.currentData.answers.findIndex((el) => {
    return el.type === answerType;
  });

  return correctdAnswer;
};

const thirdGameCheck = (game, evt) => {
  const answers = game.element.querySelectorAll(`.game__option`);
  if (evt.target.classList.contains(`game__option`)) {
    evt.target.classList.add(`game__option--selected`);

    const selectedAnswer = Array.from(answers).findIndex((el) => {
      return el.classList.contains(`game__option--selected`);
    });
    return selectedAnswer === findCorrectAnswer(game);
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
