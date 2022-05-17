function openNav() {
  document.getElementById('myNav').style.width = '100%';
}
openNav();
function closeNav() {
  document.getElementById('myNav').style.width = '0%';
}
closeNav();

/* eslint-disable */

function menuOptions(param) {
  window.location.href = param;
  const links = document.getElementById('myNav');
  closeNav();
}

// form validation
const form = document.querySelector('.conct-form');
const emailInput = form.elements.email;

const INPUT_LOWERCASE = 'Error : Please enter a lowercase email input';

function showMessage(input, message, type) {
  const msg = document.querySelector('.error-text');
  msg.innerText = message;
  input.className = type ? 'success' : 'error';
  return type;
}

function showError(input, message) {
  return showMessage(input, message, false);
}

function validateEmail(input, invalidLowercase) {
  if (input.value === input.value.toLowerCase()) {
    return true;
  }
  return showError(input, invalidLowercase);
}


