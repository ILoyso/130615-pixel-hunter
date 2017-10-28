import AbstractView from '../../view';
import HeaderView from './header/game-header-view';
import StatsVies from './stats/game-stats-view';
import GameOne from './level-1/level-1-view';
import GameTwo from './level-2/level-2-view';
import GameThree from './level-3/level-3-view';
import footer from '../footer';
import {gameTypes} from './game-data';

const update = (container, view) => {
  container.innerHTML = ``;
  container.appendChild(view.element);
};

export default class GameView extends AbstractView {
  constructor(model) {
    super();
    this.model = model;
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
    this.headerContainer = this.element.querySelector(`.header`);
    this.levelContainer = this.element.querySelector(`.level`);
    this.statsContainer = this.element.querySelector(`.stats`);
    this.updateHeader();
    this.updateStats();
    this.updateLevel();
    return super.bind();
  }

  nextLevel() {
    this.updateHeader();
    this.updateStats();
    this.updateLevel();
  }

  updateHeader() {
    update(this.headerContainer, new HeaderView(this.model.state));
    this.back = this.element.querySelector(`.back`);
    this.back.addEventListener(`click`, () => {
      this.onBackClick();
    });
  }

  updateStats() {
    update(this.statsContainer, new StatsVies(this.model.state));
  }

  updateLevel() {
    this.currentData = this.model.getCurrentLevel();

    if (this.currentData) {
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
    }

    this.form = this.element.querySelector(`.game__content`);
    this.form.addEventListener(`click`, (evt) => {
      this.onFormClick(evt);
    });
  }

  onBackClick() {

  }

  onFormClick() {

  }
}
