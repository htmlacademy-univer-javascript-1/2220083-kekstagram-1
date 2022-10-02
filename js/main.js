const COUNT = 25;

const NAME = [
  'Артем',
  'Елизавета',
  'Дмитрий'
];

const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const descriptions = [
  'Необычный снимок',
  'Фотокарта',
  'Как вам стиль фотографии?'
];

const arrayObjects = [];

const getRandomInt = (min, max) => {
  if (min < 0 || max < 0) {
    return -1;
  }
  if (min > max){
    [min, max] = [max, min];
  }
  return Math.floor(Math.random() * (max + 1 - min)) + min;
};

const arrayComments = (item) => {
  const arr = [];
  for (let i = 0; i < item; i++){
    arr.push({
      id: i,
      avatar: 'img/avatar-{{getRandomInt(1, 6)}}.svg',
      message: MESSAGE[getRandomInt(0, MESSAGE.length - 1)],
      name: NAME[getRandomInt(0, NAME.length - 1)]
    });
  }
  return arr;
};

const addPhotos = () => {
  for (let i = 0; i < COUNT; i++){
    arrayObjects.push({
      id: i,
      url: 'photos/{{i + 1}}.jpg',
      description: descriptions[getRandomInt(0, descriptions.length - 1)],
      likes: getRandomInt(15, 200),
      comments: arrayComments(getRandomInt(0, 2))
    });
  }
};

addPhotos();

console.log(arrayObjects);
