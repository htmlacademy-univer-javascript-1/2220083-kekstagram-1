import { form } from './hashtags-pristine.js';

const FILE_TYPES = ['png', 'jpeg', 'jpg', 'gif'];

const imgPreview = form.querySelector('.img-upload__preview').querySelector('img');
const effectsPreviews = form.querySelectorAll('.effects__preview');

const uploadUserPhoto = (pictureFile) => {
  const matches = FILE_TYPES.some((it) => pictureFile.name.toLowerCase().endsWith(it));

  if (matches) {
    const pictureUrl = URL.createObjectURL(pictureFile);
    imgPreview.src = pictureUrl;
    effectsPreviews.forEach((effect) => {
      effect.style.backgroundImage = `url(${pictureUrl})`;
    });
  }
};

export{uploadUserPhoto};
