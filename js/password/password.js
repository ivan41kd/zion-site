const passWrapper = document.querySelector(
 '.form-layout__input-wrapper.password'
);

const newPassWrapper = document.querySelector(
 '.form-layout__input-wrapper.new-password'
);
const retryPassWrapper = document.querySelector(
 '.form-layout__input-wrapper.retry-password'
);
const form = document.querySelector('.form-layout__form');
const inputWrappers = document.querySelectorAll('.form-layout__input-wrapper');

const checkCurrentPass = (wrapper) => {
 const input = wrapper.querySelector('.form-layout__input.password');
 const password = 'qwertyuiop123';

 input.addEventListener('input', () => {
  if (input.value != '') {
   if (input.value != password) {
    wrapper.classList.remove('verified');
    wrapper.classList.add('invalid');
   } else {
    wrapper.classList.remove('invalid');
    wrapper.classList.add('verified');
    input.readOnly = true;
   }
  }
 });
};

const checkPasswords = (newpass, retrypass) => {
 const newPassInput = newpass.querySelector('.form-layout__input.new-password');
 const retryPassInput = retrypass.querySelector(
  '.form-layout__input.retry-password'
 );

 newPassInput.addEventListener('input', () => {
  if (newPassInput.value.length < 8) {
   newpass.classList.remove('verified');
   newpass.classList.add('invalid');
  } else {
   newpass.classList.remove('invalid');
   newpass.classList.add('verified');
   newpass.readOnly = true;
  }
 });

 retryPassInput.addEventListener('input', () => {
  if (newPassInput.value != retryPassInput.value) {
   retrypass.classList.add('invalid');
  } else {
   retrypass.classList.remove('invalid');
   retrypass.classList.add('verified');
  }
 });
};

const submitRegisterForm = (form) => {
 form.addEventListener('submit', (e) => {
  e.preventDefault();

  let hasInvalid = false;

  inputWrappers.forEach((wrapper) => {
   if (!wrapper.classList.contains('verified')) {
    wrapper.classList.add('invalid');
   }
   if (wrapper.classList.contains('invalid')) {
    hasInvalid = true;
   }
  });

  if (!hasInvalid) {
   window.location.href = '/success-password.html';
  }
 });
};

checkCurrentPass(passWrapper);
checkPasswords(newPassWrapper, retryPassWrapper);
submitRegisterForm(form);
