import AbstractView from '../../view';
import header from '../header';
import footer from '../footer';
import * as game from '../../utils/gameplay';

export default class StatsView extends AbstractView {

  constructor() {
    super();
  }

  _templateFail(data, result) {
    return String.raw`
      <td>
         <ul class="stats">
            ${[...data.results].map((level) => `<li class="stats__result stats__result--${level}"></li>`)}
         </ul>
      </td>
      <td class="result__total"></td>
      <td class="result__total  result__total--final">${result}</td>`;
  }

  _tamplateWin(data, countOfAnswers) {
    return String.raw`
      <td colspan="2">
         <ul class="stats">
              ${[...data.results].map((level) => `<li class="stats__result stats__result--${level}"></li>`)}
         </ul>
      </td>
      <td class="result__points">×&nbsp;100</td>
      <td class="result__total">${game.correctPoints(countOfAnswers)}</td>
    </tr>
    <tr>
      <td></td>
      <td class="result__extra">Бонус за скорость:</td>
      <td class="result__extra">${countOfAnswers.fast}&nbsp;<span class="stats__result stats__result--fast"></span></td>
      <td class="result__points">×&nbsp;50</td>
      <td class="result__total">${game.fastPoints(countOfAnswers)}</td>
    </tr>
    <tr>
      <td></td>
      <td class="result__extra">Бонус за жизни:</td>
      <td class="result__extra">${data.lives}&nbsp;<span class="stats__result stats__result--alive"></span></td>
      <td class="result__points">×&nbsp;50</td>
      <td class="result__total">${game.livePoints(data)}</td>
    </tr>
    <tr>
      <td></td>
      <td class="result__extra">Штраф за медлительность:</td>
      <td class="result__extra">${countOfAnswers.slow}&nbsp;<span class="stats__result stats__result--slow"></span></td>
      <td class="result__points">×&nbsp;50</td>
      <td class="result__total">${game.slowPoints(countOfAnswers)}</td>
    </tr>
    <tr>
      <td colspan="5" class="result__total  result__total--final">${game.totalPoints(data, countOfAnswers)}</td>`;
  }

  _templateGame(result, answers, state) {
    if (result === game.finalGameResults.FAIL) {
      return this._templateFail(state, result);
    }
    return this._tamplateWin(state, answers);
  }

  showStats(data) {
    let content = ``;
    let mainTitle = ``;

    for (let i = data.length - 1; i >= 0; i--) {
      const countOfAnswers = game.getResultAnswers(data[i]);
      const result = game.getGameResult(countOfAnswers);
      const GameBlock = this._templateGame(result, countOfAnswers, data[i]);
      if (i === data.length - 1) {
        mainTitle = game.resultTitle(countOfAnswers);
      }
      content = `${content} <table class="result__table">
      <tr>
        <td class="result__number">${data.length - i}.</td>
        ${GameBlock}
      </tr>
    </table>`;
    }

    this.resultsContainer.innerHTML = `
      <h1>${mainTitle}</h1>
      ${content}`;
  }

  get template() {
    return String.raw`${header}
      <div class="result">      
        <p>Данные загружаются</p>
      </div>
      ${footer}`;
  }

  bind() {
    this.resultsContainer = this.element.querySelector(`.result`);
    const back = this.element.querySelector(`.back`);
    back.addEventListener(`click`, () => {
      this.onBackClick();
    });
  }

  onBackClick() {

  }
}
