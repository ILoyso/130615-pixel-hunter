import AbstractView from '../../../view';
import getHeader from '../header/game-header';
import getStats from '../stats/game-stats';
import footer from '../../footer';

export default class GameThreeView extends AbstractView {

  constructor(data, state) {
    super();
    this.state = state;
    this.data = data;
  }

  _gameTemplate(gameData) {
    return String.raw`
    <p class="game__task">${gameData.text}</p>
    <form class="game__content  game__content--triple">
      <div class="game__option game__option--full-img">
        <img class="game__img" src="${gameData.answers[0].imgSrc}" alt="Option 1">
      </div>
      <div class="game__option game__option--full-img">
        <img class="game__img" src="${gameData.answers[1].imgSrc}" alt="Option 1">
      </div>
      <div class="game__option game__option--full-img">
        <img class="game__img" src="${gameData.answers[2].imgSrc}" alt="Option 1">
      </div>
    </form>`;
  }

  get template() {
    return String.raw`${getHeader(this.state)}
    <div class="game">
      ${this._gameTemplate(this.data)}
      ${getStats(this.state)}
    </div>
    ${footer}`;
  }

  bind() {
    const form = this.element.querySelector(`.game__content`);
    const back = this.element.querySelector(`.back`);
    form.addEventListener(`click`, (evt) => {
      this.onFormClick(evt);
    });
    back.addEventListener(`click`, this.onBackClick);
  }

  onBackClick() {

  }

  onFormClick() {

  }
}
