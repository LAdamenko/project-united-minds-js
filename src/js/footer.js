import { apiPost } from './api.js';

const form = document.getElementById('contact-form');
const emailInput = document.getElementById('email');
const textarea = document.getElementById('comment');

const emailValidationMessage = document.getElementById(
  'emailValidationMessage'
);
const commentValidationMessage = document.getElementById(
  'CommentValidationMessage'
);
document.addEventListener('DOMContentLoaded', function () {
  const successModal = document.querySelector('[data-modal]');
  const closeModalButton = document.querySelector('[data-modal-close]');
  const originalBorderColor = emailInput.style.borderBottomColor;
  form.addEventListener('submit', function (event) {
    event.preventDefault();

    if (!validateComment()) {
      return; // if comment is not valid, stop form submission
    }

    const formData = new FormData(form);
    const email = formData.get('email');
    const comment = formData.get('comment');
    // POST request to server
    apiPost({ email, comment })
      .then(response => {
        // Display success modal and clear form
        successModal.classList.remove('is-hidden');
        form.reset();
        emailInput.style.borderBottomColor = originalBorderColor;
        emailValidationMessage.classList.add('hidden-container-for-footer');
        emailInput.style.borderBottomColor = originalBorderColor;

        commentValidationMessage.classList.add('hidden-container-for-footer');
        textarea.style.borderBottomColor = originalBorderColor;
        textarea.value = '';
        originalText = '';
      })
      .catch(error => {
        // Log error to console
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

const originalBorderColor = emailInput.style.borderBottomColor;

emailInput.addEventListener('input', validateEmail);

// textarea.addEventListener('input', truncateText);

function validateEmail() {
  const emailPattern = new RegExp(emailInput.pattern);
  if (emailInput.value === '') {
    emailValidationMessage.classList.add('hidden-container-for-footer');
    emailInput.style.borderBottomColor = originalBorderColor;
    return false;
  }

  if (!emailPattern.test(emailInput.value)) {
    emailValidationMessage.classList.remove('hidden-container-for-footer');
    emailValidationMessage.textContent = 'Invalid email, try again';
    emailValidationMessage.style.color = '#e74a3b';
    emailInput.style.borderBottomColor = '#e74a3b';
    // Почистимо попереднє повідомлення
    return false; // Prevent form submission
  }
  emailValidationMessage.classList.remove('hidden-container-for-footer');
  emailValidationMessage.textContent = 'Success!';
  emailValidationMessage.style.color = '#3cbc81';
  emailInput.style.borderBottomColor = '#3cbc81';

  return true; // Allow form submission
}

function validateComment() {
  if (textarea.value.trim() === '' || textarea.value === null) {
    commentValidationMessage.classList.remove('hidden-container-for-footer');
    commentValidationMessage.textContent = 'Please, type somesing';
    commentValidationMessage.style.color = '#DAA520';
    textarea.style.borderBottomColor = '#DAA520';
    return false;
  } else return true;
}

let originalText = ''; // Змінна для збереження оригінального тексту
let maxLength = 0; // Змінна для збереження максимальної довжини тексту

function updateMaxLength() {
  const inputFieldWidth = document.getElementById('comment').offsetWidth;
  maxLength = Math.floor(inputFieldWidth / 8); // Визначити максимальну довжину тексту (приблизно 8px на символ)
}

function truncateText() {
  const currentLength = textarea.value.length;

  if (currentLength > maxLength) {
    // Зберігаємо оригінальний текст перед обрізанням
    originalText = textarea.value;
    // Обрізаємо текст і додаємо місце для трьох крапок
    textarea.value = originalText.substring(0, maxLength) + '...';
  } else {
    // Якщо текст не потрібно обрізати, зберігаємо оригінальний текст
    originalText = textarea.value;
  }
}
// Оновлення максимальної довжини тексту при завантаженні сторінки та зміні розміру вікна
window.addEventListener('load', function () {
  updateMaxLength();
});

window.addEventListener('resize', updateMaxLength);

// Подія, яка викликається при виході з поля форми
textarea.addEventListener('blur', function () {
  truncateText(); // Викликаємо функцію обрізання тексту
});

// Подія, яка викликається при фокусуванні на полі вводу
textarea.addEventListener('focus', function () {
  // Повертаємо оригінальний текст
  textarea.value = originalText;
});
