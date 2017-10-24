import AbstractView from '../../view';
import footer from '../footer';
import data from './greeting-data';

export default class GreetingView extends AbstractView {

  get template() {
    return String.raw`<div class="greeting central--blur">
      <div class="greeting__logo"><img src="img/logo_big.png" width="201" height="89" alt="Pixel Hunter"></div>
      <h1 class="greeting__asterisk">*</h1>
      <div class="greeting__challenge">
        <h3>${data.title}</h3>
        <p>${data.text}</p>
      </div>
      <div class="greeting__continue"><span><img src="img/arrow_right.svg" width="64" height="64" alt="Next"></span></div>
    </div>
    ${footer}`;
  }

  bind() {
    const button = this.element.querySelector(`.greeting__continue`);
    button.addEventListener(`click`, this.onButtonClick);
  }

  onButtonClick() {

  }
}
