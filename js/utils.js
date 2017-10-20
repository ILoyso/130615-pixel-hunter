const mainScreen = document.querySelector(`.central`);

export const showScreen = (screen) => {
  mainScreen.innerHTML = ``;
  mainScreen.appendChild(screen);
};

export const createElement = (string) => {
  let wrapper = document.createElement(`div`);
  wrapper.innerHTML = string;
  return wrapper;
};

