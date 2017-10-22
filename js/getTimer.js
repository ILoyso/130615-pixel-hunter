const getTimer = (time) => {
  if (time < 0) {
    return `time is over`;
  }
  if (typeof time !== `number`) {
    return 0;
  }
  return {
    value: time,
    tick() {
      return getTimer(time - 1);
    },
    reset() {
      return getTimer(0);
    }
  };
};

export default getTimer;
