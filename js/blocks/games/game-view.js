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
    ${this._warningTemplate()}
    ${this._waitingTemplate()}
    ${footer}`;
  }

  _warningTemplate() {
    return String.raw`
    <div class="game-warning">Данные текущей игры будут потеряны.
      Вы уверенны, что хотите продолжить?
      <div class="game-warning__buttons">
        <button class="game-warning__button game-warning__button--yes" type="button">Да, покинуть игру</button>
        <button class="game-warning__button game-warning__button--no" type="button">Нет, продолжаем играть</button>
      </div>
    </div>`;
  }

  _waitingTemplate() {
    return String.raw`
    <div class="wait">
      <div class="wait__loader"></div>
    </div>`;
  }

  bind() {
    this.headerContainer = this.element.querySelector(`.header`);
    this.levelContainer = this.element.querySelector(`.level`);
    this.statsContainer = this.element.querySelector(`.stats`);
    this.warning = this.element.querySelector(`.game-warning`);
    this.wait = this.element.querySelector(`.wait`);
    this.btnYes = this.element.querySelector(`.game-warning__button--yes`);
    this.btnNo = this.element.querySelector(`.game-warning__button--no`);
    this.updateHeader();
    this.updateStats();
    this.updateLevel();

    this.btnYes.addEventListener(`click`, () => {
      this.onYesClick();
    });

    this.btnNo.addEventListener(`click`, () => {
      this.hideWarning();
    });
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

  showWarning() {
    this.warning.classList.add(`active`);
  }

  hideWarning() {
    this.warning.classList.remove(`active`);
  }

  showWaiting() {
    this.wait.classList.add(`active`);
  }

  hideWaiting() {
    this.wait.classList.remove(`active`);
  }

  onYesClick() {

  }

  onBackClick() {

  }

  onFormClick() {

  }
}
