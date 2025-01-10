const addressInput = document.querySelector(
 '.dashboard__withdraw-input.address'
);
const addressInputWrapper = document.querySelector(
 '.dashboard__withdraw-input-container.address'
);
const amountInput = document.querySelector('.dashboard__withdraw-input.amount');
const amountInputWrapper = document.querySelector(
 '.dashboard__withdraw-input-container.amount'
);
const codeInput = document.querySelector('.dashboard__withdraw-input.code');
const codeInputWrapper = document.querySelector(
 '.dashboard__withdraw-input-container.code'
);
const form = document.querySelector('.dashboard__withdraw-form');

form.addEventListener('submit', (e) => {
 e.preventDefault();
 checkAddress(addressInputWrapper, addressInput);
 maxAmount(amountInputWrapper, amountInput);
 checkCode(codeInputWrapper, codeInput);
 finishWithdraw();
});
