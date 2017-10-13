import createElement from '../../createElement';
import showScreen from '../../showScreen';
import moduleStats from '../stats/stats';
import moduleGreeting from '../greeting/greeting';
import headerStr from './header';
import data from './gameData';

const thirdGameStr = String.raw`<div class="game">
    <p class="game__task">${data.game3.text}</p>
    <form class="game__content  game__content--triple">
      <div class="game__option">
        <img src="${data.game3.answers[0].imgSrc}" alt="Option 1" width="304" height="455">
      </div>
      <div class="game__option  game__option--selected">
        <img src="${data.game3.answers[1].imgSrc}" alt="Option 1" width="304" height="455">
      </div>
      <div class="game__option">
        <img src="${data.game3.answers[2].imgSrc}" alt="Option 1" width="304" height="455">
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

const moduleThirdGame = createElement(headerStr + thirdGameStr);
const form = moduleThirdGame.querySelector(`.game__content`);
const answerClass = `game__option`;
const goBack = moduleThirdGame.querySelector(`.back`);

form.addEventListener(`click`, (evt) => {
  const target = evt.target;
  if (target.classList.contains(answerClass)) {
    showScreen(moduleStats);
  }
});

goBack.addEventListener(`click`, () => {
  showScreen(moduleGreeting);
});

export default moduleThirdGame;
