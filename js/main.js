import {renderPhotos} from './pictures.js';
import {uploadForm} from './upload.js';
import {sendRequest} from './fetch.js';
import {showUnloadingErrorMessage} from './util.js';

sendRequest(renderPhotos,
  () => {
    showUnloadingErrorMessage('Не удалось загрузить данные из сервера');
  },
  'GET');

uploadForm();
