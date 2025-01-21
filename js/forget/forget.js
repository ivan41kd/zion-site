const EMAIL_REGEXP =
 /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const existMail = 'admin123@gmail.com';
const emailWrapper = document.querySelector(
 '.form-layout__input-wrapper.email'
);
const inputWrappers = document.querySelectorAll('.form-layout__input-wrapper');
const emailInput = emailWrapper.querySelector('.form-layout__input.email');
const form = document.querySelector('.form-layout__form');
let isCode = false;
let isPass = false;
const getCodeButton = document.querySelector('.form-layout__get-code');

getCodeButton.addEventListener('click', () => {
 const isValid = EMAIL_REGEXP.test(emailInput.value);
 if (!isValid && emailInput.value != existMail) {
  emailWrapper.classList.add('invalid');
  isError = true;
  codeInserted = false;
 } else if (isValid && emailInput.value == existMail) {
  emailWrapper.classList.remove('invalid');
  insertCode(emailWrapper);
 }
});
const insertCode = (wrapper) => {
 isCode = true;
 const codeDiv = document.createElement('div');
 codeDiv.className = 'form-layout__input-wrapper code';
 codeDiv.innerHTML = `<input type="number" class="form-layout__input" /><span class="form-layout__input-placeholder">Код подтверждения</span>
    <p class="form-layout__input-error">Неверный код</p>
    `;
 wrapper.insertAdjacentElement('afterend', codeDiv);
 wrapper.remove();
 if (!codeDiv.querySelector('.form-layout__input-subtitle')) {
  const subtitle = document.createElement('span');
  subtitle.className = 'form-layout__input-subtitle';
  subtitle.innerHTML = 'Код был отправлен на ваш Email';
  codeDiv.append(subtitle);
 }
};

const insertPass = (wrapper) => {
 isPass = true;
 const passDiv = document.createElement('div');
 passDiv.className = 'form-layout__input-wrapper new-password';
 passDiv.innerHTML = `       
    <input type="password" class="form-layout__input password" />
    <span class="form-layout__input-placeholder">Новый пароль</span>
    <p class="form-layout__input-error">Этот пароль легко угадать. Пожалуйста, используйте не менее 8 символов.</p>
    <svg
     width="33"
     height="23"
     viewBox="0 0 33 23"
     fill="none"
     xmlns="http://www.w3.org/2000/svg"
     class="form-layout__show-password"
    >
     <path
      d="M21.3565 11.8287C21.3565 14.1957 19.4378 16.1144 17.0708 16.1144C14.704 16.1144 12.7852 14.1957 12.7852 11.8287C12.7852 9.46168 14.704 7.54297 17.0708 7.54297C19.4378 7.54297 21.3565 9.46168 21.3565 11.8287Z"
      stroke="white"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
     />
     <path
      d="M17.0712 1.82812C10.6745 1.82812 5.25985 6.03224 3.43945 11.8281C5.25982 17.624 10.6745 21.8281 17.0712 21.8281C23.4678 21.8281 28.8825 17.624 30.7029 11.8281C28.8825 6.03228 23.4678 1.82812 17.0712 1.82812Z"
      stroke="white"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
     />
     <path
      d="M1 1L32 22"
      stroke="white"
      stroke-width="1.5"
      stroke-linecap="round"
      class="form-layout__show-stroke"
     />
    </svg>
   
       `;
 wrapper.insertAdjacentElement('afterend', passDiv);
 wrapper.remove();
};
const getCode = (wrapper, input) => {
 let isError = false;
 let codeInserted = false;

 const isValid = EMAIL_REGEXP.test(input.value);
 if (!isValid && input.value != existMail) {
  wrapper.classList.add('invalid');
  isError = true;
  codeInserted = false;
 } else if (isValid && input.value == existMail) {
  wrapper.classList.remove('invalid');
  insertCode(wrapper);
 }
};
const checkCode = (wrapper, input) => {
 const code = '123456';
 let existingError = wrapper.querySelector('.form-layout__input-error');
 console.log(code);
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
  insertPass(wrapper);
 }
};

const checkPass = (wrapper, input) => {
 if (input.value < 8) {
  wrapper.classList.add('invalid');
 } else {
  wrapper.classList.remove('invalid');
  wrapper.classList.add('verified');
  window.location.href = '/login.html';
 }
};

const submitForm = (form) => {
 form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (isCode && !isPass) {
   const codeWrapper = document.querySelector(
    '.form-layout__input-wrapper.code'
   );
   const codeInput = codeWrapper.querySelector('.form-layout__input');
   checkCode(codeWrapper, codeInput);
  }
  if (isPass) {
   const passWrapper = document.querySelector(
    '.form-layout__input-wrapper.new-password'
   );
   const passInput = passWrapper.querySelector('.form-layout__input.password');
   checkPass(passWrapper, passInput);
  }
  if (emailWrapper) getCode(emailWrapper, emailInput);
 });
};

submitForm(form);
