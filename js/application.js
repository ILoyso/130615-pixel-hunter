import introScreen from './blocks/intro/intro';
import greetingScreen from './blocks/greeting/greeting';
import rulesScreen from './blocks/rules/rules';
import GameScreen from './blocks/games/game';
import statsScreen from './blocks/stats/stats';
import Loader from './loader';
import adapt from './utils/data-adapter';

const ControllerId = {
  INTRO: ``,
  GREETING: `greeting`,
  RULES: `rules`,
  GAME: `game`,
  STATS: `stats`
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
      const [id, name] = hashValue.split(`?`);
      this.userName = name;
      Application.changeHash(id);
    };
    window.addEventListener(`hashchange`, hashChangeHandler);
    hashChangeHandler();
  }

  static changeHash(id) {
    const controller = Application.routes[id];

    if (controller) {
      controller.init();
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
    Loader.saveResults(stats, this.userName).then(() => {
      location.hash = `${ControllerId.STATS}?${this.userName}`;
    });
  }
}

introScreen.init();

Loader.loadData()
    .then(adapt)
    .then((gameData) => Application.init(gameData))
    .catch(window.console.error);
