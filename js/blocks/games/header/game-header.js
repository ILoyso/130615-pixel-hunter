const drawHeart = (full) => {
  return `<img src="img/heart__${full ? `full` : `empty`}.svg" class="game__heart" alt="Life" width="32" height="32">`;
};

const getHeader = (data) => String.raw`<header class="header">
    <div class="header__back">
      <button class="back">
        <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
        <img src="img/logo_small.svg" width="101" height="44">
      </button>
    </div>
    <h1 class="game__timer">${data.time}</h1>
    <div class="game__lives">
      ${drawHeart(data.lives > 2)}
      ${drawHeart(data.lives > 1)}
      ${drawHeart(data.lives > 0)}
    </div>
  </header>`;

export default getHeader;
