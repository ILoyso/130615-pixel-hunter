import AbstractView from '../../view';
import header from '../header';
import footer from '../footer';
import * as game from '../../utils/gameplay';

export default class StatsView extends AbstractView {

  constructor(state) {
    super();
    this.state = state;
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

  _templateHistory(historyData) {
    let oldGames = ``;
    for (let i = 0; i < historyData.length; i++) {
      oldGames = `${oldGames} <table class="result__table">
      <tr>
        <td class="result__number">${i + 2}.</td>
        ${historyData[i]}
      </tr>
    </table>`;
    }
    return oldGames;
  }

  _templateGame(result, answers) {
    if (result === game.finalGameResults.FAIL) {
      return this._templateFail(this.state, result);
    }
    return this._tamplateWin(this.state, answers);
  }

  get template() {
    const countOfAnswers = game.getResultAnswers(this.state);
    const result = game.getGameResult(countOfAnswers);
    this.gameBlock = this._templateGame(result, countOfAnswers);

    return String.raw`${header}
      <div class="result">
      
        <h1>${game.resultTitle(countOfAnswers)}</h1>
        <table class="result__table">
          <tr>
            <td class="result__number">1.</td>
            ${this.gameBlock}
          </tr>
        </table>
        ${this._templateHistory(game.gameHistory)}
      </div>
      ${footer}`;
  }

  bind() {
    const back = this.element.querySelector(`.back`);
    back.addEventListener(`click`, () => {
      this.onBackClick();
    });
  }

  onBackClick() {

  }
}
