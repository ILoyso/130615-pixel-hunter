import createElement from '../../createElement';
import showScreen from '../../showScreen';
import moduleSecondGame from './game-2';
import moduleGreeting from '../greeting/greeting';
import headerStr from './header';
import data from './gameData';

const firstGameStr = String.raw`<div class="game">
    <p class="game__task">${data.game1.text}</p>
    <form class="game__content">
      <div class="game__option">
        <img src="${data.game1.answers[0].imgSrc}" alt="Option 1" width="468" height="458">
        <label class="game__answer game__answer--photo">
          <input name="question1" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer game__answer--paint">
          <input name="question1" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>
      <div class="game__option">
        <img src="${data.game1.answers[1].imgSrc}" alt="Option 2" width="468" height="458">
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
    <div class="stats">
      <ul class="stats">
        <li class="stats__result stats__result--wrong"></li>
        <li class="stats__result stats__result--slow"></li>
        <li class="stats__result stats__result--fast"></li>
        <li class="stats__result stats__result--correct"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
      </ul>
    </div>
  </div>`;

const moduleFirstGame = createElement(headerStr + firstGameStr);
const goBack = moduleFirstGame.querySelector(`.back`);
const form = moduleFirstGame.querySelector(`.game__content`);
const question1 = moduleFirstGame.querySelectorAll(`input[name=question1]`);
const question2 = moduleFirstGame.querySelectorAll(`input[name=question2]`);

const checkAnswers = () => {
  let result1 = false;
  let result2 = false;
  for (let i = 0; i < question1.length; i++) {
    if (question1[i].checked) {
      result1 = true;
      break;
    } else {
      result1 = false;
    }
  }
  for (let i = 0; i < question2.length; i++) {
    if (question2[i].checked) {
      result2 = true;
      break;
    } else {
      result2 = false;
    }
  }
  return result1 && result2 && true;
};

form.addEventListener(`click`, () => {
  if (checkAnswers()) {
    showScreen(moduleSecondGame);
  }
});

goBack.addEventListener(`click`, () => {
  showScreen(moduleGreeting);
});

export default moduleFirstGame;
