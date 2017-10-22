import AbstractView from '../../view';
import GameHeaderView from './header/game-header-view';
import GameStatsView from './stats/game-stats-view';
import GameOne from './level-1/level-1-view';
import GameTwo from './level-2/level-2-view';
import GameThree from './level-3/level-3-view';
import footer from '../footer';

const update = (container, view) => {
  container.innerHTML = ``;
  container.appendChild(view.element);
};

const gameTypes = {
  GAME_1: `game1`,
  GAME_2: `game2`,
  GAME_3: `game3`
};

export default class GameView extends AbstractView {

  constructor(data, state) {
    super();
    this.state = state;
    this.data = data;
    this.gameNumber = 0;
  }

  get template() {
    return String.raw`
    <header class="header"></header>
    <div class="game">
      <div class="level"></div>
      <div class="stats"></div>
    </div>
    ${footer}`;
  }

  bind() {
    this.startGame();
  }

  startGame() {
    this.headerContainer = this.element.querySelector(`.header`);
    this.levelContainer = this.element.querySelector(`.level`);
    this.statsContainer = this.element.querySelector(`.stats`);
    this.updateHeader(this.state);
    this.updateStats(this.state);
    this.updateLevel();
  }

  nextLevel(result) {
    this.changeStats(result);
    this.changeLives(result);
    this.gameNumber++;
    this.updateLevel();
  }

  updateHeader(state) {
    update(this.headerContainer, new GameHeaderView(state));
    this.back = this.element.querySelector(`.back`);
    this.back.addEventListener(`click`, () => {
      this.onBackClick();
    });
  }

  updateStats(state) {
    update(this.statsContainer, new GameStatsView(state));
  }

  updateLevel() {
    this.currentData = this.data[this.gameNumber];

    if ((!this.currentData) || (this.state.lives === 0)) {
      this.gameEnd();
      return;
    }

    switch (this.currentData.type) {
      case gameTypes.GAME_1:
        update(this.levelContainer, new GameOne(this.currentData));
        break;
      case gameTypes.GAME_2:
        update(this.levelContainer, new GameTwo(this.currentData));
        break;
      case gameTypes.GAME_3:
        update(this.levelContainer, new GameThree(this.currentData));
        break;
    }

    this.form = this.element.querySelector(`.game__content`);
    this.form.addEventListener(`click`, (evt) => {
      this.onFormClick(evt);
    });
  }

  changeStats(result) {
    if (result) {
      this.state.results[this.gameNumber] = `correct`;
    } else {
      this.state.results[this.gameNumber] = `wrong`;
    }

    this.updateStats(this.state);
  }

  changeLives(result) {
    if (!result) {
      this.state.lives--;
    }

    this.updateHeader(this.state);
  }

  gameEnd() {

  }

  onBackClick() {

  }

  onFormClick() {

  }
}
