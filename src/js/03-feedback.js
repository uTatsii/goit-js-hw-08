import throttle from 'lodash.throttle';

const SAVED_FORM_DATA_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');
const savedData = {
  email: '',
  message: '',
};

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));
window.addEventListener('load', formUpdate);

function onFormSubmit(e) {
  e.preventDefault();

  console.log(savedData);

  localStorage.removeItem(SAVED_FORM_DATA_KEY);

  form.reset();
}

function onFormInput() {
  savedData.email = input.value;
  savedData.message = textarea.value;

  localStorage.setItem(SAVED_FORM_DATA_KEY, JSON.stringify(savedData));
}

function formUpdate() {
  const localFormData = JSON.parse(localStorage.getItem(SAVED_FORM_DATA_KEY));
    if (localFormData) {
        input.value = localFormData.email;
        textarea.value = localFormData.message;
  }
}
