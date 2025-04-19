let count = 0;

const incButton = document.querySelector('.js-inc-button');
const decButton = document.querySelector('.js-dec-button');
const countDisplay = document.querySelector('.js-count');

countDisplay.innerHTML = `Count: ${count}`;

incButton.addEventListener('click', function () {
  count++;
  countDisplay.innerHTML = `Count: ${count}`;
});

decButton.addEventListener('click', function () {
  if (count > 0) {
    count--;
    countDisplay.innerHTML = `Count: ${count}`;
  }
});
