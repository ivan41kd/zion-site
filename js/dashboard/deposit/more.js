const more = document.querySelector('.dashboard__more');
const openMore = (element) => {
 element.addEventListener('click', () => {
  element.classList.toggle('active');
 });
};

openMore(more);
