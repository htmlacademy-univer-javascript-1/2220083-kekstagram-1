import { uploadForm } from './upload.js';
import { sendRequest } from './fetch.js';
import { completedSuccessfully, showUnloadingErrorMessage } from './data-upload.js';

sendRequest(completedSuccessfully,
  () => {
    showUnloadingErrorMessage('Не удалось загрузить данные из сервера');
  },
  'GET');

uploadForm();
