import AbstractView from '../../../view';

export default class GameTwoView extends AbstractView {

  constructor(data) {
    super();
    this.data = data;
  }

  get template() {
    return String.raw`<p class="game__task">${this.data.text}</p>
      <form class="game__content  game__content--wide">
        <div class="game__option">
          <img class="game__img game__img--two" src="${this.data.answers[0].imgSrc}" alt="Option 1">
          <label class="game__answer  game__answer--photo">
            <input name="question1" type="radio" value="photo">
            <span>Фото</span>
          </label>
          <label class="game__answer  game__answer--wide  game__answer--paint">
            <input name="question1" type="radio" value="paint">
            <span>Рисунок</span>
          </label>
        </div>
      </form>`;
  }

  bind() {

  }
}
