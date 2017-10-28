import {answerTypes, gameStatus, answerTimeLimits, gameData} from './game-data';
import {getTimer} from '../../gameplay';

export default class GameModel {
  constructor(data = gameData) {
    this.data = data;
  }

  start() {
    this.gameNumber = 0;
    this.gameStatus = gameStatus.PLAY;
  }

  update(newState) {
    this.state = newState;
    return this.state;
  }

  getCurrentLevel() {
    return this.data[this.gameNumber];
  }

  nextLevel() {
    this.gameNumber++;
    if (!this.data[this.gameNumber]) {
      this.end(this.state);
      return;
    }
  }

  changeLives(result) {
    let state = this.state;
    if (!result) {
      state.lives--;
    }
    if (state.lives === 0) {
      this.end(this.state);
    }
    this.update(state);
  }

  changeStats(result) {
    let state = this.state;
    if (result) {
      if (this.state.time > answerTimeLimits.FAST) {
        state.results[this.gameNumber] = answerTypes.FAST;
      } else if (this.state.time < answerTimeLimits.SLOW) {
        state.results[this.gameNumber] = answerTypes.SLOW;
      } else {
        state.results[this.gameNumber] = answerTypes.CORRECT;
      }
    } else {
      state.results[this.gameNumber] = answerTypes.WRONG;
    }
    this.update(state);
  }

  tick() {
    let time = getTimer(this.state.time).tick().value;
    this.state.time = time;
    this.update(this.state);
  }

  end() {

  }

}
