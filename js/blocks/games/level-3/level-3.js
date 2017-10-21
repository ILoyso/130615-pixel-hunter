import GameThreeView from './level-3-view';
import * as game from '../../../gameplay';

export default (data, state) => {

  const gameThreeScreen = new GameThreeView(data, state);
  const answers = gameThreeScreen.element.querySelectorAll(`.game__option`);

  const findCorrectAnswer = () => {
    for (let i = 0; i < data.answers.length; i++) {
      if (data.answers[i].imgType === `paint`) {
        return i;
      }
    }
    return false;
  };

  gameThreeScreen.onFormClick = (evt) => {
    if (evt.target.classList.contains(`game__option`)) {
      evt.target.classList.add(`game__option--selected`);

      for (let i = 0; i < answers.length; i++) {
        if (answers[i].classList.contains(`game__option--selected`)) {
          if (i === findCorrectAnswer()) {
            game.changeStats(true);
            game.letsPlay();
          } else {
            game.changeStats(false);
            game.changeLives();
            game.letsPlay();
          }
        }
      }
    }
  };

  gameThreeScreen.onBackClick = () => {
    game.goBack();
  };

  return gameThreeScreen.element;
};
