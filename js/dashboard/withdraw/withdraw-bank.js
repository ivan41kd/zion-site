const bankCardInput = document.querySelector(
 '.dashboard__withdraw-input.bankcard'
);
const bankCardInputWrapper = document.querySelector(
 '.dashboard__withdraw-input-container.bankcard'
);

const phoneInput = document.querySelector('.dashboard__withdraw-input.phone');
const phoneInputWrapper = document.querySelector(
 '.dashboard__withdraw-input-container.phone'
);
const bankInput = document.querySelector('.dashboard__withdraw-input.bank');
const bankInputWrapper = document.querySelector(
 '.dashboard__withdraw-input-container.bank'
);
const fullNameInput = document.querySelector(
 '.dashboard__withdraw-input.fullname'
);
const fullNameInputWrapper = document.querySelector(
 '.dashboard__withdraw-input-container.fullname'
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

initPhone(phoneInput, phoneInputWrapper);
initFullName(fullNameInput, fullNameInputWrapper);
form.addEventListener('submit', (e) => {
 e.preventDefault();
 checkCard(bankCardInputWrapper, bankCardInput);
 checkBank(bankInputWrapper, bankInput);
 checkPhone(phoneInputWrapper, phoneInput);
 checkFullName(fullNameInputWrapper, fullNameInput);
 checkCode(codeInputWrapper, codeInput);
 maxAmount(amountInputWrapper, amountInput);
 finishWithdraw();
});
