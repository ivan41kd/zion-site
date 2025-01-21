const years = document.querySelectorAll('.statistics__year');

years.forEach((year) => {
 year.addEventListener('click', () => {
  console.log(year);
  // Удаляем класс 'active' со всех элементов
  years.forEach((y) => y.classList.remove('active'));
  // Добавляем класс 'active' только к текущему элементу
  year.classList.add('active');
 });
});
