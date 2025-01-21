const partnerLines = document.querySelectorAll('.dashboard__partner-line');
const inviteButton = document.querySelector(
 '.dashboard__partner-invite-button'
);
const inviteInput = document.querySelector('.dashboard__partner-invite-input');
const inviteElement = document.querySelector('.dashboard__partner-card.invite');

partnerLines.forEach((line) => {
 const unhide = line.querySelector('.dashboard__partner-table-unhide');
 unhide.addEventListener('click', () => {
  line.classList.toggle('active');
  line.classList.contains('active')
   ? (unhide.textContent = 'Скрыть')
   : (unhide.textContent = 'Раскрыть');
 });
});

const saveLink = (input) => {
 const regex = /https?:\/\/crypto\d{24,}/;
 if (regex.test(input.value)) {
  const invitedElement = document.createElement('div');
  invitedElement.className = 'dashboard__invited';
  invitedElement.innerHTML = `        <p class="dashboard__invited-title">Вас пригласил</p>
   <div class="dashboard__invited-user">
    <img
     src="./assets/img/icons/invited-icon.svg"
     alt="ZION ПРИГЛАСИВШИЙ"
     class="dashboard__invited-user-icon"
    />
    <p class="dashboard__invited-user-name">mjasajaa</p>
   </div>`;
  inviteElement.replaceWith(invitedElement);
 }
};

inviteButton.addEventListener('click', () => {
 saveLink(inviteInput);
});
