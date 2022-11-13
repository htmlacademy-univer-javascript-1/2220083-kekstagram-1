const MAX_SYMBOLS = 20;
const MAX_HASHTAGS = 5;
const MAX_COUNT_SYMBOLS = 140;

const form = document.querySelector('.img-upload__form');
const inputHashtag = document.querySelector('.text__hashtags');
const inputComment = document.querySelector('.text__description');

const pristine = new Pristine(form, {
  classTo: 'img-upload__text',
  errorClass: 'img-upload__text--invalid',
  successClass: 'img-upload__text--valid',
  errorTextParent: 'img-upload__text',
  errorTextTag: 'div',
  errorTextClass: 'img-upload__error-text'
});

let errorMessage = '';

const error = () => errorMessage;

const hashtagsHandler = (value) => {
  const inputText = value.toLowerCase().trim();

  if (!inputText) {
    return true;
  }

  const inputArray = inputText.split(/\s+/);

  if (inputArray.length === 0) {
    return true;
  }

  const rules = [
    {
      check: inputArray.some((item) => (item[0] === '#' && item.length === 1)),
      error: 'Хэш-тег не может состоять только из одной решётки',
    },
    {
      check: inputArray.some((item) => item.indexOf('#', 1) >= 1),
      error: 'Хэш-теги разделяются пробелами',
    },
    {
      check: inputArray.some((item) => item[0] !== '#'),
      error: 'Хэш-тег должен начинаться с символа #',
    },
    {
      check: inputArray.some((item, num, arr) => arr.includes(item, num + 1)),
      error: 'Хэш-теги не должны повторяться',
    },
    {
      check: inputArray.some((item) => item.length >  MAX_SYMBOLS),
      error: `Максимальная длина одного хэш-тега ${MAX_SYMBOLS} символов, включая решётку`,
    },
    {
      check: inputArray.length >  MAX_HASHTAGS,
      error: `Нельзя указать больше ${MAX_HASHTAGS} хэш-тегов`,
    },
    {
      check: inputArray.some((item) => !/^#[a-zа-яё0-9]{1,19}$/i.test(item)),
      error: 'Хэш-тег содержит недопустимые символы'
    },
  ];

  return rules.every((rule) => {
    const isInvalid = rule.check;
    if (isInvalid){
      errorMessage = rule.error;
    }
    return !isInvalid;
  });
};

const validateComment = (value) => value.length <= MAX_COUNT_SYMBOLS;

const onFormInput = (evt) => {
  if(!pristine.validate()){
    evt.preventDefault();
  }
};

const clearField  = () => {
  pristine.reset();
};

pristine.addValidator(inputHashtag, hashtagsHandler, error);

pristine.addValidator(inputComment, validateComment,
  `Длина комментария должна быть не более ${MAX_COUNT_SYMBOLS} символов`,
);

export {onFormInput, clearField};
