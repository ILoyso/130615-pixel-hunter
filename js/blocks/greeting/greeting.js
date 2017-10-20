import GreetingView from './greeting-view';
import moduleRules from '../rules/rules';
import {showScreen} from '../../utils';

const greetingScreen = new GreetingView();

greetingScreen.onButtonClick = () => {
  showScreen(moduleRules);
};

export default greetingScreen.element;
