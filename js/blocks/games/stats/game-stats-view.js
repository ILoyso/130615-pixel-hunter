import AbstractView from '../../../view';

export default class GameStatsView extends AbstractView {

  constructor(state) {
    super();
    this.state = state;
  }

  get template() {
    return String.raw`<div class="stats">
      <ul class="stats">
        ${[...this.state.results].map((level) => `<li class="stats__result stats__result--${level}"></li>`)}
      </ul>
    </div>`;
  }
}

