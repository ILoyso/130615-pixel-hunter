import moduleGreeting from './blocks/greeting/greeting';
import moduleFirstGame from './blocks/games/game-1';
import moduleSecondGame from './blocks/games/game-2';
import moduleThirdGame from './blocks/games/game-3';
import {showScreen} from './utils';
import gameData from './blocks/games/gameData';
import moduleStats from './blocks/stats/stats';

const initialData = {
  time: 30,
  lives: 3,
  results: [`unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`]
};

export let userData = JSON.parse(JSON.stringify(initialData));
let gameNumber = 0;

export const resetUserData = () => {
  userData = JSON.parse(JSON.stringify(initialData));
};

export const resetGame = () => {
  gameNumber = 0;
};

export const changeStats = (result) => {
  if (result) {
    userData.results[gameNumber - 1] = `correct`;
  } else {
    userData.results[gameNumber - 1] = `wrong`;
  }
};

export const changeLives = () => {
  userData.lives--;
};

export const goBack = () => {
  resetUserData();
  resetGame();
  showScreen(moduleGreeting);
};

export const letsPlay = () => {
  if ((gameNumber === gameData.length) || (userData.lives < 1)) {
    moduleStats(userData);
    return;
  }

  switch (gameData[gameNumber].type) {
    case `game1`:
      moduleFirstGame(gameData[gameNumber], userData);
      gameNumber++;
      break;
    case `game2`:
      moduleSecondGame(gameData[gameNumber], userData);
      gameNumber++;
      break;
    case `game3`:
      moduleThirdGame(gameData[gameNumber], userData);
      gameNumber++;
      break;
  }
};