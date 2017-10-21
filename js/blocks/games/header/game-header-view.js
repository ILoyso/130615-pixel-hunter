import AbstractView from '../../../view';

const drawHeart = (full) => {
  return `<img src="img/heart__${full ? `full` : `empty`}.svg" class="game__heart" alt="Life" width="32" height="32">`;
};

export default class GameHeaderView extends AbstractView {

  constructor(state) {
    super();
    this.state = state;
  }

  get template() {
    return String.raw`<header class="header">
    <div class="header__back">
      <button class="back">
        <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
        <img src="img/logo_small.svg" width="101" height="44">
      </button>
    </div>
    ${this.getTimerTemplate(this.state.time)}
    <div class="game__lives">
      ${this.getLivesTemplate(this.state.lives)}
    </div>
  </header>`;
  }

  getTimerTemplate(time) {
    return `<h1 class="game__timer">${time}</h1>`;
  }

  getLivesTemplate(lives) {
    return `${drawHeart(lives > 2)}
      ${drawHeart(lives > 1)}
      ${drawHeart(lives > 0)}`;
  }

  updateTime(time) {
    if (time !== this.state.time) {
      this.template.querySelector(`.game__timer`).innerHTML = time;
    }
  }

  updateLives(lives) {
    if (lives !== this.state.lives) {
      this.template.querySelector(`.game__lives`).innerHTML = lives;
    }
  }
}
