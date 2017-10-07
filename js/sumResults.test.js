import assert from 'assert';
import sumResults from './sumResults';

describe(`Summary results`, () => {

  it(`should return -1 if answers less than 10`, () => {
    const answers = [`ok`, `fast`, `slow`];
    const lives = 3;
    const expectedResult = -1;
    assert.equal(sumResults(answers, lives), expectedResult);
  });

  it(`should return 1150 if all answers are correct and 3 lives`, () => {
    const answers = [`ok`, `ok`, `ok`, `ok`, `ok`, `ok`, `ok`, `ok`, `ok`, `ok`];
    const lives = 3;
    const expectedResult = 1150;
    assert.equal(sumResults(answers, lives), expectedResult);
  });

  it(`should return 1650 if all answers are fast and 3 lives`, () => {
    const answers = [`fast`, `fast`, `fast`, `fast`, `fast`, `fast`, `fast`, `fast`, `fast`, `fast`];
    const lives = 3;
    const expectedResult = 1650;
    assert.equal(sumResults(answers, lives), expectedResult);
  });

  it(`should return 550 if all answers are slow and 1 live`, () => {
    const answers = [`slow`, `slow`, `slow`, `slow`, `slow`, `slow`, `slow`, `slow`, `slow`, `slow`];
    const lives = 1;
    const expectedResult = 550;
    assert.equal(sumResults(answers, lives), expectedResult);
  });

  it(`should return 1100 if 3 fast, 3 slow, 4 correct answers and 2 lives`, () => {
    const answers = [`fast`, `fast`, `fast`, `slow`, `slow`, `slow`, `ok`, `ok`, `ok`, `ok`];
    const lives = 2;
    const expectedResult = 1100;
    assert.equal(sumResults(answers, lives), expectedResult);
  });

  it(`should return 0 if no lives count`, () => {
    const answers = [`fast`, `fast`, `fast`, `slow`, `slow`, `slow`, `ok`, `ok`, `ok`, `ok`];
    const expectedResult = 0;
    assert.equal(sumResults(answers), expectedResult);
  });

  it(`should return 0 if lives is not a number`, () => {
    const answers = [`fast`, `fast`, `fast`, `slow`, `slow`, `slow`, `ok`, `ok`, `ok`, `ok`];
    const expectedResult = 0;
    assert.equal(sumResults(answers, `test`), expectedResult);
    assert.equal(sumResults(answers, [1, 2, 3]), expectedResult);
    assert.equal(sumResults(answers, {}), expectedResult);
  });

  it(`should return 0 if answers is not an array`, () => {
    const lives = `test`;
    const expectedResult = 0;
    assert.equal(sumResults(`test`, lives), expectedResult);
    assert.equal(sumResults(null, lives), expectedResult);
    assert.equal(sumResults(25, lives), expectedResult);
    assert.equal(sumResults({}, lives), expectedResult);
  });

});
