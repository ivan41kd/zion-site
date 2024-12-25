const burgerIcon = document.querySelectorAll('.header__burger-icon');
const burgerMenu = document.querySelector('.header__burger');

burgerIcon.forEach((icon) => {
 icon.addEventListener('click', () => {
  burgerMenu.classList.toggle('active');
 });
});
