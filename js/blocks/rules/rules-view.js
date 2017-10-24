import AbstractView from '../../view';
import header from '../header';
import footer from '../footer';
import data from './rules-data';

export default class RulesView extends AbstractView {

  get template() {
    return String.raw`${header}
      <div class="rules">
        <h1 class="rules__title">${data.title}</h1>
        <p class="rules__description">${data.text}</p>
        <form class="rules__form">
          <input class="rules__input" type="text" placeholder="Ваше Имя">
          <button class="rules__button  continue" type="submit" disabled>Go!</button>
        </form>
      </div>
      ${footer}`;
  }

  bind() {
    const button = this.element.querySelector(`.rules__button`);
    const inputText = this.element.querySelector(`.rules__input`);
    const back = this.element.querySelector(`.back`);

    inputText.addEventListener(`keyup`, () => {
      button.disabled = (inputText.value.length === 0);
    });

    button.addEventListener(`click`, this.onButtonClick);

    back.addEventListener(`click`, this.onBackClick);
  }

  onButtonClick() {

  }

  onBackClick() {

  }
}
