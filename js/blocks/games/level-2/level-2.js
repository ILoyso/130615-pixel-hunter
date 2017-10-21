import GameTwoView from './level-2-view';
import * as game from '../../../gameplay';

export default (data, state) => {

  const gameTwoScreen = new GameTwoView(data, state);
  const question1 = gameTwoScreen.element.querySelectorAll(`input[name=question1]`);

  gameTwoScreen.onFormClick = () => {
    let result1 = false;

    for (let i = 0; i < question1.length; i++) {
      if (question1[i].checked) {
        result1 = question1[i].getAttribute(`value`);
      }
    }

    if (result1 && true) {
      if (result1 === data.answers[0].imgType) {
        game.changeStats(true);
        game.letsPlay();
      } else {
        game.changeStats(false);
        game.changeLives();
        game.letsPlay();
      }
    }
  };

  gameTwoScreen.onBackClick = () => {
    game.goBack();
  };

  return gameTwoScreen.element;
};
