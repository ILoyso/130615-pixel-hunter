import IntroView from './intro-view';
import moduleGreeting from '../greeting/greeting';
import {showScreen} from '../../utils';

const introScreen = new IntroView();

introScreen.onButtonClick = () => {
  showScreen(moduleGreeting);
};

export default introScreen.element;

