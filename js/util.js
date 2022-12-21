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

export {isEscape, debounce, mixArray};
