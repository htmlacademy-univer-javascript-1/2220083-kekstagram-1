import { isEscape } from './util.js';

const COMMENTS_STEP = 5;
let currentCount = COMMENTS_STEP;
const arrayLi = [];

const bigPicture = document.querySelector('.big-picture');
const closeButton = document.querySelector('.big-picture__cancel');
const commentLoader = document.querySelector('.comments-loader');

const commentAbout = bigPicture.querySelector('.social__comments');
const commentCopy = commentAbout.querySelector('li');

const commentsCount = bigPicture.querySelector('.social__comment-count');
const commentCount = commentsCount.querySelector('.comments-count');

const showComments = commentsCount.querySelector('.showCount');
showComments.textContent = COMMENTS_STEP;

const onDocumentEscKeyDown = (evt) => {
  if(isEscape(evt) && !evt.target.classList.contains('big-picture')){
    bigPicture.classList.add('hidden');
    document.querySelector('body').classList.remove('modal-open');

    document.removeEventListener('keydown', onDocumentEscKeyDown);
  }
};

const onUpdateMoreClick = () => {

  if (currentCount >= arrayLi.length){
    currentCount = arrayLi.length;
    commentLoader.classList.add('hidden');
  }

  const currentComments = arrayLi.slice(0,currentCount);

  for (let i = 0; i < currentComments.length; i++){
    currentComments[i].classList.remove('hidden');
  }

  showComments.textContent = currentCount;
  currentCount += COMMENTS_STEP;
};

const addComments = (comments, array) => {
  array.length = 0;
  commentAbout.innerHTML = '';
  for (let i = 0; i < comments.length; i++) {

    const newElement = commentCopy.cloneNode(true);

    newElement.querySelector('p').textContent = comments[i]['message'];
    newElement.querySelector('img').src = comments[i]['avatar'];
    newElement.querySelector('img').alt = comments[i]['name'];

    array.push(newElement);
    commentAbout.appendChild(newElement);
  }

  for (let n = COMMENTS_STEP; n < arrayLi.length; n++){
    arrayLi[n].classList.add('hidden');
  }

  currentCount += COMMENTS_STEP;

  commentLoader.addEventListener('click', onUpdateMoreClick);
};

const getFullPictures = (photo) => {
  document.addEventListener('keydown', onDocumentEscKeyDown);
  bigPicture.classList.remove('hidden');

  const newImg = bigPicture.querySelector('.big-picture__img');
  const img = newImg.querySelector('img');

  const newImgSocial = bigPicture.querySelector('.big-picture__social');
  const likes = newImgSocial.querySelector('.likes-count');

  const description = bigPicture.querySelector('.social__caption');

  img.src = photo.url;
  likes.textContent = photo.likes;
  commentCount.textContent = photo.comments.length;
  description.textContent = photo.description;

  addComments(photo.comments, arrayLi);

  if (photo.comments.length <= COMMENTS_STEP){
    showComments.textContent = photo.comments.length ;
    commentLoader.classList.add('hidden');
  }
  else{
    showComments.textContent = COMMENTS_STEP;
    commentLoader.classList.remove('hidden');
  }
  document.querySelector('.social__comment-count').classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');
};

closeButton.addEventListener('click', ()=> {
  bigPicture.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
  commentLoader.classList.add('hidden');
  currentCount = COMMENTS_STEP;
  arrayLi.length = 0;
  commentLoader.removeEventListener('click', onUpdateMoreClick);
});

export {getFullPictures};
