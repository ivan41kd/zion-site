const statisticsLevels = [
 {
  level: 1,
  value: 5,
 },
 {
  level: 2,
  value: 10,
 },
 {
  level: 3,
  value: 15,
 },
 {
  level: 4,
  value: 20,
 },
 {
  level: 5,
  value: 25,
 },
 {
  level: 6,
  value: 30,
 },
 {
  level: 7,
  value: 35,
 },
 {
  level: 8,
  value: 40,
 },
 {
  level: 9,
  value: 45,
 },
 {
  level: 10,
  value: 50,
 },
];
const elementIsVisibleInViewport = (el, partiallyVisible = false) => {
 if (!el) return false;
 const rect = el.getBoundingClientRect();
 const { innerHeight, innerWidth } = window;

 if (partiallyVisible) {
  const isVerticalVisible =
   (rect.top >= 0 && rect.top < innerHeight) ||
   (rect.bottom > 0 && rect.bottom <= innerHeight);
  const isHorizontalVisible =
   (rect.left >= 0 && rect.left < innerWidth) ||
   (rect.right > 0 && rect.right <= innerWidth);
  return isVerticalVisible && isHorizontalVisible;
 }

 return (
  rect.top >= 0 &&
  rect.left >= 0 &&
  rect.bottom <= innerHeight &&
  rect.right <= innerWidth
 );
};

let isAnimating = false;
const statisticsSection = document.querySelector('.statistics');
const graph = statisticsSection.querySelector('.statistics__main-line');
const graphMain = statisticsSection.querySelector('.statistics__graph-main');
const graphBg = statisticsSection.querySelector('.statistics__graph-bg');
const lines = statisticsSection.querySelectorAll('line animate');
const mobileLines = statisticsSection.querySelectorAll(
 '.statistics__mobile-line animate'
);
const graphPercents = statisticsSection.querySelector(
 '.statistics__graph-percents'
);
const graphPercentsMobile = statisticsSection.querySelector(
 '.statistics__graph-percents.mobile'
);

const graphMobile = statisticsSection.querySelector(
 '.statistics__graph-main.mobile'
);
const levelMobileWrapper = statisticsSection.querySelector(
 '.statistics__level-items'
);

const levelsMobile = statisticsSection.querySelector(
 '.statistics__levels.mobile'
);

const renderLevels = (levelsarr, wrapper) => {
 levelsarr.forEach((level) => {
  const levelItem = document.createElement('p');
  levelItem.className = 'statistics__level';
  levelItem.textContent = `Уровень ${level.level}`;

  const mobileLevelItem = document.createElement('li');
  mobileLevelItem.className = 'statistics__level-item';
  mobileLevelItem.textContent = `Уровень ${level.level}`;
  levelMobileWrapper.append(mobileLevelItem);

  wrapper.append(levelItem);
  levelItem.addEventListener('click', () => {
   if (!isAnimating) selectLevel(level);
  });
  mobileLevelItem.addEventListener('click', () => {
   if (!isAnimating) selectLevel(level);
  });
 });
};

const resetAnimations = () => {
 const line = document.querySelectorAll('.statistics__line');
 const mobileLine = document.querySelectorAll('.statistics__mobile-line');
 line.forEach((animateline) => {
  animateline.style.visibility = 'hidden';
 });
 mobileLine.forEach((animateline) => {
  animateline.style.visibility = 'hidden';
 });
};

const selectLevel = ({ level, value }) => {
 const currentLevel = statisticsSection.querySelector(
  '.statistics__current-level'
 );
 const currentMobileLevel = levelsMobile.querySelector(
  '.statistics__current-level'
 );

 currentLevel.textContent = `Уровень ${level} - ${value}%`;
 currentMobileLevel.textContent = `Уровень ${level} - ${value}%`;
 if (!isAnimating) {
  isAnimating = true;

  resetAnimations();
  statisticsSection.classList.remove('month-appear');
  graph.classList.remove('animation');
  graph.classList.remove('anim-end');
  graphMain.classList.remove('line-anim-end');
  graph.classList.add('anim-out');
  graphMain.classList.remove('circle-appear');
  graphMobile.classList.remove('value-appear');

  const result = -60 + level * 8 + level / value;
  const mobileResult = -52.5 + level * 8.5 + level / value;

  setTimeout(() => {
   graph.classList.remove('anim-out');
   graph.classList.add('anim-end');
   graph.classList.add('animation');
   graphMain.classList.add('line-anim-end');
   graphPercents.style.transform = `translateY(${result}%)`;
   graphPercentsMobile.style.transform = `translateY(${mobileResult}%)`;
  }, 3000);

  setTimeout(() => graphBg.classList.remove('appeared'), 2400);
  setTimeout(() => graphBg.classList.add('appeared'), 5500);

  setTimeout(() => {
   startMobileAnimations();
  }, 4000);
  setTimeout(() => {
   startAnimations();
   setTimeout(() => {
    graphMain.classList.add('circle-appear');
    statisticsSection.classList.add('month-appear');
    graphMobile.classList.add('value-appear');
    isAnimating = false;
   }, 6500);
  }, 6000);
 }
};

const statisticsLevelsWrapper = statisticsSection.querySelector(
 '.statistics__levels'
);
renderLevels(statisticsLevels, statisticsLevelsWrapper);

const startAnimations = () => {
 lines.forEach((animate) => {
  const line = animate.parentElement;
  if (line) {
   line.style.visibility = 'hidden';
  }
 });

 lines.forEach((animate, index) => {
  setTimeout(() => {
   const line = animate.parentElement;
   if (line) {
    line.style.visibility = 'visible';
   }
   animate.beginElement();
  }, index * 500);
 });
};

const startMobileAnimations = () => {
 mobileLines.forEach((animate) => {
  const line = animate.parentElement;
  if (line) {
   line.style.visibility = 'hidden';
  }
 });
 mobileLines.forEach((animate, index) => {
  setTimeout(() => {
   const line = animate.parentElement;
   if (line) {
    line.style.visibility = 'visible';
   }
   animate.beginElement();
  }, index * 350);
 });
};

document.addEventListener('DOMContentLoaded', () => {
 window.addEventListener('scroll', () => {
  if (
   elementIsVisibleInViewport(graph) &&
   !graph.classList.contains('anim-end') &&
   !isAnimating
  ) {
   isAnimating = true;

   graph.classList.add('animation');
   setTimeout(() => {
    graph.classList.remove('animation');
    graph.classList.add('anim-end');
    graphBg.classList.add('appeared');
    graphMain.classList.add('line-anim-end');
    startAnimations();

    isAnimating = false;
   }, 2500);

   startMobileAnimations();

   setTimeout(() => {
    graphMain.classList.add('circle-appear');
    statisticsSection.classList.add('month-appear');
    graphMobile.classList.add('value-appear');
    setTimeout(() => {
     statisticsSection.classList.add('visible');
    }, 500);
   }, 8500);
  }
 });
});
