import IntroView from './intro-view';
import App from '../../application';
import {showScreen} from '../../utils';

class IntroScreen {
  constructor() {
    this.view = new IntroView();
  }

  init() {
    showScreen(this.view);

    this.view.onButtonClick = () => {
      App.showGreeting();
    };
  }
}

export default new IntroScreen();
