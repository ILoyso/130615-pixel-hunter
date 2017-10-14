import createElement from '../../createElement';
import showScreen from '../../showScreen';
import moduleStats from '../stats/stats';
import moduleGreeting from '../greeting/greeting';
import headerStr from './gameHeader';
import statsStr from './gameStats';
import data from './gameData';

const thirdGameStr = String.raw`${headerStr}<div class="game">
    <p class="game__task">${data[2].text}</p>
    <form class="game__content  game__content--triple">
      <div class="game__option">
        <img src="${data[2].answers[0].imgSrc}" alt="Option 1" width="304" height="455">
      </div>
      <div class="game__option  game__option--selected">
        <img src="${data[2].answers[1].imgSrc}" alt="Option 1" width="304" height="455">
      </div>
      <div class="game__option">
        <img src="${data[2].answers[2].imgSrc}" alt="Option 1" width="304" height="455">
      </div>
    </form>
    ${statsStr}
  </div>`;

const moduleThirdGame = createElement(thirdGameStr);
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
