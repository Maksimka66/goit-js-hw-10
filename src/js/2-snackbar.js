// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

const submitForm = document.querySelector('.form');
const delayInput = document.querySelector('input[name="delay"]');
const fulfilledRadio = document.querySelector('input[value="fulfilled"]');
const rejectedRadio = document.querySelector('input[value="rejected"]');

submitForm.addEventListener('submit', event => {
  event.preventDefault();
  const delay = delayInput.value;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (fulfilledRadio.checked === true) {
        resolve(delay);
      } else if (rejectedRadio.checked === true) {
        reject(delay);
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
  event.target.reset();
});
