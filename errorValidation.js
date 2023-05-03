const form = document.querySelector('form');
const usernameInput = document.querySelector('#username');
const postBodyInput = document.querySelector('#postBody');
const tagsInput = document.querySelector('#tags');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const requiredInputs = [usernameInput, postBodyInput, tagsInput];

  requiredInputs.forEach(input => {
    if (input.value.trim() === "") {
      const errorMessageContainer = document.querySelector('#error-message-container');
      errorMessageContainer.innerHTML = 'Please fill out all required fields.';
      input.classList.add('is-invalid');
    } else {
      input.classList.remove('is-invalid');
    }
  });

  if (!document.querySelectorAll('.is-invalid').length) {
    form.submit();
  }
});

  