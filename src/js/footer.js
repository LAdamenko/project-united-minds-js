import { apiPost } from './api.js';

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contact-form');
  const emailInput = document.getElementById('email');
  const commentInput = document.getElementById('comment');
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
