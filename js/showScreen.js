import moduleFooter from './blocks/footer';
// import moduleHeader from './blocks/header';

const mainScreen = document.querySelector(`.central`);

const showScreen = (screen) => {
  mainScreen.innerHTML = ``;
  // mainScreen.appendChild(moduleHeader);
  mainScreen.appendChild(screen);
  mainScreen.appendChild(moduleFooter);
};

export default showScreen;
