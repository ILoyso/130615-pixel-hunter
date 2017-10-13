import createElement from '../../createElement';
import showScreen from '../../showScreen';
import moduleGreeting from '../greeting/greeting';

const introStr = String.raw`<div id="main" class="central__content">
    <div id="intro" class="intro">
      <h1 class="intro__asterisk">*</h1>
      <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
    </div>
  </div>`;

const moduleIntro = createElement(introStr);
const showGreeting = moduleIntro.querySelector(`.intro__asterisk`);

showGreeting.addEventListener(`click`, () => {
  showScreen(moduleGreeting);
});

export default moduleIntro;
