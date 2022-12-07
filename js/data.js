import {getRandomInteger} from './util.js';

const COUNT = 25;

const NAME = [
  'Артем',
  'Елизавета',
  'Дмитрий'
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const DESCRIPTIONS = [
  'Необычный снимок',
  'Фотокарта',
  'Как вам стиль фотографии?'
];

const photos = [];

const Likes = {
  MIN: 15,
  MAX: 200
};

const commentsArray = (count) => {
  const array = [];
  for(let i = 0; i < count; i++){
    array.push({
      id: i,
      avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
      message: MESSAGES[getRandomInteger(0, MESSAGES.length - 1)],
      name: NAME[getRandomInteger(0, NAME.length - 1)]
    });
  }

  return array;
};

const addPhotos = () => {
  for(let i = 0; i < COUNT; i++){
    photos.push({
      id: i,
      url: `photos/${i + 1}.jpg`,
      description: DESCRIPTIONS[getRandomInteger(0, DESCRIPTIONS.length - 1)],
      likes: getRandomInteger(Likes.MIN, Likes.MAX),
      comments: commentsArray(getRandomInteger(1, 20))
    });
  }
};

addPhotos();

export {photos};
