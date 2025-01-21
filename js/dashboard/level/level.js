const levels = [
 {
  level: 1,
  profit: 5,
  img: './assets/img/levels/level-1.png',
  tasks: [
   {
    partners: 1,
    maxpartners: 1,
   },
   {
    deposit: 0,
    maxdeposit: 100,
   },
  ],
 },
 {
  level: 2,
  profit: 10,
  img: './assets/img/levels/level-2.png',
  tasks: [
   {
    partners: 1,
    maxpartners: 2,
   },
   {
    deposit: 0,
    maxdeposit: 200,
   },
  ],
 },
 {
  level: 3,
  profit: 15,
  img: './assets/img/levels/level-3.png',
  tasks: [
   {
    partners: 1,
    maxpartners: 4,
   },
   {
    deposit: 0,
    maxdeposit: 1000,
   },
   {
    leader: 0,
    maxleader: 1,
   },
   {
    bonus: 50,
   },
  ],
 },
 {
  level: 4,
  profit: 20,
  img: './assets/img/levels/level-4.png',
  tasks: [
   {
    partners: 1,
    maxpartners: 8,
   },
   {
    deposit: 0,
    maxdeposit: 8000,
   },
   {
    leader: 0,
    maxleader: 1,
   },
   {
    bonus: 100,
   },
  ],
 },
 {
  level: 5,
  profit: 25,
  img: './assets/img/levels/level-5.png',
  tasks: [
   {
    partners: 1,
    maxpartners: 16,
   },
   {
    deposit: 0,
    maxdeposit: 40000,
   },
   {
    leader: 0,
    maxleader: 1,
   },
   {
    bonus: 400,
   },
  ],
 },
 {
  level: 6,
  profit: 30,
  img: './assets/img/levels/level-6.png',
  tasks: [
   {
    partners: 1,
    maxpartners: 24,
   },
   {
    deposit: 0,
    maxdeposit: 80000,
   },
   {
    leader: 0,
    maxleader: 1,
   },
   {
    bonus: 800,
   },
  ],
 },
 {
  level: 7,
  profit: 35,
  img: './assets/img/levels/level-7.png',
  tasks: [
   {
    partners: 1,
    maxpartners: 36,
   },
   {
    deposit: 0,
    maxdeposit: 160000,
   },
   {
    leader: 0,
    maxleader: 1,
   },
   {
    bonus: 1600,
   },
  ],
 },
 {
  level: 8,
  profit: 40,
  img: './assets/img/levels/level-8.png',
  tasks: [
   {
    partners: 1,
    maxpartners: 48,
   },
   {
    deposit: 0,
    maxdeposit: 320000,
   },
   {
    leader: 0,
    maxleader: 1,
   },
   {
    bonus: 3200,
   },
  ],
 },
 {
  level: 9,
  profit: 42.5,
  img: './assets/img/levels/level-9.png',
  tasks: [
   {
    partners: 1,
    maxpartners: 60,
   },
   {
    deposit: 0,
    maxdeposit: 640000,
   },
   {
    leader: 0,
    maxleader: 1,
   },
   {
    bonus: 6400,
   },
  ],
 },
 {
  level: 10,
  profit: 45,
  img: './assets/img/levels/level-10.png',
  tasks: [
   {
    partners: 1,
    maxpartners: 120,
   },
   {
    deposit: 0,
    maxdeposit: 1280000,
   },
   {
    leader: 0,
    maxleader: 1,
   },
   {
    bonus: 12800,
   },
  ],
 },
 {
  level: 11,
  profit: 47.5,
  img: './assets/img/levels/level-11.png',
  tasks: [
   {
    partners: 1,
    maxpartners: 240,
   },
   {
    deposit: 0,
    maxdeposit: 1280000 * 2,
   },
   {
    leader: 0,
    maxleader: 1,
   },
   {
    bonus: 12800 * 2,
   },
  ],
 },
 {
  level: 12,
  img: './assets/img/levels/level-12.png',
  profit: 50,
 },
];

let currentLevel = levels[0];
let levelTasks = currentLevel.tasks;
const levelSlides = document.querySelectorAll('.dashboard__progress-slide');

const renderLevel = ({ level, profit, img }) => {
 const dashboardLevel = document.querySelector('.dashboard__level-up-wrapper');
 dashboardLevel.className = `dashboard__level-up-wrapper level-${level}`;
 const levelWrapper = document.querySelector('.dashboard__level-wrapper');
 levelWrapper.innerHTML = `        
       <div class="dashboard__level-info">
       <p class="dashboard__level-info-name">Текущий уровень</p>
        <p class="dashboard__level-info-title">Уровень ${level}</p>
        <p class="dashboard__level-info-value">${profit}%</p>
       </div>
       <img
       src=${img}
       alt="ZION УРОВЕНЬ ${level}"
       class="dashboard__level-icon"
      />
       `;
};
const renderTasks = (level, tasks) => {
 const tasksWrapper = document.querySelector('.dashboard__level-tasks-wrapper');
 if (level.level != 12) {
  tasksWrapper.classList.remove('completed');
  tasksWrapper.innerHTML = `<p class="dashboard__level-tasks-name">Задания</p>
   
                 <div class="dashboard__level-progress"></div>
                 <p class="dashboard__level-tasks-subtitle">
               После выполнения условий, переход на новый уровень автоматически
               произойдет в 00:00 UTC
              </p>
                 `;
  const dashboardProgress = tasksWrapper.querySelector(
   '.dashboard__level-progress'
  );

  tasks.forEach((task, index) => {
   const progressWrapper = document.createElement('div');
   progressWrapper.className = 'dashboard__level-progress-wrapper';
   dashboardProgress.append(progressWrapper);
   const progressWrappers = document.querySelectorAll(
    '.dashboard__level-progress-wrapper'
   );

   switch (index) {
    case 0: {
     const currentWrapper = progressWrappers[index];
     currentWrapper.innerHTML = '';
     currentWrapper.innerHTML = `<div class="dashboard__level-progress-title-wrapper">
                      Количество партнеров
                     </div>
                     <div class="dashboard__level-progress-value-wrapper ${
                      task.partners == task.maxpartners ? 'completed' : ''
                     }">
                      ${task.partners}/${task.maxpartners}
                      <img
                      src="./assets/img/icons/usdt-icon.svg"
                       alt="ZION USDT"
                       class="dashboard__level-progress-icon"
                      />
                     </div>
                    </div>`;
     break;
    }
    case 1: {
     const currentWrapper = progressWrappers[index];
     currentWrapper.innerHTML = '';
     currentWrapper.innerHTML = `
                     <div class="dashboard__level-progress-title-wrapper">
                     <p class="dashboard__level-progress-title">Сумма депозитов</p>
                     <img
                     src="./assets/img/icons/usdt-icon.svg"
                     alt=""
                     class="dashboard__level-progress-icon"
                    />
                     </div>
                     <div class="dashboard__level-progress-value-wrapper ${
                      task.deposit == task.maxdeposit ? 'completed' : ''
                     }">
                      ${task.deposit}/${task.maxdeposit}
                      <img
                      src="./assets/img/icons/usdt-icon.svg"
                       alt=""
                       class="dashboard__level-progress-icon"
                      />
                     </div>
                    `;
     break;
    }
    case 2: {
     const currentWrapper = progressWrappers[index];
     currentWrapper.innerHTML = '';
     currentWrapper.innerHTML = `
                     <div class="dashboard__level-progress-title-wrapper">
                     <p class="dashboard__level-progress-title">Лидер в 1 линии уровня</p>
                     <img
                     src="./assets/img/levels/level-${currentLevel.level}.png"
                     alt=""
                     class="dashboard__level-progress-icon"
                    />
                    <span>${currentLevel.level}</span>
                     </div>
                     <div class="dashboard__level-progress-value-wrapper ${
                      task.leader == task.maxleader ? 'completed' : ''
                     }">
                      ${task.leader}/${task.maxleader}
                     </div>
                    </div>
                    `;
     break;
    }
    case 3: {
     const currentWrapper = progressWrappers[index];
     currentWrapper.innerHTML = '';
     currentWrapper.innerHTML = `
                     <div class="dashboard__level-progress-title-wrapper">
                     <p class="dashboard__level-progress-title">Бонус к депозиту</p>
                     <img
                     src="./assets/img/icons/usdt-icon.svg"
                     alt=""
                     class="dashboard__level-progress-icon"
                    />
                     </div>
                     <div class="dashboard__level-progress-value-wrapper completed">
                     ${task.bonus}
                     <img
                     src="./assets/img/icons/usdt-icon.svg"
                      alt=""
                      class="dashboard__level-progress-icon"
                     />
                       </div>
                    `;
     break;
    }
   }
  });
 } else {
  tasksWrapper.classList.add('completed');
  tasksWrapper.innerHTML = `        <div class="dashboard__level-completed">
      <p class="dashboard__level-completed-title">Поздравляем!</p>
      <p class="dashboard__level-completed-subtitle">«Теперь ты знаешь насколько 
          глубока кроличья нора»</p>
      </div>`;
 }
};

const copyIcon = document.querySelector('.dashboard__level-link-copy-icon');
const linkValue = document.querySelector('.dashboard__level-link-value');
const copyLink = (link) => {
 navigator.clipboard.writeText(link.textContent);
};
copyIcon.addEventListener('click', () => {
 copyLink(linkValue);
});
renderLevel(currentLevel);
renderTasks(currentLevel, levelTasks);
