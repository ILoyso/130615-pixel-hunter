import {createElement, showScreen} from '../../utils';
import getHeader from './gameHeader';
import footer from '../footer';
import getStats from './gameStats';
import {changeStats, letsPlay, changeLives, goBack} from '../../gameplay';

const firstGame = (gameData, userData) => String.raw`${getHeader(userData)}
  <div class="game">
    <p class="game__task">${gameData.text}</p>
    <form class="game__content">
      <div class="game__option game__option--full-img">
        <img class="game__img" src="${gameData.answers[0].imgSrc}" alt="Option 1">
        <label class="game__answer game__answer--photo">
          <input name="question1" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer game__answer--paint">
          <input name="question1" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>
      <div class="game__option game__option--full-img">
        <img class="game__img" src="${gameData.answers[1].imgSrc}" alt="Option 2">
        <label class="game__answer  game__answer--photo">
          <input name="question2" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer  game__answer--paint">
          <input name="question2" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>
    </form>
    ${getStats(userData)}
    ${footer}
  </div>`;

export default (gameData, userData) => {
  const moduleFirstGame = createElement(firstGame(gameData, userData));
  const back = moduleFirstGame.querySelector(`.back`);
  const form = moduleFirstGame.querySelector(`.game__content`);
  const question1 = moduleFirstGame.querySelectorAll(`input[name=question1]`);
  const question2 = moduleFirstGame.querySelectorAll(`input[name=question2]`);

  const checkAnswers = () => {
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
      if ((result1 === gameData.answers[0].imgType) && (result2 === gameData.answers[1].imgType)) {
        changeStats(true);
        letsPlay();
      } else {
        changeStats(false);
        changeLives();
        letsPlay();
      }
    }
  };

  form.addEventListener(`click`, checkAnswers);

  back.addEventListener(`click`, goBack);

  showScreen(moduleFirstGame);
};

