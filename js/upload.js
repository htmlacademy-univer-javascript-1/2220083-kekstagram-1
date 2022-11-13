import { onFormInput, clearField } from './hashtags-pristine.js';
import { isEscape } from './utils.js';

const form = document.querySelector('.img-upload__form');
const file = document.querySelector('#upload-file');
const imageOverlay = document.querySelector('.img-upload__overlay');
const buttonCancel = document.querySelector('#upload-cancel');
const hashtags = document.querySelector('.text__hashtags');
const comment = document.querySelector('.text__description');

const onCloseClick = () => {
  imageOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');

  file.value = '';
  hashtags.value = '';
  comment.value = '';

  clearField();

  form.removeEventListener('submit', onFormInput);
  buttonCancel.removeEventListener('click', onCloseClick);
};

const onDocumentEscKeyDown = (evt) => {
  if(isEscape(evt) && !evt.target.classList.contains('text__description') && !evt.target.classList.contains('text__hashtags')) {
    onCloseClick();
    document.removeEventListener('keydown', onDocumentEscKeyDown);
  }
};

const initUpload = () => {
  imageOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  buttonCancel.addEventListener('click', onCloseClick);
  document.addEventListener('keydown', onDocumentEscKeyDown);
  form.addEventListener('submit', onFormInput);
};

file.addEventListener('input', initUpload);
