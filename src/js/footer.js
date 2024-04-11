// Отримуємо елементи DOM
const backdrop = document.querySelector('.backdrop');
const modalBtn = document.querySelector('[data-modal-close]');
const openBtnModal = document.getElementById('submit-btn');
const bodyEl = document.querySelector('body');

// Функція для відкриття модального вікна
function openModal() {
  backdrop.classList.remove('is-hidden');
  bodyEl.classList.add('modal-open');
}

// Функція для закриття модального вікна
function closeModal() {
  backdrop.classList.add('is-hidden');
  bodyEl.classList.remove('modal-open');
}

// Додаємо події click на кнопки відкриття та закриття модального вікна
modalBtn.addEventListener('click', closeModal);
openBtnModal.addEventListener('click', openModal);
