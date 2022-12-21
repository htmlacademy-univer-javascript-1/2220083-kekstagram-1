const MIN_PLURAL_DIGIT = 5;
const MIN_DECIMAL_NUMBER = 10;
const MAX_DECIMAL_NUMBER = 19;
const MIN_HUNDREDTH_NUMBER = 100;
const DELAY = 500;

const isEscape = (evt) => evt.key === 'Escape';

const debounce = (callback) => {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => callback.apply(this, rest), DELAY);
  };
};

const mixArray = (array) => {
  for(let firstIndex = array.length - 1; firstIndex > 0; firstIndex--) {
    const randomIndex = Math.floor(Math.random() * (firstIndex + 1));

    [array[firstIndex], array[randomIndex]] = [array[randomIndex], array[firstIndex]];
  }

  return array;
};

const declineByNumber = (number, nominative, genitiveSingular, genitivePlural) => {
  const lastNumber = number % MIN_DECIMAL_NUMBER;
  if (lastNumber === 0 || lastNumber >= MIN_PLURAL_DIGIT && lastNumber < MIN_DECIMAL_NUMBER
      || number % MIN_HUNDREDTH_NUMBER > MIN_DECIMAL_NUMBER && number % MIN_HUNDREDTH_NUMBER <= MAX_DECIMAL_NUMBER) {
    return genitivePlural;
  }
  else if (lastNumber > 1 && lastNumber < MIN_PLURAL_DIGIT) {
    return genitiveSingular;
  }
  return nominative;
};

export {isEscape, debounce, mixArray, declineByNumber};
