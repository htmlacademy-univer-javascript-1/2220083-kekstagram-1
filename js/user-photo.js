const FILE_TYPES = ['png', 'jpeg', 'jpg', 'gif'];

const imgPreview = document.querySelector('.img-upload__preview').querySelector('img');
const effectsPreviews = document.querySelectorAll('.effects__preview');

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
