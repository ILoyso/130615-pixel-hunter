import introScreen from './blocks/intro/intro';
import greetingScreen from './blocks/greeting/greeting';
import rulesScreen from './blocks/rules/rules';
import GameScreen from './blocks/games/game';
import statsScreen from './blocks/stats/stats';
import {userData} from './utils/gameplay';
import Loader from './loader';
import adapt from './utils/data-adapter';

const encodeTemplate = {
  UNKNOWN: 0,
  WRONG: 1,
  SLOW: 2,
  CORRECT: 3,
  FAST: 4
};

const decodeTemplate = {
  0: `UNKNOWN`,
  1: `WRONG`,
  2: `SLOW`,
  3: `CORRECT`,
  4: `FAST`
};

const encode = (state) => {
  let codeStr = state.results.reduce((result, element) => {
    result += `${encodeTemplate[element.toUpperCase()]}`;
    return result;
  }, ``);

  codeStr += state.lives;
  return codeStr;
};

const decode = (str) => {
  const result = userData;
  const array = str.split(``);
  result.lives = array.pop();
  result.results = array.map((element) => {
    return decodeTemplate[element].toLowerCase();
  });

  return result;
};

const ControllerId = {
  INTRO: ``,
  GREETING: `greeting`,
  RULES: `rules`,
  GAME: `game`,
  STATS: `stats`
};

const saveState = (state) => {
  return encode(state);
};

const loadState = (dataString) => {
  try {
    return decode(dataString);
  } catch (e) {
    return userData;
  }
};

export default class Application {

  static init(gameData) {
    Application.routes = {
      [ControllerId.GREETING]: greetingScreen,
      [ControllerId.RULES]: rulesScreen,
      [ControllerId.GAME]: new GameScreen(gameData),
      [ControllerId.STATS]: statsScreen
    };

    const hashChangeHandler = () => {
      const hashValue = location.hash.replace(`#`, ``);
      const [id, data] = hashValue.split(`?`);
      this.changeHash(id, data);
    };
    window.addEventListener(`hashchange`, hashChangeHandler);
    hashChangeHandler();
  }

  static changeHash(id, data) {
    const controller = Application.routes[id];
    if (controller) {
      controller.init(loadState(data));
    }
  }

  static showIntro() {
    location.hash = ControllerId.INTRO;
  }

  static showGreeting() {
    location.hash = ControllerId.GREETING;
  }

  static showRules() {
    location.hash = ControllerId.RULES;
  }

  static showGame() {
    Application.routes[ControllerId.GAME].init();
  }

  static showStats(stats) {
    location.hash = `${ControllerId.STATS}?${saveState(stats)}`;
  }
}

introScreen.init();

Loader.loadData().then(adapt).then((gameData) => Application.init(gameData)).catch(window.console.error);
