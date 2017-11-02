import assert from 'assert';
import {getTimer} from './gameplay';

describe(`Get timer`, () => {

  it(`should return 29 if time is 30`, () => {
    const timer = getTimer(30);
    const newValue = timer.tick();
    const expectedResult = 29;
    assert.equal(newValue.value, expectedResult);
  });

  it(`should return 15 if time is 16`, () => {
    const timer = getTimer(16);
    const newValue = timer.tick();
    const expectedResult = 15;
    assert.equal(newValue.value, expectedResult);
  });

  it(`should return 1 if time is 2`, () => {
    const timer = getTimer(2);
    const newValue = timer.tick();
    const expectedResult = 1;
    assert.equal(newValue.value, expectedResult);
  });

  it(`should return 'time is over' if time < 0`, () => {
    const timer = getTimer(0);
    const newValue = timer.tick();
    const expectedResult = `time is over`;
    assert.equal(newValue, expectedResult);
  });

  it(`should return '0' if value is not a number`, () => {
    const timer = getTimer(`test`);
    const expectedResult = 0;
    assert.equal(timer, expectedResult);
  });

  it(`should return '0' if value is empty`, () => {
    const timer = getTimer();
    const expectedResult = 0;
    assert.equal(timer, expectedResult);
  });

});
