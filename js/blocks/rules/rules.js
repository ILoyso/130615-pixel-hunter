import createElement from '../../createElement';
import headerStr from '../header';
import data from './rulesData';
import {letsPlay, goBack} from '../../gamePlay';

const rulesStr = String.raw`${headerStr}
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
const back = moduleRules.querySelector(`.back`);

inputText.addEventListener(`keyup`, () => {
  if (inputText.value) {
    showFirstGame.removeAttribute(`disabled`);
  } else {
    showFirstGame.setAttribute(`disabled`, `disabled`);
  }
});

showFirstGame.addEventListener(`click`, () => {
  letsPlay();
});

back.addEventListener(`click`, () => {
  goBack();
});

export default moduleRules;