const sumResults = (answers, lives) => {
  const COUNT_OF_ANSWERS = 10;
  const CORRECT_POINTS = 100;
  const SLOW_POINTS = 50;
  const FAST_POINTS = 150;
  const LIVE_POINTS = 50;
  const answersError = -1;

  if (!(Array.isArray(answers))) {
    throw new Error(`Not an array`);
  }
  if (typeof lives !== `number`) {
    throw new Error(`Not a number`);
  }
  if (answers.length < COUNT_OF_ANSWERS) {
    return answersError;
  }

  let summary = lives * LIVE_POINTS;

  for (let i = 0; i < COUNT_OF_ANSWERS; i++) {
    switch (answers[i]) {
      case `ok`:
        summary += CORRECT_POINTS;
        break;
      case `fast`:
        summary += FAST_POINTS;
        break;
      case `slow`:
        summary += SLOW_POINTS;
        break;
    }
  }
  return summary;
};

export default sumResults;
