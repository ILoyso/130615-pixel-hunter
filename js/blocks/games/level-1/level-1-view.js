import AbstractView from '../../../view';
import getHeader from '../header/game-header';
import getStats from '../stats/game-stats';
import footer from '../../footer';

export default class GameOneView extends AbstractView {

  constructor(data, state) {
    super();
    this.state = state;
    this.data = data;
  }

  _gameTemplate(gameData) {
    return String.raw`
      <p class="game__task">${gameData.text}</p>
      <form class="game__content">
        <div class="game__option game__option--full-img">
          <img class="game__img" src="${gameData.answers[0].imgSrc}" alt="Option 1">
          <label class="game__answer game__answer--photo">
            <input name="question1" type="radio" value="photo">
            <span>Фото</span>
          </label>
          <label class="game__answer game__answer--paint">
            <input name="question1" type="radio" value="paint">
            <span>Рисунок</span>
          </label>
        </div>
        <div class="game__option game__option--full-img">
          <img class="game__img" src="${gameData.answers[1].imgSrc}" alt="Option 2">
          <label class="game__answer  game__answer--photo">
            <input name="question2" type="radio" value="photo">
            <span>Фото</span>
          </label>
          <label class="game__answer  game__answer--paint">
            <input name="question2" type="radio" value="paint">
            <span>Рисунок</span>
          </label>
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
    form.addEventListener(`click`, () => {
      this.onFormClick();
    });
    back.addEventListener(`click`, this.onBackClick);
  }

  onBackClick() {

  }

  onFormClick() {

  }
}


