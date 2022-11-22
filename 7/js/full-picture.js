import { photos } from './data.js';
const bigPicture = document.querySelector('.big-picture');
const pictures = document.querySelectorAll('.picture');
const closeButton = document.querySelector('.big-picture__cancel');

const addPictureEvenHandler = (picture, pictureData) =>{
  picture.addEventListener('click', () => {
    bigPicture.classList.remove('hidden');

    const newImg = bigPicture.querySelector('.big-picture__img');
    const img = newImg.querySelector('img');

    const newImgSocial = bigPicture.querySelector('.big-picture__social');
    const likes = newImgSocial.querySelector('.likes-count');

    const commentsCount = bigPicture.querySelector('.social__comment-count');
    const commentCount = commentsCount.querySelector('.comments-count');
    const commentOn = bigPicture.querySelector('.social__comments');

    const description = bigPicture.querySelector('.social__caption');

    img.src = pictureData.url;
    likes.textContent = pictureData.likes;
    commentCount.textContent = pictureData.comments.length;
    description.textContent = pictureData.description;

    const commentCopy = commentOn.querySelector('li');

    commentOn.innerHTML = '';

    const addComments = () => {
      for(let i = 0; i < pictureData.comments.length; i++){
        const newElement = commentCopy.cloneNode(true);

        newElement.querySelector('p').textContent = pictureData.comments[i]['message'];
        newElement.querySelector('img').src = pictureData.comments[i]['avatar'];
        newElement.querySelector('img').alt= pictureData.comments[i]['name'];

        commentOn.appendChild(newElement);
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

const getFullPictures = () =>{
  for(let i = 0; i < pictures.length; i++){
    addPictureEvenHandler(pictures[i],photos[i]);
  }
};

getFullPictures();
