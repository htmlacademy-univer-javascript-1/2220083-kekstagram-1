import { imgPreview } from './upload.js';

const STEP_SCALE = 0.25;
const MAX_SCALING = 1;
const MIN_SCALING = 0.25;
const START_SCALING = 0.5;

let scaling = START_SCALING;

const buttons = document.querySelector('.img-upload__scale');
const scaleValue = document.querySelector('.scale__control--value');

const onValue = () => {
  scaling = scaleValue.value.replace('%', '')/100;

  if(scaling <= MAX_SCALING && scaling >= MIN_SCALING){
    imgPreview.style.transform = `scale(${scaling.toFixed(2)})`;
  }
};

const onScaling = (evt) => {
  const targetImage = evt.target;
  imgPreview.style.transform = `scale(${scaling})`;

  let mode = 0;

  if (targetImage.classList.contains('scale__control--smaller')){
    if(scaling !== MIN_SCALING){
      mode = -1;
    }
  }

  if (targetImage.classList.contains('scale__control--bigger')){
    if(scaling !== MAX_SCALING){
      mode = 1;
    }
  }

  scaling = scaling + STEP_SCALE * mode;

  if(scaling > MAX_SCALING){
    scaling = MAX_SCALING;
  }
  if(scaling < MIN_SCALING){
    scaling = MIN_SCALING;
  }

  imgPreview.style.transform = `scale(${scaling.toFixed(2)})`;
  scaleValue.value = `${scaling.toFixed(2) * 100}%`;
};

const scalingPhotos = () => {
  buttons.addEventListener('click', onScaling);
  scaleValue.addEventListener('change', onValue);
  scaleValue.value = `${START_SCALING * 100}%`;
  imgPreview.style.transform = `scale(${START_SCALING})`;
};

const restart = () => {
  buttons.removeEventListener('click', onScaling);
  scaling = START_SCALING;
};

export {scalingPhotos, restart};
