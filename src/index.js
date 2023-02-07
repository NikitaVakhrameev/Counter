const increment = document.querySelector(".increment");
const decrement = document.querySelector(".decrement");
const counter = document.querySelector(".counter");
let value = 0;

let disableIncrement = () => {
    increment.disabled = true;
    increment.classList.remove('button');
    increment.classList.add('button__disabled');
};

let disableDecrement = () => {
    decrement.disabled = true;
    decrement.classList.remove('button');
    decrement.classList.add('button__disabled');
};

let increase = () => {
    decrement.disabled = false;
    decrement.classList.add('button');
    decrement.classList.remove('button__disabled');
    value += 1;
    counter.textContent = value;
    if (value === 20) {
        disableIncrement ();
    }
}

let decrease = () => {
    increment.disabled = false;
    increment.classList.add('button');
    increment.classList.remove('button__disabled');
    if(value === 0) {
        disableDecrement ();
    } else {
        value -= 1;
        counter.textContent = value;
    }
    if (value === 0) {
        disableDecrement ();
    } 
}

increment.addEventListener ("click", increase);
decrement.addEventListener ("click", decrease);