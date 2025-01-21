const EMAIL_REGEXP =
 /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const emailWrapper = document.querySelector(
 '.form-layout__input-wrapper.email'
);
const inputWrappers = document.querySelectorAll('.form-layout__input-wrapper');
const emailInput = emailWrapper.querySelector('.form-layout__input.email');
const emailForm = document.querySelector('.form-layout__form');
const getCode = (wrapper, input) => {
 const getCodeButton = wrapper.querySelector('.form-layout__get-code');
 let isError = false;
 let codeInserted = false;

 getCodeButton.addEventListener('click', () => {
  const isValid = EMAIL_REGEXP.test(input.value);
  if (!isValid) {
   wrapper.classList.add('invalid');
   getCodeButton.innerHTML = 'Получить код';
   isError = true;
   codeInserted = false;
  } else {
   wrapper.classList.remove('invalid');
   getCodeButton.innerHTML = 'Подтвердить';
   if (!wrapper.querySelector('.form-layout__input-subtitle')) {
    const subtitle = document.createElement('span');
    subtitle.className = 'form-layout__input-subtitle';
    subtitle.innerHTML = 'Код был отправлен на ваш Email';
    wrapper.append(subtitle);
   }

   if (!codeInserted) {
    const codeDiv = document.createElement('div');
    codeDiv.className = 'form-layout__input-wrapper code';
    codeDiv.innerHTML = `<input type="number" class="form-layout__input" /><span class="form-layout__input-placeholder">Код подтверждения</span>
    <p class="form-layout__input-error">Неверный код</p>
    `;
    wrapper.insertAdjacentElement('afterend', codeDiv);
    const codeInput = codeDiv.querySelector('.form-layout__input');
    codeInserted = true;

    getCodeButton.addEventListener('click', () =>
     checkCode(codeDiv, codeInput)
    );
   }
   isError = false;
  }
 });
};
const checkCode = (wrapper, input) => {
 const code = '123456';
 let existingError = wrapper.querySelector('.form-layout__input-error');

 if (input.value != code) {
  wrapper.classList.add('invalid');
  if (!existingError) {
   const error = document.createElement('p');
   error.className = 'form-layout__input-error';
   error.innerHTML = 'Неверный код';
   wrapper.append(error);
  }
 } else {
  if (existingError) {
   existingError.remove();
  }
  if (wrapper.classList.contains('invalid')) {
   wrapper.classList.remove('invalid');
  }
  emailWrapper.classList.add('verified');
  wrapper.classList.add('verified');
  emailInput.readOnly = true;
  input.readOnly = true;
 }
};

const submitEmailForm = (form) => {
 form.addEventListener('submit', (e) => {
  e.preventDefault();
  inputWrappers.forEach((wrapper) => {
   console.log(wrapper.classList.contains('verified'));
   let existingError = wrapper.querySelector('.form-layout__input-error');
   if (
    !wrapper.classList.contains('verified') &&
    !wrapper.classList.contains('invalid')
   ) {
    wrapper.classList.add('invalid');
   } else if (wrapper.classList.contains('verified')) {
    window.location.href = '/success-email.html';
   }
  });
 });
};

getCode(emailWrapper, emailInput);
submitEmailForm(emailForm);
