const months = [
 'Январь',
 'Февраль',
 'Март',
 'Апрель',
 'Май',
 'Июнь',
 'Июль',
 'Август',
 'Сентябрь',
 'Октябрь',
 'Ноябрь',
 'Декабрь',
];

let date = new Date();

const dates = document.querySelector('.dashboard__datepicker-dates');
const currentDate = document.querySelector('.dashboard__calendar-date-value');
const prevMonth = document.querySelector('.dashboard__datepicker-prev-date');
const nextMonth = document.querySelector('.dashboard__datepicker-next-date');
const calendarIcon = document.querySelector('.dashboard__calendar-date-icon');
const datepicker = document.querySelector('.dashboard__datepicker');
calendarIcon.addEventListener('click', () =>
 datepicker.classList.toggle('active')
);

const formatDate = (date) => {
 const day = String(date.getDate()).padStart(2, '0');
 const month = String(date.getMonth() + 1).padStart(2, '0');
 const year = date.getFullYear();
 return `${day}-${month}-${year}`;
};

const createButton = (number, className) => {
 const button = document.createElement('button');
 button.className = 'dashboard__datepicker-number';
 button.type = 'button';
 if (className) {
  button.classList.add(className);
 }
 button.textContent = String(number).padStart(2, '0');
 dates.append(button);
};

const updateCalendar = () => {
 const year = date.getFullYear();
 const month = date.getMonth();
 const today = new Date();
 today.setHours(0, 0, 0, 0);
 dates.innerHTML = '';

 const headerCurrentDate = document.querySelector(
  '.dashboard__datepicker-current-date-value'
 );
 headerCurrentDate.value = `${months[month]} ${year}`;

 const firstDayOfMonth = new Date(year, month, 1);
 const lastDayOfMonth = new Date(year, month + 1, 0);
 const prevLastDay = new Date(year, month, 0);

 const firstDayIndex =
  firstDayOfMonth.getDay() === 0 ? 7 : firstDayOfMonth.getDay();
 const lastDayIndex = lastDayOfMonth.getDay();
 const nextDays = 7 - (lastDayIndex === 0 ? 7 : lastDayIndex);

 for (let i = firstDayIndex - 1; i > 0; i--) {
  createButton(prevLastDay.getDate() - i + 1, 'inactive');
 }

 for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
  const currentDate = new Date(year, month, i);
  currentDate.setHours(0, 0, 0, 0);

  if (currentDate.toDateString() === today.toDateString()) {
   createButton(i, 'today');
  } else if (currentDate < today) {
   createButton(i, 'post');
  } else {
   createButton(i, 'inactive');
  }
 }

 for (let i = 1; i <= nextDays; i++) {
  createButton(i, 'inactive');
 }

 addDateClickEvents();
};

const addDateClickEvents = () => {
 const dateItems = dates.querySelectorAll('.dashboard__datepicker-number');

 dateItems.forEach((item) => {
  if (!item.classList.contains('inactive')) {
   item.addEventListener('click', () => {
    const selectedDay = parseInt(item.textContent, 10);
    const selectedDate = new Date(
     date.getFullYear(),
     date.getMonth(),
     selectedDay
    );

    if (selectedDate <= new Date()) {
     dateItems.forEach((btn) => btn.classList.remove('active'));

     item.classList.add('active');

     date = selectedDate;
     currentDate.value = formatDate(selectedDate);
    }
    datepicker.classList.remove('active');
   });
  }
 });
};

nextMonth.addEventListener('click', () => {
 date.setDate(1);
 date.setMonth(date.getMonth() + 1);
 updateCalendar();
});

prevMonth.addEventListener('click', () => {
 date.setDate(1);
 date.setMonth(date.getMonth() - 1);
 updateCalendar();
});

currentDate.value = formatDate(new Date());

updateCalendar();
