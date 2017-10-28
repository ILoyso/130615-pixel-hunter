import {gameData, gameStatus, TIMER_INTERVAL, TIME_LIMIT} from './game-data';
import {userData, noAnswer, resetUserData, gameCheck} from '../../gameplay';
import {showScreen} from '../../utils';
import App from '../../application';
import GameModel from './game-model';
import GameView from './game-view';

class GameScreen {
  constructor(data = gameData) {
    this.model = new GameModel(data);
    this.view = new GameView(this.model);

    this.view.onBackClick = () => this.onBackClick();
    this.view.onFormClick = (evt) => this.onFormClick(evt);
    this.model.end = (state) => this.end(state);
  }

  init(state = userData) {
    this.model.start();
    this.model.update(state);
    showScreen(this.view);
    this.changeLevel();
  }

  onBackClick() {
    this.reset();
    App.showGreeting();
  }

  onFormClick(evt) {
    const result = gameCheck(this.view, evt);

    if (result !== noAnswer) {
      this.model.changeStats(result);
      this.stopTimer();
      this.model.changeLives(result);
      this.model.nextLevel();
      this.changeLevel();
    }
  }

  changeLevel() {
    if (this.model.gameStatus === gameStatus.PLAY) {
      this.view.nextLevel();
      this.tick();
    }
  }


  tick() {
    this.timer = setInterval(() => {
      this.model.tick();
      this.view.updateHeader();
    }, TIMER_INTERVAL);
  }

  stopTimer() {
    clearInterval(this.timer);
    this.model.state.time = TIME_LIMIT;
  }


  reset() {
    this.stopTimer();
    resetUserData();
    this.model.gameStatus = gameStatus.END;
  }

  end(state) {
    App.showStats(state);
    this.reset();
  }

}

export default new GameScreen();
