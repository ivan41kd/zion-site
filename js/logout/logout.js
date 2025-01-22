const logOut = () => {
 localStorage.removeItem('isAuthorized');
 window.location.href = '/login.html';
};

const logoutButton = document.querySelector('.aside__logout');

const logoutBurgerButton = document.querySelector('.main__logout');

logoutButton.addEventListener('click', logOut);
logoutBurgerButton.addEventListener('click', logOut);
