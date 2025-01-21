const withdrawContainers = document.querySelectorAll(
 '.dashboard__withdraw-input-container'
);
const dashWrapper = document.querySelector('.dashboard__wrapper');
const withdrawWrapper = document.querySelector('.dashboard__withdraw');
const isValidBitcoinAddress = (address) => {
 const ethereumAddressRegex = /^0x[a-fA-F0-9]{40}$/;
 return ethereumAddressRegex.test(address);
};

const checkCode = (wrapper, input) => {
 if (input.value != '123456') {
  wrapper.classList.remove('verified');
  wrapper.classList.add('invalid');
 } else {
  wrapper.classList.remove('invalid');
  wrapper.classList.add('verified');
 }
};
const maxAmount = (wrapper, input) => {
 if (input.classList.contains('btc')) {
  if (input.value < 20 || input.value == '') {
   wrapper.classList.add('invalid');
   wrapper.classList.remove('verified');
  } else {
   wrapper.classList.remove('invalid');
   wrapper.classList.add('verified');
  }
 } else {
  if (input.value < 5 || input.value == '') {
   wrapper.classList.add('invalid');
   wrapper.classList.remove('verified');
  } else {
   wrapper.classList.remove('invalid');
   wrapper.classList.add('verified');
  }
 }
};
const checkAddress = (wrapper, input) => {
 if (!isValidBitcoinAddress(input.value)) {
  wrapper.classList.remove('verified');
  wrapper.classList.add('invalid');
 } else {
  wrapper.classList.remove('invalid');
  wrapper.classList.add('verified');
 }
};

const checkCard = (wrapper, input) => {
 if (input.value.trim().length < 16 || input.value == '') {
  wrapper.classList.add('invalid');
  wrapper.classList.remove('verified');
 } else {
  wrapper.classList.remove('invalid');
  wrapper.classList.add('verified');
 }
};

const initPhone = (phoneInput, wrapper) => {
 phoneInput.addEventListener('input', (e) => {
  let rawValue = e.target.value.replace(/\D/g, '');
  if (rawValue.startsWith('8')) {
   rawValue = '7' + rawValue.slice(1);
  }
  if (!rawValue.startsWith('7')) {
   rawValue = '7' + rawValue;
  }

  const formattedValue = rawValue
   .replace(/(\d)(\d{3})(\d{3})(\d{2})(\d{2})/, '+$1 ($2) $3-$4-$5')
   .slice(0, 18);

  e.target.value = formattedValue;

  if (rawValue.length === 11) {
   wrapper.classList.remove('invalid');
   wrapper.classList.add('verified');
  } else {
   wrapper.classList.remove('verified');
   wrapper.classList.add('invalid');
  }
 });

 phoneInput.addEventListener('keydown', (e) => {
  if (wrapper.classList.contains('verified')) {
   if (e.key !== 'Backspace' && e.key !== 'Delete') {
    e.preventDefault();
   }
  } else {
   if (e.key.length === 1 && !/\d/.test(e.key) && e.key !== 'Backspace') {
    e.preventDefault();
   }
  }
 });
};

const checkPhone = (wrapper, input) => {
 if (input.value == '') {
  wrapper.classList.remove('verified');
  wrapper.classList.add('invalid');
 }
};

const checkBank = (wrapper, input) => {
 if (input.value == '') {
  wrapper.classList.remove('verified');
  wrapper.classList.add('invalid');
 } else {
  wrapper.classList.remove('invalid');
  wrapper.classList.add('verified');
 }
};
const initFullName = (fullnameinput, wrapper) => {
 fullnameinput.addEventListener('input', (e) => {
  let value = e.target.value;

  value = value.replace(/[^а-яА-ЯёЁ\s]/g, '');

  value = value
   .split(/\s+/)
   .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
   .join(' ');

  e.target.value = value;

  const words = value.trim().split(/\s+/);
  if (words.length >= 2 && words.every((word) => word.length > 1)) {
   wrapper.classList.add('verified');
   wrapper.classList.remove('invalid');
  } else {
   wrapper.classList.remove('verified');
   wrapper.classList.add('invalid');
  }
 });

 fullnameinput.addEventListener('keydown', (e) => {
  if (e.key.length === 1 && !/[а-яё\s]/i.test(e.key) && e.key !== 'Backspace') {
   e.preventDefault();
  }
 });
};
const checkFullName = (wrapper, input) => {
 if (input.value == '') {
  wrapper.classList.remove('verified');
  wrapper.classList.add('invalid');
 } else {
  wrapper.classList.remove('invalid');
  wrapper.classList.add('verified');
 }
};

const createFinish = (page) => {
 const finishDiv = document.createElement('div');

 if (withdrawWrapper.classList.contains('btc')) {
  finishDiv.className = 'dashboard__withdraw-finish btc';
  finishDiv.innerHTML = `<img
    src="./assets/img/icons/withdraw-finish-btc-icon.svg"
    alt="ZION ЗАПРОС ВЫПОЛНЕН"
    class="dashboard__withdraw-finish-icon"
    />
    <p class="dashboard__withdraw-finish-text">
    Запрос на вывод успешно выполнен
    </p>
    <a href="/dashboard.html">
    
    <button class="dashboard__withdraw-finish-button">
    Перейти в раздел история операций
    </button>
    </a>
    `;
 } else {
  finishDiv.className = 'dashboard__withdraw-finish';
  finishDiv.innerHTML = `<img
       src="./assets/img/icons/withdraw-finish-icon.svg"
       alt="ZION ЗАПРОС ВЫПОЛНЕН"
       class="dashboard__withdraw-finish-icon"
       />
       <p class="dashboard__withdraw-finish-text">
       Запрос на вывод успешно выполнен
       </p>
       <a href="/dashboard.html">
       
       <button class="dashboard__withdraw-finish-button">
       Перейти в раздел история операций
       </button>
       </a>
       `;
 }
 page.replaceWith(finishDiv);
};
const finishWithdraw = () => {
 const allVerified = Array.from(withdrawContainers).every((wrapper) =>
  wrapper.classList.contains('verified')
 );

 if (allVerified) {
  createFinish(dashWrapper);
 }
};
