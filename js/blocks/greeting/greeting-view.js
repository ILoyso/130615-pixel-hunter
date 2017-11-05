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
    <div id="main" class="central__content intro-wrap active">
      <div id="intro" class="intro">
        <h1 class="intro__asterisk">*</h1>
        <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
      </div>
    </div>
    ${footer}`;
  }

  bind() {
    const button = this.element.querySelector(`.greeting__continue`);
    this.greetingBlock = this.element.querySelector(`.greeting`);
    this.introBlock = this.element.querySelector(`.intro-wrap`);

    button.addEventListener(`click`, () => {
      this.onButtonClick();
    });
  }

  onButtonClick() {

  }
}
