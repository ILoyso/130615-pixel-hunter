import GameOneView from './level-1-view';
import * as game from '../../../gameplay';

export default (data, state) => {

  const gameOneScreen = new GameOneView(data, state);
  const question1 = gameOneScreen.element.querySelectorAll(`input[name=question1]`);
  const question2 = gameOneScreen.element.querySelectorAll(`input[name=question2]`);

  gameOneScreen.onFormClick = () => {
    let result1 = false;
    let result2 = false;

    for (let i = 0; i < question1.length; i++) {
      if (question1[i].checked) {
        result1 = question1[i].getAttribute(`value`);
      }
    }
    for (let i = 0; i < question2.length; i++) {
      if (question2[i].checked) {
        result2 = question2[i].getAttribute(`value`);
      }
    }

    if (result1 && result2 && true) {
      if ((result1 === data.answers[0].imgType) && (result2 === data.answers[1].imgType)) {
        game.changeStats(true);
        game.letsPlay();
      } else {
        game.changeStats(false);
        game.changeLives();
        game.letsPlay();
      }
    }
  };

  gameOneScreen.onBackClick = () => {
    game.goBack();
  };

  return gameOneScreen.element;
};
