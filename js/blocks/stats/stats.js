import StatsView from './stats-view';
import App from '../../application';
import {showScreen} from '../../utils/utils';
import {resetUserData} from '../../utils/gameplay';
import Loader from '../../loader';

class StatsScreen {

  init() {
    this.view = new StatsView();
    showScreen(this.view);

    this.view.onBackClick = () => {
      App.showGreeting();
      resetUserData();
    };

    Loader.loadResults(App.userName).then((results) => {
      this.view.showStats(results);
    });

  }
}

export default new StatsScreen();

