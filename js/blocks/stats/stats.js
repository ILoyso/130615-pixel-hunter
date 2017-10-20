import {createElement, showScreen} from '../../utils';
import header from '../header';
import footer from '../footer';
import {goBack} from '../../gameplay';

const getResultAnswers = (data) => {
  let correctAnswers = 0;
  let wrongAnswers = 0;
  let fastAnswers = 0;
  let slowAnswers = 0;

  for (let i = 0; i < data.results.length; i++) {
    switch (data.results[i]) {
      case `correct`:
        correctAnswers++;
        break;
      case `wrong`:
        wrongAnswers++;
        break;
      case `fast`:
        fastAnswers++;
        break;
      case `slow`:
        slowAnswers++;
        break;
    }
  }
  return {
    correct: correctAnswers,
    wrong: wrongAnswers,
    fast: fastAnswers,
    slow: slowAnswers
  };
};

const correctPoints = (data) => {
  return data.correct * 100;
};

const fastPoints = (data) => {
  return data.fast * 50;
};

const livePoints = (data) => {
  return data.lives * 50;
};

const slowPoints = (data) => {
  return data.slow * -50;
};

const totalPoints = (userResults, finalResults) => {
  return correctPoints(finalResults) + fastPoints(finalResults) + livePoints(userResults) + slowPoints(finalResults);
};

const result = {
  FAIL: `FAIL`,
  WIN: `Победа`
};

const getGameResults = (data) => {
  const gameResults = getResultAnswers(data);

  const resultTitle = () => {
    if (gameResults.wrong > 2) {
      return result.FAIL;
    } else {
      return result.WIN;
    }
  };

  const currentStats = String.raw`<div class="result">
    <h1>${resultTitle()}</h1>
    <table class="result__table">
      <tr>
        <td class="result__number">1.</td>
        <td colspan="2">
          <ul class="stats">
            ${[...data.results].map((level) => `<li class="stats__result stats__result--${level}"></li>`)}
          </ul>
        </td>
        <td class="result__points">×&nbsp;100</td>
        <td class="result__total">${correctPoints(gameResults)}</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">Бонус за скорость:</td>
        <td class="result__extra">${gameResults.fast}&nbsp;<span class="stats__result stats__result--fast"></span></td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">${fastPoints(gameResults)}</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">Бонус за жизни:</td>
        <td class="result__extra">${data.lives}&nbsp;<span class="stats__result stats__result--alive"></span></td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">${livePoints(data)}</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">Штраф за медлительность:</td>
        <td class="result__extra">${gameResults.slow}&nbsp;<span class="stats__result stats__result--slow"></span></td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">${slowPoints(gameResults)}</td>
      </tr>
      <tr>
        <td colspan="5" class="result__total  result__total--final">${totalPoints(data, gameResults)}</td>
      </tr>
    </table>
  </div>`;

  return currentStats;
};

let gameHistory = [];

const addToHistory = (data) => {
  gameHistory.push(data);

  if (gameHistory.length > 2) {
    gameHistory.shift();
  }
  return gameHistory;
};

const getGameHistory = (historyData) => {
  let oldGames = ``;
  let historyGameResults = {};
  for (let i = 0; i < historyData.length; i++) {
    historyGameResults = getResultAnswers(historyData[i]);

    oldGames = `${oldGames} <table class="result__table">
      <tr>
        <td class="result__number">${i + 2}</td>
        <td colspan="2">
          <ul class="stats">
            ${[...historyData[i].results].map((level) => `<li class="stats__result stats__result--${level}"></li>`)}
          </ul>
        </td>
        <td class="result__points">×&nbsp;100</td>
        <td class="result__total">${correctPoints(historyGameResults)}</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">Бонус за скорость:</td>
        <td class="result__extra">${historyGameResults.fast}&nbsp;<span class="stats__result stats__result--fast"></span></td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">${fastPoints(historyGameResults)}</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">Бонус за жизни:</td>
        <td class="result__extra">${historyData[i].lives}&nbsp;<span class="stats__result stats__result--alive"></span></td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">${livePoints(historyData[i])}</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">Штраф за медлительность:</td>
        <td class="result__extra">${historyGameResults.slow}&nbsp;<span class="stats__result stats__result--slow"></span></td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">${slowPoints(historyGameResults)}</td>
      </tr>
      <tr>
        <td colspan="5" class="result__total  result__total--final">${totalPoints(historyData[i], historyGameResults)}</td>
      </tr>
    </table>`;
  }
  return oldGames;
};

export default (userData) => {
  const resultStats = `${header}
  <div class="result">
  ${getGameResults(userData)}
  ${getGameHistory(gameHistory)}
  </div>
  ${footer}`;

  addToHistory(userData);

  const moduleStats = createElement(resultStats);
  const back = moduleStats.querySelector(`.back`);

  back.addEventListener(`click`, goBack);

  showScreen(moduleStats);
};
