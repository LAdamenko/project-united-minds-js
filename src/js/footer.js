import { apiPost } from './api.js';

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contact-form');
  const successModal = document.querySelector('[data-modal]');
  const closeModalButton = document.querySelector('[data-modal-close]');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(form);
    const email = formData.get('email');
    const comment = formData.get('comment');
    // POST request to server
    apiPost({ email, comment })
      .then(response => {
        // Display success modal and clear form
        successModal.classList.remove('is-hidden');
        form.reset();
      })
      .catch(error => {
        // Log error to console
        console.error(error);
      });
  });

  //close MODAL Window
  closeModalButton.addEventListener('click', function () {
    closeSuccessModal();
  });

  successModal.addEventListener('click', function (event) {
    if (event.target === successModal) {
      closeSuccessModal();
    }
  });

  document.addEventListener('keydown', function (event) {
    if (
      event.key === 'Escape' &&
      !successModal.classList.contains('is-hidden')
    ) {
      closeSuccessModal();
    }
  });

  function closeSuccessModal() {
    successModal.classList.add('is-hidden');
  }
});

const emailInput = document.getElementById('email');
const textarea = document.getElementById('comment');
const emailValidationMessage = document.getElementById(
  'emailValidationMessage'
);

const originalBorderColor = emailInput.style.borderBottomColor;

emailInput.addEventListener('input', validateEmail);
textarea.addEventListener('input', truncateText);

function validateEmail() {
  const emailPattern = new RegExp(emailInput.pattern);
  if (emailInput.value === '') {
    emailInput.style.borderBottomColor = originalBorderColor;
    emailValidationMessage.textContent = '';
    return false;
  }

  if (!emailPattern.test(emailInput.value)) {
    emailValidationMessage.textContent = 'Invalid email, try again';
    emailValidationMessage.style.color = '#e74a3b';
    emailInput.style.borderBottomColor = '#e74a3b';
    // Почистимо попереднє повідомлення
    return false; // Prevent form submission
  }

  emailValidationMessage.textContent = 'Success!';
  emailValidationMessage.style.color = '#3cbc81';
  emailInput.style.borderBottomColor = '#3cbc81';

  return true; // Allow form submission
}

function truncateText() {
  const maxLength = 100; // Максимальна довжина тексту
  const currentLength = textarea.value.length;

  if (currentLength > maxLength) {
    textarea.value = textarea.value.substring(0, maxLength) + '...';
  }
}
