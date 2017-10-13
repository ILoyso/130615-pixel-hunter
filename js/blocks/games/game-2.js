import createElement from '../../createElement';
import showScreen from '../../showScreen';
import moduleThirdGame from './game-3';
import moduleGreeting from '../greeting/greeting';
import headerStr from './header';
import data from './gameData';

const secondGameStr = String.raw`<div class="game">
    <p class="game__task">${data.game2.text}</p>
    <form class="game__content  game__content--wide">
      <div class="game__option">
        <img src="${data.game2.answers[0].imgSrc}" alt="Option 1" width="705" height="455">
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
    <div class="stats">
      <ul class="stats">
        <li class="stats__result stats__result--wrong"></li>
        <li class="stats__result stats__result--slow"></li>
        <li class="stats__result stats__result--fast"></li>
        <li class="stats__result stats__result--correct"></li>
        <li class="stats__result stats__result--wrong"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--slow"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--fast"></li>
        <li class="stats__result stats__result--unknown"></li>
      </ul>
    </div>
  </div>`;

const moduleSecondGame = createElement(headerStr + secondGameStr);
const form = moduleSecondGame.querySelector(`.game__content`);
const goBack = moduleSecondGame.querySelector(`.back`);
const question1 = moduleSecondGame.querySelectorAll(`input[name=question1]`);

const checkAnswers = () => {
  for (let i = 0; i < question1.length; i++) {
    if (question1[i].checked) {
      return true;
    }
  }
  return false;
};

form.addEventListener(`click`, () => {
  if (checkAnswers()) {
    showScreen(moduleThirdGame);
  }
});

goBack.addEventListener(`click`, () => {
  showScreen(moduleGreeting);
});

export default moduleSecondGame;
