import RulesView from './rules-view';
import App from '../../application';
import {showScreen} from '../../utils/utils';

class RulesScreen {
  constructor() {
    this.view = new RulesView();
  }

  init() {
    showScreen(this.view);

    this.view.onBackClick = () => {
      App.showGreeting();
    };

    this.view.onButtonClick = (evt) => {
      evt.preventDefault();
      App.userName = this.view.inputText.value;
      App.showGame();
    };
  }
}

export default new RulesScreen();

