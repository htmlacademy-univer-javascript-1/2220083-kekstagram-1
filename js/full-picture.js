import { photos } from './data.js';

const bigPicture = document.querySelector('.big-picture');
const closeButton = document.querySelector('.big-picture__cancel');
const pictures = document.querySelectorAll('.picture');

const addPictureEvenHandler = (picture, pictureData) =>{
  picture.addEventListener('click', () => {
    bigPicture.classList.remove('hidden');

    bigPicture.querySelector('.big-picture__img').querySelector('img').src = pictureData.url;

    const numberLikes = bigPicture.querySelector('.big-picture__social');
    numberLikes.querySelector('.likes-count').textContent = pictureData.likes;

    const commentsCount = bigPicture.querySelector('.social__comment-count');
    commentsCount.querySelector('.comments-count').textContent = pictureData.comments.length;

    bigPicture.querySelector('.social__caption').textContent = pictureData.description;

    const comments = bigPicture.querySelector('.social__comments');
    const commentCopy = comments.querySelector('li');

    comments.innerHTML = '';

    const addComments = () => {
      for(let i = 0; i < pictureData.comments.length; i++){
        const newItem = commentCopy.cloneNode(true);

        newItem.querySelector('p').textContent = pictureData.comments[i]['message'];
        newItem.querySelector('img').src = pictureData.comments[i]['avatar'];
        newItem.querySelector('img').alt= pictureData.comments[i]['name'];

        comments.appendChild(newItem);
      }
    };

    addComments();
    document.querySelector('.social__comment-count').classList.add('hidden');
    document.querySelector('.comments-loader').classList.add('hidden');
    document.querySelector('body').classList.add('modal-open');
  });
};

closeButton.addEventListener('click', ()=> {
  bigPicture.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
});

const onDocumentEscKeyDown = (evt) => {
  if(evt.key === 'Escape'){
    bigPicture.classList.add('hidden');
    document.querySelector('body').classList.remove('modal-open');

    document.removeEventListener('keydown', onDocumentEscKeyDown);
  }
};

document.addEventListener('keydown', onDocumentEscKeyDown);

const makeBigPictures = () =>{
  for(let i = 0; i < pictures.length; i++){
    addPictureEvenHandler(pictures[i],photos[i]);
  }
};

makeBigPictures();
