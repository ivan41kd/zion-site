const checkAuthorization = () => {
 const isAuthorized = localStorage.getItem('isAuthorized');
 const headerButton = document.querySelector('.header__button');
 const heroButton = document.querySelector('.hero__button');
 if (!isAuthorized) {
  headerButton.textContent = 'Войти';
  headerButton.classList.add('login');
  heroButton.textContent = 'Создать аккаунт';
  heroButton.classList.add('create');
 } else {
  headerButton.classList.add('authorized');
  headerButton.textContent = 'Дашборд';
  headerButton.parentElement.href = 'dashboard.html';
  heroButton.parentElement.href = 'dashboard.html';
  heroButton.classList.add('authorized');
  heroButton.textContent = 'Дашборд';
 }
};

checkAuthorization();
