import StatsView from './stats-view';
import {userData, goBack, addToHistory} from '../../gameplay';


export default (state) => {

  const statsScreen = new StatsView(state);

  statsScreen.onBackClick = () => {
    addToHistory(userData);
    goBack();
  };

  return statsScreen.element;
};
