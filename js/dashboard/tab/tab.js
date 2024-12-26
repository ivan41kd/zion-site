const dashboardTabs = document.querySelectorAll('.dashboard__bottom-tab');
const tabsContent = document.querySelectorAll('.dashboard-tab');

dashboardTabs.forEach((tab) => {
 tab.addEventListener('click', () => {
  // Удаляем класс 'active' у всех табов
  dashboardTabs.forEach((t) => t.classList.remove('active'));
  // Удаляем класс 'active' у всех контентов
  tabsContent.forEach((content) => {
   content.classList.remove('active');
   content.classList.add('inactive');
  });

  // Добавляем класс 'active' только для выбранного таба
  tab.classList.add('active');

  // Показать связанный контент
  tabsContent.forEach((content) => {
   if (tab.dataset.tab == content.dataset.tab) {
    content.classList.remove('inactive');
    content.classList.add('active');
   }
  });
 });
});
