import RulesView from './rules-view';
import moduleGreeting from '../greeting/greeting';
import {showScreen} from '../../utils';
import {letsPlay} from '../../gameplay';

const rulesScreen = new RulesView();

rulesScreen.onButtonClick = letsPlay;

rulesScreen.onBackClick = () => {
  showScreen(moduleGreeting);
};

export default rulesScreen;
