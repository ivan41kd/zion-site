const unhideHeader = document.querySelector('.dashboard__rules-unhide');
const rulesWrapper = document.querySelector('.dashboard__rules');

const unhideContent = (header, wrapper) => {
 const unhideTitle = wrapper.querySelector('.dashboard__rules-unhide-title');
 header.addEventListener('click', () => {
  wrapper.classList.toggle('show');
  wrapper.classList.contains('show')
   ? (unhideTitle.textContent = 'Скрыть')
   : (unhideTitle.textContent = 'Раскрыть');
 });
};

unhideContent(unhideHeader, rulesWrapper);
