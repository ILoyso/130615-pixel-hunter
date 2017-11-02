import {gameData, gameStatus, TIMER_INTERVAL, TIME_LIMIT} from './game-data';
import {userData, noAnswer, resetUserData, gameCheck} from '../../utils/gameplay';
import {showScreen} from '../../utils/utils';
import App from '../../application';
import GameModel from './game-model';
import GameView from './game-view';


class GameScreen {
  constructor(data = gameData) {
    this.model = new GameModel(data);
    this.view = new GameView(this.model);

    this.view.onBackClick = () => this.onBackClick();
    this.view.onYesClick = () => this.onYesClick();
    this.view.onFormClick = (evt) => this.onFormClick(evt);
    this.model.end = (state) => this.end(state);
  }

  init(state = userData) {
    this.model.start();
    this.model.update(state);
    showScreen(this.view);
    this.view.hideWaiting();
    this.changeLevel();
  }

  onBackClick() {
    this.view.showWarning();
  }

  onYesClick() {
    this.reset();
    this.view.hideWarning();
    App.showGreeting();
  }

  onFormClick(evt) {
    const result = gameCheck(this.view, evt);

    if (result !== noAnswer) {
      this.onAnswer(result);
    }
  }

  onAnswer(result) {
    this.model.changeStats(result);
    this.stopTimer();
    this.model.changeLives(result);
    this.model.nextLevel();
    this.stopTimerWarning();
    this.changeLevel();
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
      this.stopTimerWarning();
      if (this.model.state.time <= 5) {
        this.timerWarning = setInterval(() => {
          this.view.timer.classList.toggle(`colorize`);
        }, 500);
      }
      if (this.model.state.time === 0) {
        this.onAnswer(false);
      }
    }, TIMER_INTERVAL);
  }

  stopTimer() {
    clearInterval(this.timer);
    this.model.state.time = TIME_LIMIT;
  }

  stopTimerWarning() {
    clearInterval(this.timerWarning);
  }

  reset() {
    this.stopTimer();
    resetUserData();
    this.model.gameStatus = gameStatus.END;
  }

  end(state) {
    this.view.showWaiting();
    App.showStats(state);
    this.reset();
  }

}

export default GameScreen;
