const select = document.querySelectorAll('.dashboard__select');

const openSelect = (menu) => {
 menu.classList.toggle('active');
 const menuItems = menu.querySelectorAll('.dashboard__select-item');
 menuItems.forEach((item) => {
  item.addEventListener('click', () => {
   selectItem(menu, item);
  });
 });
};

const selectItem = (menu, item) => {
 const currentMenuItem = menu.querySelector(
  '.dashboard__select-current-wrapper'
 );

 if (menu.classList.contains('wallet')) {
  const itemIcon = item.querySelector('.dashboard__select-item-icon');
  const itemText = item.textContent;
  currentMenuItem.innerHTML = `
    <img
                src=${itemIcon.src}
                alt="ZION ИКОНКА"
                class="dashboard__select-current-icon"
               />
               ${itemText}
    `;
 } else if (menu.classList.contains('network')) {
  const itemInfoWrapper = item.querySelectorAll('.dashboard__select-item-info');
  const itemInfoName = itemInfoWrapper[0].querySelector(
   '.dashboard__select-item-info-name'
  );
  const itemInfoSub = itemInfoWrapper[0].querySelector(
   '.dashboard__select-item-info-subtitle'
  );
  currentMenuItem.innerHTML = `${itemInfoName.textContent} <span>${itemInfoSub.textContent}</span>
    `;
  menu.classList.add('verified');
  if (menu.classList.contains('depo')) checkFields(menu);
 }
};

select.forEach((menu) => {
 menu.addEventListener('click', () => openSelect(menu));
});
