const screens = document.querySelectorAll(`template`);
const lastScreen = screens.length - 1;
const mainScreen = document.querySelector(`.central`);
let currentScreen = 0;
const AROOW_LEFT_KEY_CODE = 37;
const ARROW_RIGHT_KEY_CODE = 39;

const showScreen = function (number) {
  mainScreen.innerHTML = screens[number].innerHTML;
};

showScreen(currentScreen);

const changeScreen = function (evt) {
  if ((evt.altKey) && (evt.keyCode === AROOW_LEFT_KEY_CODE)) {
    if (currentScreen === 0) {
      currentScreen = lastScreen;
      showScreen(currentScreen);
    } else {
      showScreen(--currentScreen);
    }
  } else if ((evt.altKey) && (evt.keyCode === ARROW_RIGHT_KEY_CODE)) {
    if (currentScreen < lastScreen) {
      showScreen(++currentScreen);
    } else {
      currentScreen = 0;
      showScreen(currentScreen);
    }
  }
};

document.addEventListener(`keydown`, function (evt) {
  changeScreen(evt);
});
