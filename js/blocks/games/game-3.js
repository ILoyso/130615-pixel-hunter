import {createElement, showScreen} from '../../utils';
import getHeader from './game-header';
import footer from '../footer';
import getStats from './game-stats';
import {changeStats, letsPlay, changeLives, goBack} from '../../gameplay';

const thirdGame = (gameData, userData) => String.raw`${getHeader(userData)}
  <div class="game">
    <p class="game__task">${gameData.text}</p>
    <form class="game__content  game__content--triple">
      <div class="game__option game__option--full-img">
        <img class="game__img" src="${gameData.answers[0].imgSrc}" alt="Option 1">
      </div>
      <div class="game__option game__option--full-img">
        <img class="game__img" src="${gameData.answers[1].imgSrc}" alt="Option 1">
      </div>
      <div class="game__option game__option--full-img">
        <img class="game__img" src="${gameData.answers[2].imgSrc}" alt="Option 1">
      </div>
    </form>
    ${getStats(userData)}
    ${footer}
  </div>`;

export default (gameData, userData) => {
  const moduleThirdGame = createElement(thirdGame(gameData, userData));
  const form = moduleThirdGame.querySelector(`.game__content`);
  const answers = form.querySelectorAll(`.game__option`);
  const back = moduleThirdGame.querySelector(`.back`);

  const findCorrectAnswer = () => {
    for (let i = 0; i < gameData.answers.length; i++) {
      if (gameData.answers[i].imgType === `paint`) {
        return i;
      }
    }
    return false;
  };

  const checkAnswers = (evt) => {
    if (evt.target.classList.contains(`game__option`)) {
      evt.target.classList.add(`game__option--selected`);

      for (let i = 0; i < answers.length; i++) {
        if (answers[i].classList.contains(`game__option--selected`)) {
          if (i === findCorrectAnswer()) {
            changeStats(true);
            letsPlay();
          } else {
            changeStats(false);
            changeLives();
            letsPlay();
          }
        }
      }
    }
  };

  form.addEventListener(`click`, checkAnswers);

  back.addEventListener(`click`, goBack);

  showScreen(moduleThirdGame);
};
