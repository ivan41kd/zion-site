const renewButtons = document.querySelectorAll(
 '.dashboard__bottom-table-autorenew-button-wrapper'
);

renewButtons.forEach((button) => {
 const renewButton = button.querySelector('.dashboard__autorenew-button');
 renewButton.addEventListener('click', () => {
  button.classList.toggle('enabled');
 });
});
