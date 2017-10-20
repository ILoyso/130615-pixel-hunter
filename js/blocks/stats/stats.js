import {createElement, showScreen} from '../../utils';
import header from '../header';
import footer from '../footer';
import * as game from '../../gameplay';

const getGameResults = (data) => {
  const gameResults = game.getResultAnswers(data);

  const currentStats = String.raw`<div class="result">
    <h1>${game.resultTitle(gameResults)}</h1>
    <table class="result__table">
      <tr>
        <td class="result__number">1.</td>
        <td colspan="2">
          <ul class="stats">
            ${[...data.results].map((level) => `<li class="stats__result stats__result--${level}"></li>`)}
          </ul>
        </td>
        <td class="result__points">×&nbsp;100</td>
        <td class="result__total">${game.correctPoints(gameResults)}</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">Бонус за скорость:</td>
        <td class="result__extra">${gameResults.fast}&nbsp;<span class="stats__result stats__result--fast"></span></td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">${game.fastPoints(gameResults)}</td>
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
        <td class="result__extra">${gameResults.slow}&nbsp;<span class="stats__result stats__result--slow"></span></td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">${game.slowPoints(gameResults)}</td>
      </tr>
      <tr>
        <td colspan="5" class="result__total  result__total--final">${game.totalPoints(data, gameResults)}</td>
      </tr>
    </table>
  </div>`;

  return currentStats;
};

const getGameHistory = (historyData) => {
  let oldGames = ``;
  let historyGameResults = {};
  for (let i = 0; i < historyData.length; i++) {
    historyGameResults = game.getResultAnswers(historyData[i]);

    oldGames = `${oldGames} <table class="result__table">
      <tr>
        <td class="result__number">${i + 2}</td>
        <td colspan="2">
          <ul class="stats">
            ${[...historyData[i].results].map((level) => `<li class="stats__result stats__result--${level}"></li>`)}
          </ul>
        </td>
        <td class="result__points">×&nbsp;100</td>
        <td class="result__total">${game.correctPoints(historyGameResults)}</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">Бонус за скорость:</td>
        <td class="result__extra">${historyGameResults.fast}&nbsp;<span class="stats__result stats__result--fast"></span></td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">${game.fastPoints(historyGameResults)}</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">Бонус за жизни:</td>
        <td class="result__extra">${historyData[i].lives}&nbsp;<span class="stats__result stats__result--alive"></span></td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">${game.livePoints(historyData[i])}</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">Штраф за медлительность:</td>
        <td class="result__extra">${historyGameResults.slow}&nbsp;<span class="stats__result stats__result--slow"></span></td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">${game.slowPoints(historyGameResults)}</td>
      </tr>
      <tr>
        <td colspan="5" class="result__total  result__total--final">${game.totalPoints(historyData[i], historyGameResults)}</td>
      </tr>
    </table>`;
  }
  return oldGames;
};

export default (userData) => {
  const resultStats = `${header}
  <div class="result">
  ${getGameResults(userData)}
  ${getGameHistory(game.gameHistory)}
  </div>
  ${footer}`;

  game.addToHistory(userData);

  const moduleStats = createElement(resultStats);
  const back = moduleStats.querySelector(`.back`);

  back.addEventListener(`click`, game.goBack);

  showScreen(moduleStats);
};
