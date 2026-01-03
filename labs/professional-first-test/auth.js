const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const button = document.getElementById('login-button');
const error = document.getElementById('error');

function validateForm() {
  button.disabled = !(emailInput.value && passwordInput.value);
}

emailInput.addEventListener('input', validateForm);
passwordInput.addEventListener('input', validateForm);

document.getElementById('login-form').addEventListener('submit', (e) => {
  e.preventDefault();
  error.classList.add('hidden');
  button.disabled = true;

  // Simulated async auth
  setTimeout(() => {
    if (
      emailInput.value === 'test@example.com' &&
      passwordInput.value === 'Password123!'
    ) {
      window.location.href = 'dashboard.html';
    } else {
      error.classList.remove('hidden');
      button.disabled = false;
    }
  }, 800);
  });