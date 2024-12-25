const EMAIL_REGEXP =
 /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const existingLogins = ['qwerty123', 'user456', 'example789'];
const loginWrapper = document.querySelector(
 '.form-layout__input-wrapper.login-login'
);
const emailWrapper = document.querySelector(
 '.form-layout__input-wrapper.login-email'
);
const passWrapper = document.querySelector(
 '.form-layout__input-wrapper.password'
);
const retryPassWrapper = document.querySelector(
 '.form-layout__input-wrapper.retry-password'
);
const inputWrappers = document.querySelectorAll('.form-layout__input-wrapper');
const emailInput = emailWrapper.querySelector(
 '.form-layout__input.login-email'
);
const registerForm = document.querySelector('.form-layout__form');

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
    codeDiv.innerHTML = `<input type="number" class="form-layout__input" /><span class="form-layout__input-placeholder">Код подтверждения</span>`;
    wrapper.insertAdjacentElement('afterend', codeDiv);
    const codeInput = codeDiv.querySelector('.form-layout__input');
    codeInserted = true;

    getCodeButton.addEventListener('click', () =>
     checkCode(codeDiv, codeInput)
    );
   }
   isError = false;
  }

  let existingError = wrapper.querySelector('.form-layout__input-error');

  if (isError) {
   if (!existingError) {
    const error = document.createElement('p');
    error.className = 'form-layout__input-error';
    error.innerHTML =
     'Пожалуйста, введите свой адрес электронной почты, используя формат name@example.com';
    wrapper.append(error);
   }
  } else if (existingError) {
   existingError.remove();
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

const submitRegisterForm = (form) => {
 form.addEventListener('submit', (e) => {
  e.preventDefault();
  inputWrappers.forEach((wrapper) => {
   let existingError = wrapper.querySelector('.form-layout__input-error');
   if (
    !wrapper.classList.contains('verified') &&
    !wrapper.classList.contains('invalid')
   ) {
    wrapper.classList.add('invalid');
   } else if (
    wrapper.classList.contains(
     'verified' && !wrapper.classList.contains('invalid')
    )
   ) {
    window.location.href = '/login.html';
   }
  });
 });
};

const checkLogin = (wrapper) => {
 const loginInput = wrapper.querySelector('.form-layout__input');

 loginInput.addEventListener('focusout', () => {
  let existingError = wrapper.querySelector('.form-layout__input-error');

  if (existingLogins.includes(loginInput.value.trim())) {
   if (wrapper.classList.contains('verified')) {
    wrapper.classList.remove('verified');
   }
   wrapper.classList.add('invalid');
   if (!existingError) {
    const error = document.createElement('p');
    error.className = 'form-layout__input-error';
    error.innerHTML = 'Логин уже используется';
    wrapper.append(error);
   }
  } else {
   wrapper.classList.remove('invalid');
   wrapper.classList.add('verified');
   if (existingError) {
    existingError.remove();
   }
  }
 });
};

const checkPasswords = (passwrapper, retrywrapper) => {
 const passInput = passwrapper.querySelector('.form-layout__input.password');
 const retryPassInput = retrywrapper.querySelector(
  '.form-layout__input.retry-password.password'
 );

 passInput.addEventListener('focusout', () => {
  let existingPassError = passwrapper.querySelector(
   '.form-layout__input-error'
  );

  if (passInput.value.length < 8) {
   if (!existingPassError) {
    const error = document.createElement('p');
    error.className = 'form-layout__input-error';
    error.innerHTML =
     'Этот пароль легко угадать. Пожалуйста, используйте не менее 8 символов.';
    passwrapper.append(error);
   }
  } else {
   if (existingPassError) {
    existingPassError.remove();
   }
  }
 });

 retryPassInput.addEventListener('focusout', () => {
  let existingRetryError = retrywrapper.querySelector(
   '.form-layout__input-error'
  );

  if (retryPassInput.value !== passInput.value) {
   if (
    passwrapper.classList.contains('verified') &&
    retrywrapper.classList.contains('verified')
   ) {
    passwrapper.classList.remove('verified');
    retrywrapper.classList.remove('verified');
   }
   if (!existingRetryError) {
    const error = document.createElement('p');
    error.className = 'form-layout__input-error';
    error.innerHTML = 'Пароли не совпадают. Пожалуйста, попробуйте снова.';
    retrywrapper.append(error);
   }
  } else {
   if (existingRetryError) {
    existingRetryError.remove();
   }
   if (
    retrywrapper.classList.contains('invalid') &&
    passwrapper.classList.contains('invalid')
   ) {
    retrywrapper.classList.remove('invalid');
    passwrapper.classList.remove('invalid');
   }
   retrywrapper.classList.add('verified');
   passwrapper.classList.add('verified');
  }
 });
};

getCode(emailWrapper, emailInput);
checkLogin(loginWrapper);
checkPasswords(passWrapper, retryPassWrapper);
submitRegisterForm(registerForm);
