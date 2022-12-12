import { isEscape } from './util.js';

const file = document.querySelector('#upload-file');
const cancelButton = document.querySelector('#upload-cancel');

file.addEventListener('change',  () => {
  document.querySelector('.img-upload__overlay').classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');
});

cancelButton.addEventListener('click', () => {
  document.querySelector('.img-upload__overlay').classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
});

const onDocumentEscKeyDown = (evt) => {
  if(isEscape(evt) && !evt.target.classList.contains('text__description') && !evt.target.classList.contains('text__hashtags')){
    document.querySelector('.img-upload__overlay').classList.add('hidden');
    document.querySelector('body').classList.remove('modal-open');
    document.removeEventListener('keydown', onDocumentEscKeyDown);
  }
};

document.addEventListener('keydown', onDocumentEscKeyDown);
