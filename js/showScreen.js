import moduleFooter from './blocks/footer';

const mainScreen = document.querySelector(`.central`);

const showScreen = (screen) => {
  mainScreen.innerHTML = ``;
  mainScreen.appendChild(screen);
  mainScreen.appendChild(moduleFooter);
};

export default showScreen;
