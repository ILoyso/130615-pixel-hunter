import createElement from '../../createElement';
import showScreen from '../../showScreen';
import getHeader from './gameHeader';
import getStats from './gameStats';
import {changeStats, letsPlay, changeLives, goBack} from '../../gamePlay';

const secondGame = (gameData, userData) => String.raw`${getHeader(userData)}
  <div class="game">
    <p class="game__task">${gameData.text}</p>
    <form class="game__content  game__content--wide">
      <div class="game__option">
        <img class="game__img game__img--two" src="${gameData.answers[0].imgSrc}" alt="Option 1">
        <label class="game__answer  game__answer--photo">
          <input name="question1" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer  game__answer--wide  game__answer--paint">
          <input name="question1" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>
    </form>
    ${getStats(userData)}
  </div>`;

export default (gameData, userData) => {
  const moduleSecondGame = createElement(secondGame(gameData, userData));
  const form = moduleSecondGame.querySelector(`.game__content`);
  const back = moduleSecondGame.querySelector(`.back`);
  const question1 = moduleSecondGame.querySelectorAll(`input[name=question1]`);

  const checkAnswers = () => {
    let result1 = false;
    for (let i = 0; i < question1.length; i++) {
      if (question1[i].checked) {
        result1 = question1[i].getAttribute(`value`);
      }
    }

    if (result1 && true) {
      if (result1 === gameData.answers[0].imgType) {
        changeStats(true);
        letsPlay();
      } else {
        changeStats(false);
        changeLives();
        letsPlay();
      }
    }
  };

  form.addEventListener(`click`, () => {
    checkAnswers();
  });

  back.addEventListener(`click`, () => {
    goBack();
  });

  showScreen(moduleSecondGame);
};

