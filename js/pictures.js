import { photos } from './data.js';
import { addPictureEvenHandler } from './full-picture.js';

const picture = document.querySelector('.pictures');
const templatePictures = document.querySelector('#picture').content.querySelector('.picture');

const newFragment = document.createDocumentFragment();

const renderPhoto = (photo) => {
  const item = templatePictures.cloneNode(true);

  item.querySelector('.picture__img').src = photo.url;
  item.querySelector('.picture__likes').textContent = photo.likes;
  item.querySelector('.picture__comments').textContent = photo.comments.length;

  addPictureEvenHandler(item, photo);
  return item;
};

const renderPhotos = () => {
  photos.forEach((photo) => {
    newFragment.appendChild(renderPhoto(photo));
  });

  picture.appendChild(newFragment);
};

renderPhotos();
