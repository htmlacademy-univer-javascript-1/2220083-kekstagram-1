const getRandomInteger = (min, max) => {
  if (min < 0 || max < 0) {
    return -1;
  }
  if (min > max){
    [min, max] = [max, min];
  }
  return Math.floor(Math.random() * (max + 1 - min)) + min;
};

const checkStringLength = (str, max = 100) => str.length <= max;

export {getRandomInteger, checkStringLength};
