import {gameDataAnswerType} from '../blocks/games/game-data';

export default (data) => {
  data.forEach((item) => {
    item.answers.forEach((it) => {
      if (it.type === `painting`) {
        it.type = gameDataAnswerType.PAINT;
      }
    });
  });
  return data;
};
