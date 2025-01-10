const dashboardTabs = document.querySelectorAll('.dashboard__bottom-tab');
const tabsContent = document.querySelectorAll('.dashboard-tab');

dashboardTabs.forEach((tab) => {
 tab.addEventListener('click', () => {
  dashboardTabs.forEach((t) => t.classList.remove('active'));
  tabsContent.forEach((content) => {
   content.classList.remove('active');
   content.classList.add('inactive');
  });

  tab.classList.add('active');

  tabsContent.forEach((content) => {
   if (tab.dataset.tab == content.dataset.tab) {
    content.classList.remove('inactive');
    content.classList.add('active');
   }
  });
 });
});
