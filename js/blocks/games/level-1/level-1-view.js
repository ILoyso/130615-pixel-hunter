import AbstractView from '../../../view';

export default class GameOneView extends AbstractView {

  constructor(data) {
    super();
    this.data = data;
  }

  get template() {
    return String.raw`
      <p class="game__task">${this.data.text}</p>
      <form class="game__content">
        <div class="game__option game__option--full-img">
          <img class="game__img" src="${this.data.answers[0].imgSrc}" alt="Option 1">
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
          <img class="game__img" src="${this.data.answers[1].imgSrc}" alt="Option 2">
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

  bind() {

  }
}


