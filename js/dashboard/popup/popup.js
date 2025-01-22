const dashboardCondition = document.querySelectorAll('.dashboard__conditions');

const closePopup = (section) => {
 section.remove();
};
const openAltcoins = () => {
 const sectionPopup = document.createElement('section');
 sectionPopup.className = 'popup';
 sectionPopup.innerHTML = `<div class="popup__wrapper">
    <img
    src="./assets/img/icons/popup-close.svg"
     alt=""
     class="popup__close"
    />
    <div class="popup__title-wrapper">
     <h2 class="popup__title">Условия вывода</h2>
     <p class="popup__subtitle">Altcoins</p>
    </div>
    <div class='popup__texts'>
    <p class="popup__text">
     Вывод заработанных средств <br class='mobile-space' /> возможен <br class='desktop-space' /><span>один раз в неделю</span>
    </p>
    <p class="popup__text">
     Минимальная сумма вывода<br /> составляет <span>5 USDT</span>
    </p>
    <p class="popup__text">
     Запрос на вывод средств вы <br class='mobile-space' /> можете <br class='desktop-space' />
     произвести <span>в любой день</span>
    </p>
    <p class="popup__text">
     Сумма будет перечислена<br /> на ваш кошелек <span>в понедельник</span>
    </p>
    <p class="popup__text">
     Платформа не берет комиссию <br class='mobile-space' /> за вывод,<br class='desktop-space' /> пользователь <br class='mobile-space' />
     оплачивает только <br /><span>комиссию сети</span><br />
     <span>TRC20 - (~4-8 USDT)</span><br />
     <span>BEP20 - (~0,1 USDT)</span>
    </p>
    </div>
    <img
    src="./assets/img/logos/brand-logo.svg"
     alt=""
     class="popup__logo"
    />
   </div>`;

 document.body.append(sectionPopup);
 const popupCloseIcon = sectionPopup.querySelector('.popup__close');
 popupCloseIcon.addEventListener('click', () => closePopup(sectionPopup));
};
const openPartner = () => {
 const sectionPopup = document.createElement('section');
 sectionPopup.className = 'popup';
 sectionPopup.innerHTML = `<div class="popup__wrapper">
       <img
       src="./assets/img/icons/popup-close.svg"
        alt=""
        class="popup__close"
       />
       <div class="popup__title-wrapper partner">
        <h2 class="popup__title">Условия вывода</h2>
        <p class="popup__subtitle">ПАРТНЕРСКАЯ ПРОГРАММА</p>
       </div>
       <div class='popup__texts partner'>

       <p class="popup__text">
       Вывод дохода от партнерской <br class='desktop-space' /> программы производится на ваш <br class='desktop-space' /> личный кошелек
       </p>
       <p class="popup__text">
        Минимальная сумма вывода <br class='desktop-space' /> составляет <span>5 USDT</span>
       </p>
       <p class="popup__text">
        Вывод можно оформить <br class='desktop-space' />
       <span>в любой день</span>
       </p>
       <p class="popup__text">
       Регламент вывода - <br class='desktop-space' /> <span>24 часа </span>
       </p>
       </div>
       <img
       src="./assets/img/logos/brand-logo.svg"
        alt=""
        class="popup__logo"
       />
      </div>`;

 document.body.append(sectionPopup);
 const popupCloseIcon = sectionPopup.querySelector('.popup__close');
 popupCloseIcon.addEventListener('click', () => closePopup(sectionPopup));
};
const openBtc = () => {
 const sectionPopup = document.createElement('section');
 sectionPopup.className = 'popup';
 sectionPopup.innerHTML = `<div class="popup__wrapper">
          <img
           src="./assets/img/icons/popup-close.svg"
           alt=""
           class="popup__close"
          />
          <div class="popup__title-wrapper">
           <h2 class="popup__title">Условия вывода</h2>
           <p class="popup__subtitle">BTC/ETH</p>
          </div>
          <div class='popup__texts'>
          <p class="popup__text">
          Вывод заработанных средств возможен <br class='desktop-space'/> <span>один раз в неделю</span>
          </p>
          <p class="popup__text">
           Минимальная сумма вывода <br class='desktop-space'/> составляет <span>20 USDT</span>
          </p>
          <p class="popup__text">
           Запрос на вывод средств вы можете <br class='desktop-space' />
           произвести <span>в любой день</span>
          </p>
          <p class="popup__text">
          Сумма будет перечислена <br class='desktop-space'/> на ваш кошелек <span>в понедельник</span>
         </p>
          <p class="popup__text">
          Платформа не берет комиссию за вывод, <br/> пользователь
          оплачивает только <br/> <span>комиссию сети</span><br />
          <span>TRC20 - (~4-8 USDT)</span><br/>
          <span>BEP20 - (~0,1 USDT)</span>
         </p>
          </div>
          <img
          src="./assets/img/logos/brand-logo.svg"
           alt=""
           class="popup__logo"
          />
         </div>`;

 document.body.append(sectionPopup);
 const popupCloseIcon = sectionPopup.querySelector('.popup__close');
 popupCloseIcon.addEventListener('click', () => closePopup(sectionPopup));
};

dashboardCondition.forEach((item) => {
 item.addEventListener('click', () => {
  switch (item.dataset.open) {
   case 'altcoins':
    openAltcoins();
    break;
   case 'partner':
    openPartner();
    break;
   case 'btc':
    openBtc();
    break;
  }
 });
});
