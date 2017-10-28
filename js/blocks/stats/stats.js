import StatsView from './stats-view';
import App from '../../application';
import {showScreen} from '../../utils';
import {addToHistory} from '../../gameplay';

class StatsScreen {

  init(state) {
    this.view = new StatsView(state);
    showScreen(this.view);

    this.view.onBackClick = () => {
      addToHistory(this.view.gameBlock);
      App.showGreeting();
    };
  }
}

export default new StatsScreen();

