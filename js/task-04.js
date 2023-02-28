let counterValue = 0;

const increment = document.querySelector('button[data-action="increment"]');
const decrement = document.querySelector('button[data-action="decrement"]');
const valueSpan = document.querySelector('#value');

increment.addEventListener('click', () => {
    counterValue += 1;
    valueSpan.textContent = counterValue;
});

decrement.addEventListener('click', () => {
    counterValue -= 1;
    valueSpan.textContent = counterValue;
});