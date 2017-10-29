import StatsView from './stats-view';
import App from '../../application';
import {showScreen} from '../../utils/utils';
import {addToHistory, resetUserData} from '../../utils/gameplay';

class StatsScreen {

  init(state) {
    this.view = new StatsView(state);
    showScreen(this.view);

    this.view.onBackClick = () => {
      addToHistory(this.view.gameBlock);
      App.showGreeting();
      resetUserData();
    };
  }
}

export default new StatsScreen();

