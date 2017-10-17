import createElement from '../../createElement';
import showScreen from '../../showScreen';
import moduleRules from '../rules/rules';
import data from './greetingData';

const greetingStr = String.raw`<div class="greeting central--blur">
    <div class="greeting__logo"><img src="img/logo_big.png" width="201" height="89" alt="Pixel Hunter"></div>
    <h1 class="greeting__asterisk">*</h1>
    <div class="greeting__challenge">
      <h3>${data.title}</h3>
      <p>${data.text}</p>
    </div>
    <div class="greeting__continue"><span><img src="img/arrow_right.svg" width="64" height="64" alt="Next"></span></div>
  </div>`;

const moduleGreeting = createElement(greetingStr);
const showRules = moduleGreeting.querySelector(`.greeting__continue`);

showRules.addEventListener(`click`, () => {
  showScreen(moduleRules);
});

export default moduleGreeting;
