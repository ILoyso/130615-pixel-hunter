import GameView from './game-view';
import moduleGreeting from '../greeting/greeting';
import moduleStats from '../stats/stats';
import {showScreen} from '../../utils';

const gameTypes = {
  GAME_1: `game1`,
  GAME_2: `game2`,
  GAME_3: `game3`
};

const firstGameCheck = (game) => {
  const question1 = game.element.querySelectorAll(`input[name=question1]`);
  const question2 = game.element.querySelectorAll(`input[name=question2]`);
  let result1 = false;
  let result2 = false;
  for (let i = 0; i < question1.length; i++) {
    if (question1[i].checked) {
      result1 = question1[i].getAttribute(`value`);
    }
    if (question2[i].checked) {
      result2 = question2[i].getAttribute(`value`);
    }
  }
  if (result1 && result2 && true) {
    if ((result1 === game.currentData.answers[0].imgType) && (result2 === game.currentData.answers[1].imgType)) {
      game.nextLevel(true);
    } else {
      game.nextLevel(false);
    }
  }
};

const secondGameCheck = (game) => {
  const question1 = game.element.querySelectorAll(`input[name=question1]`);
  let result1 = false;
  for (let i = 0; i < question1.length; i++) {
    if (question1[i].checked) {
      result1 = question1[i].getAttribute(`value`);
    }
  }
  if (result1 && true) {
    if (result1 === game.currentData.answers[0].imgType) {
      game.nextLevel(true);
    } else {
      game.nextLevel(false);
    }
  }
};

const findCorrectAnswer = (game) => {
  for (let i = 0; i < game.currentData.answers.length; i++) {
    if (game.currentData.answers[i].imgType === `paint`) {
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
          game.nextLevel(true);
        } else {
          game.nextLevel(false);
        }
      }
    }
  }
};

const gameCheck = (game, evt) => {
  switch (game.currentData.type) {
    case gameTypes.GAME_1:
      firstGameCheck(game);

      break;
    case gameTypes.GAME_2:
      secondGameCheck(game);

      break;
    case gameTypes.GAME_3:
      thirdGameCheck(game, evt);

      break;
  }
};

export default (data, state, gameNumber) => {
  const gameScreen = new GameView(data, state, gameNumber);

  gameScreen.gameEnd = () => {
    showScreen(moduleStats(gameScreen.state));
  };

  gameScreen.onBackClick = () => {
    showScreen(moduleGreeting);
  };

  gameScreen.onFormClick = (evt) => {
    gameCheck(gameScreen, evt);
  };

  return gameScreen;
};
