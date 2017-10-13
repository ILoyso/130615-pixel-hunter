import createElement from '../../createElement';
import showScreen from '../../showScreen';
import moduleFirstGame from '../games/game-1';
import moduleGreeting from '../greeting/greeting';
import data from './rulesData';

const rulesStr = String.raw`<header class="header">
    <div class="header__back">
      <button class="back">
        <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
        <img src="img/logo_small.svg" width="101" height="44">
      </button>
    </div>
  </header>
  <div class="rules">
    <h1 class="rules__title">${data.title}</h1>
    <p class="rules__description">${data.text}</p>
    <form class="rules__form">
      <input class="rules__input" type="text" placeholder="Ваше Имя">
      <button class="rules__button  continue" type="submit" disabled>Go!</button>
    </form>
  </div>`;

const moduleRules = createElement(rulesStr);
const showFirstGame = moduleRules.querySelector(`.rules__button`);
const inputText = moduleRules.querySelector(`.rules__input`);
const goBack = moduleRules.querySelector(`.back`);

inputText.addEventListener(`keyup`, () => {
  if (inputText.value !== ``) {
    showFirstGame.removeAttribute(`disabled`);
  } else {
    showFirstGame.setAttribute(`disabled`, `disabled`);
  }
});

showFirstGame.addEventListener(`click`, () => {
  showScreen(moduleFirstGame);
});

goBack.addEventListener(`click`, () => {
  showScreen(moduleGreeting);
});

export default moduleRules;
