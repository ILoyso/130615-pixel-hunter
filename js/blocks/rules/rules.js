import RulesView from './rules-view';
import {letsPlay, goBack} from '../../gameplay';

const rulesScreen = new RulesView();

rulesScreen.onButtonClick = () => {
  letsPlay();
};

rulesScreen.onBackClick = () => {
  goBack();
};

export default rulesScreen.element;
