// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

const submitButton = document.querySelector('button[type="submit"]');
const delayInput = document.querySelector('input[name="delay"]');
const fulfilledRadio = document.querySelector('input[value="fulfilled"]');
const rejectedRadio = document.querySelector('input[value="rejected"]');

submitButton.addEventListener('click', () => {
  const delay = delayInput.value;
  promise = new Promise((fulfilled, rejected) => {
    setTimeout(() => {
      if (fulfilledRadio.checked === true) {
        fulfilled(delay);
      } else if (rejectedRadio.checked === true) {
        rejected(delay);
      }
    }, delay);
  });

  promise
    .then(delay => {
      iziToast.success({
        title: `✅ Fulfilled promise in ${delay}ms`,
        position: 'topRight',
      });
    })
    .catch(delay => {
      iziToast.error({
        title: `❌ Rejected promise in ${delay}ms`,
        position: 'topRight',
      });
    });
});
