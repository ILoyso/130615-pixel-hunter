export const initialData = {
  time: 30,
  lives: 3,
  results: [`unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`]
};

export const gameTypes = {
  GAME_1: `game1`,
  GAME_2: `game2`,
  GAME_3: `game3`
};

export const answerTypes = {
  CORRECT: `correct`,
  WRONG: `wrong`,
  FAST: `fast`,
  SLOW: `slow`
};

export const answerTimeLimits = {
  SLOW: 10,
  FAST: 20
};

export const gameData = [
  {
    type: `game1`,
    text: `Угадайте для каждого изображения фото или рисунок?`,
    answers: [
      {
        imgSrc: `https://k42.kn3.net/D2F0370D6.jpg`,
        imgType: `paint`
      },
      {
        imgSrc: `https://i.imgur.com/RpikbHf.jpg`,
        imgType: `photo`
      }
    ]
  },

  {
    type: `game1`,
    text: `Угадайте для каждого изображения фото или рисунок?`,
    answers: [
      {
        imgSrc: `https://i.imgur.com/aeGiSux.jpg`,
        imgType: `photo`
      },
      {
        imgSrc: `https://i.imgur.com/PDotHBD.jpg`,
        imgType: `paint`
      }
    ]
  },

  {
    type: `game1`,
    text: `Угадайте для каждого изображения фото или рисунок?`,
    answers: [
      {
        imgSrc: `https://i.imgur.com/BkPQMuI.jpg`,
        imgType: `photo`
      },
      {
        imgSrc: `https://i.imgur.com/ceCoH2J.jpg`,
        imgType: `paint`
      }
    ]
  },

  {
    type: `game2`,
    text: `Угадай, фото или рисунок?`,
    answers: [
      {
        imgSrc: `https://i.imgur.com/vu9P5mN.jpg`,
        imgType: `photo`
      }
    ]
  },

  {
    type: `game2`,
    text: `Угадай, фото или рисунок?`,
    answers: [
      {
        imgSrc: `https://i.imgur.com/HuKwvSf.png`,
        imgType: `paint`
      }
    ]
  },

  {
    type: `game2`,
    text: `Угадай, фото или рисунок?`,
    answers: [
      {
        imgSrc: `https://i.imgur.com/z9tIaTD.jpg`,
        imgType: `photo`
      }
    ]
  },

  {
    type: `game3`,
    text: `Найдите рисунок среди изображений`,
    answers: [
      {
        imgSrc: `https://i.imgur.com/qZwjhVy.jpg`,
        imgType: `paint`
      },
      {
        imgSrc: `https://i.imgur.com/On9JJW9.jpg`,
        imgType: `photo`
      },
      {
        imgSrc: `https://i.imgur.com/kT9OOOh.jpg`,
        imgType: `photo`
      }
    ]
  },

  {
    type: `game3`,
    text: `Найдите рисунок среди изображений`,
    answers: [
      {
        imgSrc: `https://s-media-cache-ak0.pinimg.com/originals/48/f7/f5/48f7f52499aca80229078665ab42d9ff.jpg`,
        imgType: `photo`
      },
      {
        imgSrc: `https://i.pinimg.com/736x/a0/d1/db/a0d1db095c8f74a1ef7fe1cd842c9d17--urban-street-photography-street-photography-people.jpg`,
        imgType: `photo`
      },
      {
        imgSrc: `https://i.imgur.com/dk4I2C0.jpg`,
        imgType: `paint`
      }
    ]
  },

  {
    type: `game3`,
    text: `Найдите рисунок среди изображений`,
    answers: [
      {
        imgSrc: `https://i.pinimg.com/736x/01/4b/b5/014bb53e327c25a9cba3135a8ab5ec67--england-uk-london-england.jpg`,
        imgType: `photo`
      },
      {
        imgSrc: `https://i.imgur.com/p7Qo4WX.jpg`,
        imgType: `paint`
      },
      {
        imgSrc: `https://www.ecenglish.com/globalassets/new-york/new-york-carousel/8375l.jpg`,
        imgType: `photo`
      }
    ]
  },

  {
    type: `game3`,
    text: `Найдите рисунок среди изображений`,
    answers: [
      {
        imgSrc: `https://i.imgur.com/3bv6gFQ.jpg`,
        imgType: `paint`
      },
      {
        imgSrc: `https://s-media-cache-ak0.pinimg.com/originals/b9/8c/cd/b98ccd0f8e24c12ce2d251ec34b9aeee.jpg`,
        imgType: `photo`
      },
      {
        imgSrc: `https://i.pinimg.com/736x/13/10/d8/1310d814de5f37a510c3a28d6f1d2b96--shiny-hair-wavy-hair.jpg`,
        imgType: `photo`
      }
    ]
  }
];
