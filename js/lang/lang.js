const headerLang = document.querySelectorAll('.header__lang');
const formLang = document.querySelectorAll('.form-layout__lang');
const mainLang = document.querySelectorAll('.main__lang');
const asideLang = document.querySelectorAll('.aside__lang');

headerLang.forEach((lang) => {
 const langItem = lang.querySelectorAll('.header__lang-list-item');
 const currentLang = lang.querySelector('.header__lang-current');
 langItem.forEach((item) => {
  item.addEventListener('click', () => {
   if (currentLang) {
    currentLang.textContent = item.textContent;
   }
  });
 });
});
if (formLang) {
 formLang.forEach((lang) => {
  const langItem = lang.querySelectorAll('.form-layout__lang-list-item');
  const currentLang = lang.querySelector('.form-layout__lang-current');
  langItem.forEach((item) => {
   item.addEventListener('click', () => {
    if (currentLang) {
     currentLang.textContent = item.textContent;
    }
   });
  });
 });
}

asideLang.forEach((lang) => {
 const langItem = lang.querySelectorAll('.aside__lang-list-item');
 const currentLang = lang.querySelector('.aside__lang-current');
 langItem.forEach((item) => {
  item.addEventListener('click', () => {
   if (currentLang) {
    currentLang.textContent = item.textContent;
   }
  });
 });
});
mainLang.forEach((lang) => {
 const langItem = lang.querySelectorAll('.main__lang-list-item');
 langItem.forEach((item) => {
  item.addEventListener('click', () => {
   console.log('Selected');
  });
 });
});
