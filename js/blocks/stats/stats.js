import createElement from '../../createElement';
import showScreen from '../../showScreen';
import headerStr from '../header';
import {goBack} from '../../gamePlay';

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

const oldGames = String.raw`<table class="result__table">
      <tr>
        <td class="result__number">2.</td>
        <td>
          <ul class="stats">
            <li class="stats__result stats__result--wrong"></li>
            <li class="stats__result stats__result--slow"></li>
            <li class="stats__result stats__result--fast"></li>
            <li class="stats__result stats__result--correct"></li>
            <li class="stats__result stats__result--wrong"></li>
            <li class="stats__result stats__result--unknown"></li>
            <li class="stats__result stats__result--slow"></li>
            <li class="stats__result stats__result--wrong"></li>
            <li class="stats__result stats__result--fast"></li>
            <li class="stats__result stats__result--wrong"></li>
          </ul>
        </td>
        <td class="result__total"></td>
        <td class="result__total  result__total--final">fail</td>
      </tr>
    </table>
    <table class="result__table">
      <tr>
        <td class="result__number">3.</td>
        <td colspan="2">
          <ul class="stats">
            <li class="stats__result stats__result--wrong"></li>
            <li class="stats__result stats__result--slow"></li>
            <li class="stats__result stats__result--fast"></li>
            <li class="stats__result stats__result--correct"></li>
            <li class="stats__result stats__result--wrong"></li>
            <li class="stats__result stats__result--unknown"></li>
            <li class="stats__result stats__result--slow"></li>
            <li class="stats__result stats__result--unknown"></li>
            <li class="stats__result stats__result--fast"></li>
            <li class="stats__result stats__result--unknown"></li>
          </ul>
        </td>
        <td class="result__points">×&nbsp;100</td>
        <td class="result__total">900</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">Бонус за жизни:</td>
        <td class="result__extra">2&nbsp;<span class="stats__result stats__result--alive"></span></td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">100</td>
      </tr>
      <tr>
        <td colspan="5" class="result__total  result__total--final">950</td>
      </tr>
    </table>`;

const getGameResults = (data) => {
  const gameResults = getResultAnswers(data);

  const resultTitle = () => {
    if (gameResults.wrong > 3) {
      return `FAIL`;
    } else {
      return `Победа!`;
    }
  };

  const correctPoints = () => {
    return gameResults.correct * 100;
  };

  const fastPoints = () => {
    return gameResults.fast * 50;
  };

  const livePoints = () => {
    return data.lives * 50;
  };

  const slowPoints = () => {
    return gameResults.slow * -50;
  };

  const totalPoints = () => {
    return correctPoints() + fastPoints() + livePoints() + slowPoints();
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
        <td class="result__total">${correctPoints()}</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">Бонус за скорость:</td>
        <td class="result__extra">${gameResults.fast}&nbsp;<span class="stats__result stats__result--fast"></span></td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">${fastPoints()}</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">Бонус за жизни:</td>
        <td class="result__extra">${data.lives}&nbsp;<span class="stats__result stats__result--alive"></span></td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">${livePoints()}</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">Штраф за медлительность:</td>
        <td class="result__extra">${gameResults.slow}&nbsp;<span class="stats__result stats__result--slow"></span></td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">${slowPoints()}</td>
      </tr>
      <tr>
        <td colspan="5" class="result__total  result__total--final">${totalPoints()}</td>
      </tr>
    </table>    
  </div>`;

  return currentStats;
};

export default (userData) => {
  const resultStats = `${headerStr}
  <div class="result">
  ${getGameResults(userData)}
  ${oldGames}
  </div>`;

  const moduleStats = createElement(resultStats);
  const back = moduleStats.querySelector(`.back`);

  back.addEventListener(`click`, () => {
    goBack();
  });

  showScreen(moduleStats);
};
