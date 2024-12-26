const burgerIcon = document.querySelectorAll('.header__burger-icon');
const burgerMenu = document.querySelector('.header__burger');
const mainBurgerIcon = document.querySelectorAll('.main__burger-icon');
const mainBurgerMenu = document.querySelector('.main__burger');

burgerIcon.forEach((icon) => {
 icon.addEventListener('click', () => {
  burgerMenu.classList.toggle('active');
  document.body.classList.toggle('scroll-disabled');
 });
});
mainBurgerIcon.forEach((icon) => {
 icon.addEventListener('click', () => {
  mainBurgerMenu.classList.toggle('active');
  document.body.classList.toggle('scroll-disabled');
 });
});
