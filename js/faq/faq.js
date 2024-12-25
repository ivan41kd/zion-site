const faqItems = document.querySelectorAll('.faq__item');

const openQuestion = (questions) => {
 questions.forEach((question) => {
  question.addEventListener('click', () => {
   if (question.classList.contains('active')) {
    question.classList.remove('active');
   } else {
    questions.forEach((quest) => quest.classList.remove('active'));
    question.classList.add('active');
   }
  });
 });
};
openQuestion(faqItems);
