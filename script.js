const number = document.querySelector(".number");
const increment = document.querySelector(".increment");
const decrement = document.querySelector(".decrement");
const reset = document.querySelector(".reset");
const input = document.querySelector("#input");

let count = 0;

increment.addEventListener('click', () => {
    // const value = parseInt(input.value) || 0; // default to 0 if input is not a valid number
    count =count+1;
    number.textContent = count;
});

decrement.addEventListener('click', () => {
    count--;
    number.textContent = count;
});

reset.addEventListener('click', () => {
    count = 0;
    number.textContent = count;
});
