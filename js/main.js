const Key = {
  ARROW_LEFT_KEY_CODE: 37,
  ARROW_RIGHT_KEY_CODE: 39
};
const screens = document.querySelectorAll(`template`);
const firstScreen = 0;
const lastScreen = screens.length - 1;
const mainScreen = document.querySelector(`.central`);
let currentScreen = 0;

const showScreen = (number) => {
  mainScreen.innerHTML = screens[number].innerHTML;
};

showScreen(currentScreen);

const changeScreen = (evt) => {
  if ((evt.altKey) && (evt.keyCode === Key.ARROW_LEFT_KEY_CODE)) {
    if (currentScreen === firstScreen) {
      currentScreen = lastScreen;
      showScreen(currentScreen);
    } else {
      showScreen(--currentScreen);
    }
  } else if ((evt.altKey) && (evt.keyCode === Key.ARROW_RIGHT_KEY_CODE)) {
    if (currentScreen < lastScreen) {
      showScreen(++currentScreen);
    } else {
      currentScreen = firstScreen;
      showScreen(currentScreen);
    }
  }
};

document.addEventListener(`keydown`, function (evt) {
  changeScreen(evt);
});
