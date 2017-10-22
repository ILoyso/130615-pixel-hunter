import StatsView from './stats-view';
import moduleGreeting from '../greeting/greeting';
import {showScreen} from '../../utils';
import {addToHistory} from '../../gameplay';


export default (state) => {

  const statsScreen = new StatsView(state);

  statsScreen.onBackClick = () => {
    addToHistory(statsScreen.gameBlock);
    showScreen(moduleGreeting);
  };

  return statsScreen;
};
