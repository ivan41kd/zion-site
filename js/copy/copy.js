const copyUserLink = (link) => {
 navigator.clipboard.writeText(link.textContent);
};

const asideCopyIcon = document.querySelector('.aside__copy-icon');
const asideLink = document.querySelector('.aside__copy-link');

const burgerCopyIcon = document.querySelector('.main__copy-icon');
const burgerLink = document.querySelector('.main__copy-link');

asideCopyIcon.addEventListener('click', () => copyUserLink(asideLink));
burgerCopyIcon.addEventListener('click', () => copyUserLink(burgerLink));
