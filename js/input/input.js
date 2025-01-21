const observeDynamicElements = () => {
 const inputWrappers = document.querySelectorAll('.form-layout__input-wrapper');

 const focusInput = (input, wrapper) => {
  const placeholder = wrapper.querySelector('.form-layout__input-placeholder');
  if (placeholder) {
   placeholder.classList.add('focus');
   if (input.value === '') {
    placeholder.classList.remove('focus');
   }
  }
 };

 const showPassword = (wrapper) => {
  const showIcon = wrapper.querySelector('.form-layout__show-password');
  const passInput = wrapper.querySelector('.form-layout__input');
  if (showIcon && passInput) {
   showIcon.addEventListener('click', () => {
    showIcon.classList.toggle('active');
    showIcon.classList.contains('active')
     ? (passInput.type = 'text')
     : (passInput.type = 'password');
   });
  }
 };

 inputWrappers.forEach((wrapper) => {
  const input = wrapper.querySelector('.form-layout__input');

  if (input) {
   input.addEventListener('input', () => focusInput(input, wrapper));
  }

  const showIcon = wrapper.querySelector('.form-layout__show-password');
  if (showIcon && !showIcon.dataset.listenerAdded) {
   showPassword(wrapper);
   showIcon.dataset.listenerAdded = 'true';
  }
 });
};

const observer = new MutationObserver(() => {
 observeDynamicElements();
});

observer.observe(document.body, {
 childList: true,
 subtree: true,
});

observeDynamicElements();
