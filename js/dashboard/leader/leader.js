const leaders = [
 {
  arr: [
   {
    quantity: 5,
    maxquantity: 5,
    turnover: 10000,
    maxturnover: 10000,
    levellead: 4,
    yourlevel: 4,
    bonus: 100,
   },
   {
    quantity: 5,
    maxquantity: 5,
    turnover: 50000,
    maxturnover: 50000,
    levellead: 5,
    yourlevel: 5,
    bonus: 500,
   },
   {
    quantity: 2,
    maxquantity: 5,
    turnover: 172000,
    maxturnover: 300000,
    levellead: 6,
    yourlevel: 6,
    bonus: 3000,
   },
   {
    quantity: 0,
    maxquantity: 5,
    turnover: 0,
    maxturnover: 750000,
    levellead: 7,
    yourlevel: 7,
    bonus: 7500,
   },
   {
    quantity: 0,
    maxquantity: 5,
    turnover: 0,
    maxturnover: 1500000,
    levellead: 8,
    yourlevel: 8,
    bonus: 15000,
   },
  ],
 },

 {
  arr: [
   {
    quantity: 0,
    maxquantity: 10,
    turnover: 0,
    maxturnover: 2500000,
    levellead: 5,
    yourlevel: 5,
    bonus: 5000,
   },
   {
    quantity: 0,
    maxquantity: 10,
    turnover: 0,
    maxturnover: 3500000,
    levellead: 6,
    yourlevel: 6,
    bonus: 10000,
   },
   {
    quantity: 0,
    maxquantity: 10,
    turnover: 0,
    maxturnover: 4500000,
    levellead: 7,
    yourlevel: 7,
    bonus: 15000,
   },
   {
    quantity: 0,
    maxquantity: 8,
    turnover: 0,
    maxturnover: 5500000,
    levellead: 8,
    yourlevel: 8,
    bonus: 20000,
   },
   {
    quantity: 0,
    maxquantity: 6,
    turnover: 0,
    maxturnover: 6500000,
    levellead: 9,
    yourlevel: 9,
    bonus: 25000,
   },
  ],
 },
 {
  arr: [
   {
    quantity: 0,
    maxquantity: 10,
    turnover: 0,
    maxturnover: 10000000,
    levellead: 8,
    yourlevel: 8,
    bonus: 10000,
   },
   {
    quantity: 0,
    maxquantity: 10,
    turnover: 0,
    maxturnover: 12500000,
    levellead: 9,
    yourlevel: 9,
    bonus: 70000,
   },
   {
    quantity: 0,
    maxquantity: 10,
    turnover: 0,
    maxturnover: 15000000,
    levellead: 10,
    yourlevel: 10,
    bonus: 75000,
   },
   {
    quantity: 0,
    maxquantity: 6,
    turnover: 0,
    maxturnover: 20000000,
    levellead: 11,
    yourlevel: 11,
    bonus: 100000,
   },
   {
    quantity: 0,
    maxquantity: 5,
    turnover: 0,
    maxturnover: 25000000,
    levellead: 12,
    yourlevel: 12,
    bonus: 200000,
   },
  ],
 },
];

const blockItems = document.querySelector('.dashboard__leader-block-items');
const blockLinesWrapper = document.querySelector(
 '.dashboard__leader-block-lines'
);
const defPercent = (value1, maxValue1, value2, maxValue2) => {
 const percent1 = maxValue1 ? (value1 / maxValue1) * 100 : 0;
 const percent2 = maxValue2 ? (value2 / maxValue2) * 100 : 0;

 if (percent1 === 0 && percent2 === 0) return 0;
 return (percent1 + percent2) / 2;
};

const calculateOverallProgress = (arr) => {
 let totalTurnover = 0;
 let totalMaxTurnover = 0;

 arr.forEach((item) => {
  totalTurnover += item.turnover;
  totalMaxTurnover += item.maxturnover;
 });

 return totalMaxTurnover ? (totalTurnover / totalMaxTurnover) * 100 : 0;
};

const renderLines = (arr) => {
 blockLinesWrapper.innerHTML = '';
 const formatter = new Intl.NumberFormat('en-EN');

 arr.forEach((item, index) => {
  const progressPercent = defPercent(
   item.turnover,
   item.maxturnover,
   item.quantity,
   item.maxquantity
  );
  const progressBarWidth = Math.max(progressPercent, 2);
  const blockLine = document.createElement('div');
  blockLine.className = 'dashboard__leader-block-line';

  blockLine.innerHTML = `
        <div class="dashboard__leader-block-line-container">
          <div class="dashboard__leader-block-line-wrapper ${
           item.turnover === item.maxturnover &&
           item.quantity === item.maxquantity
            ? 'completed'
            : ''
          }">
            <div class="dashboard__leader-block-line-col">
            ${
             index >= 1
              ? `<div class='dashboard__leader-block-line-col-name-wrapper'>
            <p class="dashboard__leader-block-line-col-name">Линии</p>
            <img
            src="./assets/img/icons/tooltip-icon.svg"
            alt="ZION TOOLTIP"
            class="dashboard__leader-tooltip-icon"
           />
           <div class="dashboard__leader-tooltip-container line">
           <p class="dashboard__leader-tooltip-text">
           Для выполнения задания надо иметь хотя бы одного лидера<br/> необходимого уровня в каждой требуемой линии
           </p>
          </div>
            </div>`
              : `<p class="dashboard__leader-block-line-col-name">Линии</p>`
            }
              <p class="dashboard__leader-block-line-col-value">1${
               index >= 1 ? `-${index + 1}` : ''
              }</p>
            </div>
            <div class="dashboard__leader-block-line-col">
            ${
             index == 1
              ? `<div class='dashboard__leader-block-line-col-name-wrapper'>
            <p class="dashboard__leader-block-line-col-name">Количество лидеров</p>
            <img
            src="./assets/img/icons/tooltip-icon.svg"
            alt="ZION TOOLTIP"
            class="dashboard__leader-tooltip-icon"
           />
           <div class="dashboard__leader-tooltip-container">
           <p class="dashboard__leader-tooltip-text">
           Лидеры должны быть в 1-ой и во 2-ой линии
           </p>
          </div>
            </div>`
              : index == 2
                ? `<div class='dashboard__leader-block-line-col-name-wrapper'>
              <p class="dashboard__leader-block-line-col-name">Количество лидеров</p>
              <img
              src="./assets/img/icons/tooltip-icon.svg"
              alt="ZION TOOLTIP"
              class="dashboard__leader-tooltip-icon"
             />
             <div class="dashboard__leader-tooltip-container">
             <p class="dashboard__leader-tooltip-text">
             Лидеры должны быть в 1-й, 2-й и 3-й линиях
             </p>
            </div>
              </div>`
                : index == 3
                  ? `<div class='dashboard__leader-block-line-col-name-wrapper'>
                <p class="dashboard__leader-block-line-col-name">Количество лидеров</p>
                <img
                src="./assets/img/icons/tooltip-icon.svg"
                alt="ZION TOOLTIP"
                class="dashboard__leader-tooltip-icon"
               />
               <div class="dashboard__leader-tooltip-container">
               <p class="dashboard__leader-tooltip-text">
               Лидеры должны быть в 1-й, 2-й, 3-й и 4-й линиях
               </p>
              </div>
                </div>`
                  : index == 4
                    ? `<div class='dashboard__leader-block-line-col-name-wrapper'>
                <p class="dashboard__leader-block-line-col-name">Количество лидеров</p>
                <img
                src="./assets/img/icons/tooltip-icon.svg"
                alt="ZION TOOLTIP"
                class="dashboard__leader-tooltip-icon"
               />
               <div class="dashboard__leader-tooltip-container">
               <p class="dashboard__leader-tooltip-text">
               Лидеры должны быть в 1-й, 2-й, 3-й, 4-й и 5-й линиях
               </p>
              </div>
                </div>`
                    : `<p class="dashboard__leader-block-line-col-name">Количество лидеров</p>`
            }
              <p class="dashboard__leader-block-line-col-value">${
               item.quantity
              }/${item.maxquantity}</p>
            </div>
            <div class="dashboard__leader-block-line-col">
              <p class="dashboard__leader-block-line-col-name">Уровень лидеров</p>
              <div class="dashboard__leader-block-line-col-level level-${
               item.levellead
              }">
                <img
                  src="./assets/img/levels/level-${item.levellead}.png"
                  alt="ZION УРОВЕНЬ"
                  class="dashboard__leader-block-line-col-level-icon"
                />
                <p class="dashboard__leader-block-line-col-level-value">${
                 item.levellead
                }</p>
              </div>
            </div>
            <div class="dashboard__leader-block-line-col">
            <div class='dashboard__leader-block-line-col-name-wrapper'>
            <p class="dashboard__leader-block-line-col-name">Ваш уровень</p>
            <img
            src="./assets/img/icons/tooltip-icon.svg"
            alt="ZION TOOLTIP"
            class="dashboard__leader-tooltip-icon"
           />
           <div class="dashboard__leader-tooltip-container">
           <p class="dashboard__leader-tooltip-text">
           Для выполнения задания, у вас должен быть требуемый уровень
           </p>
          </div>
            </div>
              <div class="dashboard__leader-block-line-col-level level-${
               item.yourlevel
              }">
                <img
                  src="./assets/img/levels/level-${item.yourlevel}.png"
                  alt="ZION УРОВЕНЬ"
                  class="dashboard__leader-block-line-col-level-icon"
                />
                <p class="dashboard__leader-block-line-col-level-value">${
                 item.yourlevel
                }</p>
              </div>
            </div>
            <div class="dashboard__leader-block-line-col">
              <p class="dashboard__leader-block-line-col-name">Оборот структуры</p>
              <p class="dashboard__leader-block-line-col-value amount">
              $ ${formatter.format(item.turnover)} / ${formatter.format(
               item.maxturnover
              )}
              </p>
            </div>
          </div>
          <div class="dashboard__leader-block-progress level-${item.yourlevel}">
          <p class="dashboard__leader-block-progress-value">  ${Math.round(progressPercent)}%</p>
            <div class="dashboard__leader-block-progress-bar">
              <div class="dashboard__leader-block-progress-bar-wrapper" style="width: ${progressBarWidth}%; min-width: 2%;">
              <span></span>
              </div>
            </div>
          </div>
        </div>
        <div class="dashboard__leader-block-line-get level-${item.yourlevel} ${
         item.turnover != item.maxturnover && item.quantity != item.maxquantity
          ? 'locked'
          : ''
        }">

        ${
         item.turnover === item.maxturnover &&
         item.quantity === item.maxquantity
          ? `          <a href='withdraw-leader-crypto.html'>
           <button class="dashboard__leader-block-line-button">Забрать бонус</button>
         </a>`
          : ' <button class="dashboard__leader-block-line-button">Забрать бонус</button>'
        }

          <p class="dashboard__leader-block-line-amount">$ ${formatter.format(
           item.bonus
          )}</p>
        </div>
      `;

  blockLinesWrapper.append(blockLine);
 });
};

const renderBlocks = (leaders) => {
 leaders.forEach((leader, index) => {
  const blockDiv = document.createElement('div');
  blockDiv.className = 'dashboard__leader-block-item';
  blockDiv.textContent = `Блок ${index + 1}`;

  if (index === 0) {
   blockDiv.classList.add('active');
  }

  blockItems.append(blockDiv);

  blockDiv.addEventListener('click', () => {
   document
    .querySelectorAll('.dashboard__leader-block-item')
    .forEach((item) => {
     item.classList.remove('active');
    });

   blockDiv.classList.add('active');

   renderLines(leader.arr);
  });
 });
};

renderBlocks(leaders);
renderLines(leaders[0].arr);
