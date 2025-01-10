const address = document.querySelector('.dashboard__payment-address');
const checkFields = (menu) => {
 if (menu.classList.contains('verified')) {
  address.classList.add('visible');
  const progressContainer = document.querySelector(
   '.dashboard__payment-progress'
  );
  const existWrapper = document.querySelector(
   '.dashboard__payment-progress-value-wrapper.last'
  );

  if (!existWrapper) {
   const progressWrapper = document.createElement('div');
   progressWrapper.className = 'dashboard__payment-progress-value-wrapper last';
   progressWrapper.innerHTML =
    '<span class="dashboard__payment-progress-value">3</span>';
   progressContainer.appendChild(progressWrapper);
  }
 }
};
