import AbstractView from '../../../view';

export default class GameThreeView extends AbstractView {

  constructor(data) {
    super();
    this.data = data;
  }

  get template() {
    return String.raw`
      <p class="game__task">${this.data.question}</p>
      <form class="game__content  game__content--triple">
        <div class="game__option game__option--full-img">
          <img class="game__img" src="${this.data.answers[0].image.url}" alt="Option 1">
        </div>
        <div class="game__option game__option--full-img">
          <img class="game__img" src="${this.data.answers[1].image.url}" alt="Option 1">
        </div>
        <div class="game__option game__option--full-img">
          <img class="game__img" src="${this.data.answers[2].image.url}" alt="Option 1">
        </div>
      </form>`;
  }

  bind() {

  }
}
