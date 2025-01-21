const user = [
 {
  login: 'ultrauser2024',
  email: 'bestemail@gmail.com',
  password: 'supersecretpassword1234',
 },
];
const loginForm = document.querySelector('.form-layout__form');
const loginInput = loginForm.querySelector('.form-layout__input.login');
const passInput = loginForm.querySelector('.form-layout__input.password');
const loginWrapper = loginInput.parentElement;
const passWrapper = passInput.parentElement;

const layoutWrapper = document.querySelector('.form-layout__wrapper');

const telegramButton = document.querySelector('.form-layout__telegram-button');

const submitForm = (form) => {
 form.addEventListener('submit', (e) => {
  e.preventDefault();
  checkLogin(loginWrapper, loginInput);
  checkPass(passWrapper, passInput);
  if (
   passWrapper.classList.contains('verified') &&
   loginWrapper.classList.contains('verified')
  ) {
   enableCodeCheck(layoutWrapper);
  }
 });
};

const checkLogin = (wrapper, input) => {
 let existingError = wrapper.querySelector('.form-layout__input-error');
 if (
  input.value === '' ||
  (input.value !== user[0].login && input.value !== user[0].email)
 ) {
  if (!existingError) {
   const error = document.createElement('p');
   error.className = 'form-layout__input-error';
   error.innerHTML = 'Неверный e-mail или логин';
   wrapper.append(error);
   if (wrapper.classList.contains('verified')) {
    wrapper.classList.remove('verified');
   }
   wrapper.classList.add('invalid');
  }
 } else {
  wrapper.classList.remove('invalid');
  wrapper.classList.add('verified');
  if (existingError) {
   existingError.remove();
  }
 }
};

const checkPass = (wrapper, input) => {
 let existingError = wrapper.querySelector('.form-layout__input-error');
 if (input.value == '' || input.value != user[0].password) {
  if (!existingError) {
   const error = document.createElement('p');
   error.className = 'form-layout__input-error';
   error.innerHTML = 'Неверный пароль';
   wrapper.append(error);
   if (wrapper.classList.contains('verified')) {
    wrapper.classList.remove('verified');
   }
   wrapper.classList.add('invalid');
  }
 } else {
  wrapper.classList.remove('invalid');
  wrapper.classList.add('verified');
  if (existingError) {
   existingError.remove();
  }
 }
};

const enableCodeCheck = (wrapper) => {
 wrapper.innerHTML = `<h1 class="form-layout__title">Подтверждение входа</h1>
    <form class="form-layout__form code-form">
     <div class="form-layout__input-wrapper">
      <input type="text" class="form-layout__input code" />
      <span class="form-layout__input-placeholder">Код подтверждения</span>
      <span class="form-layout__input-subtitle">Код был отправлен на ваш Email</span>
     </div>
     <div class="form-layout__form-buttons">
      <button type="submit" class="form-layout__form-button">Продолжить</button>
     </div>
    </form>`;
 const codeWrapper = wrapper.querySelector('.form-layout__input-wrapper');
 const codeInput = wrapper.querySelector('.form-layout__input.code');
 const codeForm = wrapper.querySelector('.form-layout__form.code-form');

 codeForm.addEventListener('submit', (e) => {
  e.preventDefault();
  checkCode(codeWrapper, codeInput);
  if (codeWrapper.classList.contains('verified')) {
   localStorage.setItem('isAuthorized', true);
   window.location.href = '/dashboard.html';
  }
 });
};

const enableCodeTelegramCheck = (wrapper) => {
 wrapper.innerHTML = `<h1 class="form-layout__title">Подтверждение входа</h1>
   <form class="form-layout__form code-form">
    <div class="form-layout__input-wrapper">
     <input type="text" class="form-layout__input code" />
     <span class="form-layout__input-placeholder">Код подтверждения</span>
     <span class="form-layout__input-subtitle">ZION Support отправил вам код в Telegram</span>
    </div>
    <div class="form-layout__form-buttons">
     <button type="submit" class="form-layout__form-button">Продолжить</button>
    </div>
   </form>`;
 const codeWrapper = wrapper.querySelector('.form-layout__input-wrapper');
 const codeInput = wrapper.querySelector('.form-layout__input.code');
 const codeForm = wrapper.querySelector('.form-layout__form.code-form');

 codeForm.addEventListener('submit', (e) => {
  e.preventDefault();
  checkCode(codeWrapper, codeInput);
  if (codeWrapper.classList.contains('verified')) {
   localStorage.setItem('isAuthorized', true);
   localStorage.setItem('isTelegram', true);
   window.location.href = '/dashboard.html';
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
  wrapper.classList.add('verified');
  if (wrapper.classList.contains('invalid')) {
   wrapper.classList.remove('invalid');
  }
 }
};
telegramButton.addEventListener('click', () => {
 enableCodeTelegramCheck(layoutWrapper);
});
submitForm(loginForm);
