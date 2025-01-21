const profileInfo = document.querySelector('.dashboard__profile-info');
const checkTelegram = () => {
 if (JSON.parse(localStorage.getItem('isTelegram')) == true) {
  console.log(localStorage.getItem('isTelegram'));
  profileInfo.classList.remove('telegram');
  profileInfo.innerHTML = `         <p class="dashboard__profile-info-title">Информация об аккаунте</p>
  <div class="dashboard__profile-info-cols">
   <div class="dashboard__profile-info-cols-container">
    <div class="dashboard__profile-info-col">
     <p class="dashboard__profile-info-col-name">Логин</p>
     <p class="dashboard__profile-info-col-value">Blablablа</p>
    </div>
    <div class="dashboard__profile-info-col">
     <p class="dashboard__profile-info-col-name">Telegram</p>
     <p class="dashboard__profile-info-col-value">Blablablа</p>
    </div>
   </div>
   <div class="dashboard__profile-info-cols-container">
    <div class="dashboard__profile-info-col">
     <p class="dashboard__profile-info-col-name">E-mail</p>
     <p class="dashboard__profile-info-col-value">Blablabla@gmail.com</p>
     <a href="change-email.html"> Изменить </a>
    </div>
    <div class="dashboard__profile-info-col">
     <p class="dashboard__profile-info-col-name">Пароль</p>
     <div class="dashboard__profile-password">
      <img
       src="./assets/img/icons/pass-dot.svg"
       alt="ZION ПАРОЛЬ"
       class="dashboard__profile-password-dot"
      />
      <img
       src="./assets/img/icons/pass-dot.svg"
       alt="ZION ПАРОЛЬ"
       class="dashboard__profile-password-dot"
      />
      <img
       src="./assets/img/icons/pass-dot.svg"
       alt="ZION ПАРОЛЬ"
       class="dashboard__profile-password-dot"
      />
      <img
       src="./assets/img/icons/pass-dot.svg"
       alt="ZION ПАРОЛЬ"
       class="dashboard__profile-password-dot"
      />
      <img
       src="./assets/img/icons/pass-dot.svg"
       alt="ZION ПАРОЛЬ"
       class="dashboard__profile-password-dot"
      />
      <img
       src="./assets/img/icons/pass-dot.svg"
       alt="ZION ПАРОЛЬ"
       class="dashboard__profile-password-dot"
      />
      <img
       src="./assets/img/icons/pass-dot.svg"
       alt="ZION ПАРОЛЬ"
       class="dashboard__profile-password-dot"
      />
      <img
       src="./assets/img/icons/pass-dot.svg"
       alt="ZION ПАРОЛЬ"
       class="dashboard__profile-password-dot"
      />
      <img
       src="./assets/img/icons/pass-dot.svg"
       alt="ZION ПАРОЛЬ"
       class="dashboard__profile-password-dot"
      />
      <img
       src="./assets/img/icons/pass-dot.svg"
       alt="ZION ПАРОЛЬ"
       class="dashboard__profile-password-dot"
      />
     </div>
     <a href="change-pass.html"> Изменить </a>
    </div>
   </div>
  </div>`;
 } else {
  profileInfo.classList.add('telegram');
  profileInfo.innerHTML = `
<p class="dashboard__profile-info-title">Информация об аккаунте</p>
<div class="dashboard__profile-info-cols">
 <div class="dashboard__profile-info-cols-container">
  <div class="dashboard__profile-info-col">
   <p class="dashboard__profile-info-col-name">Логин</p>
   <p class="dashboard__profile-info-col-value">Blablablа</p>
  </div>
  <div class="dashboard__profile-info-col">
   <p class="dashboard__profile-info-col-name">E-mail</p>
   <p class="dashboard__profile-info-col-value">Blablabla@gmail.com</p>
   <a href="change-email.html"> Изменить </a>
  </div>
  <div class="dashboard__profile-info-col">
   <p class="dashboard__profile-info-col-name">Пароль</p>
   <div class="dashboard__profile-password">
    <img
     src="./assets/img/icons/pass-dot.svg"
     alt="ZION ПАРОЛЬ"
     class="dashboard__profile-password-dot"
    />
    <img
     src="./assets/img/icons/pass-dot.svg"
     alt="ZION ПАРОЛЬ"
     class="dashboard__profile-password-dot"
    />
    <img
     src="./assets/img/icons/pass-dot.svg"
     alt="ZION ПАРОЛЬ"
     class="dashboard__profile-password-dot"
    />
    <img
     src="./assets/img/icons/pass-dot.svg"
     alt="ZION ПАРОЛЬ"
     class="dashboard__profile-password-dot"
    />
    <img
     src="./assets/img/icons/pass-dot.svg"
     alt="ZION ПАРОЛЬ"
     class="dashboard__profile-password-dot"
    />
    <img
     src="./assets/img/icons/pass-dot.svg"
     alt="ZION ПАРОЛЬ"
     class="dashboard__profile-password-dot"
    />
    <img
     src="./assets/img/icons/pass-dot.svg"
     alt="ZION ПАРОЛЬ"
     class="dashboard__profile-password-dot"
    />
    <img
     src="./assets/img/icons/pass-dot.svg"
     alt="ZION ПАРОЛЬ"
     class="dashboard__profile-password-dot"
    />
    <img
     src="./assets/img/icons/pass-dot.svg"
     alt="ZION ПАРОЛЬ"
     class="dashboard__profile-password-dot"
    />
    <img
     src="./assets/img/icons/pass-dot.svg"
     alt="ZION ПАРОЛЬ"
     class="dashboard__profile-password-dot"
    />
   </div>
   <a href="change-pass.html"> Изменить </a>
  </div>
 </div>
 <div class="dashboard__profile-info-cols-container">
  <div class="dashboard__profile-info-col">
   <p class="dashboard__profile-info-col-name">Telegram</p>
   <button class="dashboard__profile-telegram-button">
    <img
     src="./assets/img/logos/telegram.svg"
     alt="ZION ВХОД ЧЕРЕЗ ТЕЛЕГРАМ"
     class="dashboard__profile-telegram-button-icon"
    />
    Войти через Telegram
   </button>
   <div class="dashboard__profile-telegram-info">
    <div class="dashboard__profile-telegram-info-wrapper">
     <p class="dashboard__profile-telegram-info-text">
      1. Вы будете получать смс о вашей ежедневной доходности
     </p>
     <p class="dashboard__profile-telegram-info-text">
      2. У вас будет подключена двухфакторная аутентификация на вывод
      средств
     </p>
     <p class="dashboard__profile-telegram-info-text">
      3. Возможность быстрого входа в свой аккаунт
     </p>
    </div>
   </div>
  </div>
 </div>
</div>
`;

  const telegramButton = profileInfo.querySelector(
   '.dashboard__profile-telegram-button'
  );
  telegramButton.addEventListener('click', () => {
   localStorage.setItem('isTelegram', true);
  });
 }
};

checkTelegram();
