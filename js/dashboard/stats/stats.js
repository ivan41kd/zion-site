const statsArr = [
 {
  amount: 100000000,
  maxamount: 100000000,
 },
 {
  amount: 10000,
  maxamount: 100000000,
 },
 {
  amount: 1000000,
  maxamount: 100000000,
 },
];

const defPercent = (value1, maxValue1) => {
 // Рассчитываем процент
 const percent = maxValue1 ? (value1 / maxValue1) * 100 : 0;
 return percent;
};

const infoWrappers = document.querySelectorAll('.dashboard__stats-info');

// Обрабатываем каждый объект в statsArr и соответствующий круг
statsArr.forEach((item, index) => {
 const circle = infoWrappers[index].querySelector(
  '.dashboard__stats-circle-progress'
 ); // получаем соответствующий элемент circle
 const mobileCricle = infoWrappers[index].querySelector(
  '.dashboard__stats-circle-progress.mobile'
 );
 if (circle) {
  // Устанавливаем значение для каждого круга в CSS переменную '--value'
  circle.style.setProperty('--value', defPercent(item.amount, item.maxamount));
 }
 if (mobileCricle) {
  // Устанавливаем значение для каждого круга в CSS переменную '--value'
  mobileCricle.style.setProperty(
   '--value',
   defPercent(item.amount, item.maxamount)
  );
 }
});
