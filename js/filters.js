import { debounce, mixArray } from './util.js';
import { renderPhotos, clearPhotos } from './pictures.js';
import { pictures } from './data-upload.js';

const RANDOM_PHOTOS_COUNT = 10;

const filterForm = document.querySelector('.img-filters__form');

const showFilters = () => {
  document.querySelector('.img-filters').classList.remove('img-filters--inactive');
};

const compareDiscussedPhotos = (firstItem, secondItem) => secondItem.comments.length - firstItem.comments.length;

const filters = {
  'filter-default': () => pictures.slice(),
  'filter-random': () => mixArray(pictures.slice()).slice(0, RANDOM_PHOTOS_COUNT),
  'filter-discussed': () => pictures.slice().sort(compareDiscussedPhotos),
};

const onFilterFormClicked = debounce((evt) => {
  if(evt.target.tagName === 'BUTTON') {
    const clickedButton = filterForm.querySelector('.img-filters__button--active');

    if(clickedButton) {
      clickedButton.classList.remove('img-filters__button--active');
    }
    evt.target.classList.add('img-filters__button--active');

    clearPhotos();
    renderPhotos(filters[evt.target.id]());
  }
});

filterForm.addEventListener('click', onFilterFormClicked);

export{showFilters};
