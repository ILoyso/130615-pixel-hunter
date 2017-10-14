import createElement from '../../createElement';
import showScreen from '../../showScreen';
import moduleThirdGame from './game-3';
import moduleGreeting from '../greeting/greeting';
import headerGame from './gameHeader';
import statsStr from './gameStats';
import data from './gameData';

const greetingGameData = data[1];

const secondGameStr = String.raw`${headerGame}<div class="game">
    <p class="game__task">${greetingGameData.text}</p>
    <form class="game__content  game__content--wide">
      <div class="game__option">
        <img src="${greetingGameData.answers[0].imgSrc}" alt="Option 1" width="705" height="455">
        <label class="game__answer  game__answer--photo">
          <input name="question1" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer  game__answer--wide  game__answer--paint">
          <input name="question1" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>
    </form>
    ${statsStr}
  </div>`;

const moduleSecondGame = createElement(secondGameStr);
const form = moduleSecondGame.querySelector(`.game__content`);
const goBack = moduleSecondGame.querySelector(`.back`);
const question1 = moduleSecondGame.querySelectorAll(`input[name=question1]`);

const checkAnswers = () => {
  for (let i = 0; i < question1.length; i++) {
    if (question1[i].checked) {
      return true;
    }
  }
  return false;
};

form.addEventListener(`click`, () => {
  if (checkAnswers()) {
    showScreen(moduleThirdGame);
  }
});

goBack.addEventListener(`click`, () => {
  showScreen(moduleGreeting);
});

export default moduleSecondGame;
