export const initialData = {
  time: 30,
  lives: 3,
  results: [`unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`]
};

export const gameTypes = {
  GAME_1: `two-of-two`,
  GAME_2: `tinder-like`,
  GAME_3: `one-of-three`
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

export const gameStatus = {
  PLAY: `play`,
  END: `end`
};

export const gameDataAnswerType = {
  PAINT: `paint`,
  PHOTO: `photo`
};

export const TIMER_INTERVAL = 1000;
export const TIME_LIMIT = 30;

export const gameData = [
  {
    type: `two-of-two`,
    question: `Угадайте для каждого изображения фото или рисунок?`,
    answers: [
      {
        image: {
          url: `https://k42.kn3.net/D2F0370D6.jpg`
        },
        type: `paint`
      },
      {
        image: {
          url: `https://i.imgur.com/RpikbHf.jpg`
        },
        type: `photo`
      }
    ]
  },

  {
    type: `two-of-two`,
    question: `Угадайте для каждого изображения фото или рисунок?`,
    answers: [
      {
        image: {
          url: `https://i.imgur.com/aeGiSux.jpg`
        },
        type: `photo`
      },
      {
        image: {
          url: `https://i.imgur.com/PDotHBD.jpg`
        },
        type: `paint`
      }
    ]
  },

  {
    type: `two-of-two`,
    question: `Угадайте для каждого изображения фото или рисунок?`,
    answers: [
      {
        image: {
          url: `https://i.imgur.com/BkPQMuI.jpg`
        },
        type: `photo`
      },
      {
        image: {
          url: `https://i.imgur.com/ceCoH2J.jpg`
        },
        type: `paint`
      }
    ]
  },

  {
    type: `tinder-like`,
    question: `Угадай, фото или рисунок?`,
    answers: [
      {
        image: {
          url: `https://i.imgur.com/vu9P5mN.jpg`
        },
        type: `photo`
      }
    ]
  },

  {
    type: `tinder-like`,
    question: `Угадай, фото или рисунок?`,
    answers: [
      {
        image: {
          url: `https://i.imgur.com/HuKwvSf.png`
        },
        type: `paint`
      }
    ]
  },

  {
    type: `tinder-like`,
    question: `Угадай, фото или рисунок?`,
    answers: [
      {
        image: {
          url: `https://i.imgur.com/z9tIaTD.jpg`
        },
        type: `photo`
      }
    ]
  },

  {
    type: `one-of-three`,
    question: `Найдите рисунок среди изображений`,
    answers: [
      {
        image: {
          url: `https://i.imgur.com/qZwjhVy.jpg`
        },
        type: `paint`
      },
      {
        image: {
          url: `https://i.imgur.com/On9JJW9.jpg`
        },
        type: `photo`
      },
      {
        image: {
          url: `https://i.imgur.com/kT9OOOh.jpg`
        },
        type: `photo`
      }
    ]
  },

  {
    type: `one-of-three`,
    question: `Найдите фото среди изображений`,
    answers: [
      {
        image: {
          url: `https://s-media-cache-ak0.pinimg.com/originals/48/f7/f5/48f7f52499aca80229078665ab42d9ff.jpg`
        },
        type: `paint`
      },
      {
        image: {
          url: `https://i.pinimg.com/736x/a0/d1/db/a0d1db095c8f74a1ef7fe1cd842c9d17--urban-street-photography-street-photography-people.jpg`
        },
        type: `paint`
      },
      {
        image: {
          url: `https://i.imgur.com/dk4I2C0.jpg`
        },
        type: `photo`
      }
    ]
  },

  {
    type: `one-of-three`,
    question: `Найдите рисунок среди изображений`,
    answers: [
      {
        image: {
          url: `https://i.pinimg.com/736x/01/4b/b5/014bb53e327c25a9cba3135a8ab5ec67--england-uk-london-england.jpg`
        },
        type: `photo`
      },
      {
        image: {
          url: `https://i.imgur.com/p7Qo4WX.jpg`
        },
        type: `paint`
      },
      {
        image: {
          url: `https://www.ecenglish.com/globalassets/new-york/new-york-carousel/8375l.jpg`
        },
        type: `photo`
      }
    ]
  },

  {
    type: `one-of-three`,
    question: `Найдите рисунок среди изображений`,
    answers: [
      {
        image: {
          url: `https://i.imgur.com/3bv6gFQ.jpg`
        },
        type: `paint`
      },
      {
        image: {
          url: `https://s-media-cache-ak0.pinimg.com/originals/b9/8c/cd/b98ccd0f8e24c12ce2d251ec34b9aeee.jpg`
        },
        type: `photo`
      },
      {
        image: {
          url: `https://i.pinimg.com/736x/13/10/d8/1310d814de5f37a510c3a28d6f1d2b96--shiny-hair-wavy-hair.jpg`
        },
        type: `photo`
      }
    ]
  }
];
