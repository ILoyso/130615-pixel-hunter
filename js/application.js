import introScreen from './blocks/intro/intro';
import greetingScreen from './blocks/greeting/greeting';
import rulesScreen from './blocks/rules/rules';
import gameScreen from './blocks/games/game';
import statsScreen from './blocks/stats/stats';

export default class Application {

  static showIntro() {
    introScreen.init();
  }

  static showGreeting() {
    greetingScreen.init();
  }

  static showRules() {
    rulesScreen.init();
  }

  static showGame() {
    gameScreen.init();
  }

  static showStats(stats) {
    statsScreen.init(stats);
  }

}
