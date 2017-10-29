import GreetingView from './greeting-view';
import App from '../../application';
import {showScreen} from '../../utils/utils';

class GreetingScreen {
  constructor() {
    this.view = new GreetingView();
  }

  init() {
    showScreen(this.view);

    this.view.onButtonClick = () => {
      App.showRules();
    };
  }
}

export default new GreetingScreen();

