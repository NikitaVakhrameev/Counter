const increment = document.querySelector(".increment");
const decrement = document.querySelector(".decrement");
const counter = document.querySelector(".counter");

let value = 0;

const classToggling = (el) =>{
  if(el.disabled){
      el.classList.remove('button');
      el.classList.add('button__disabled');
  } else {
      el.classList.add('button');
      el.classList.remove('button__disabled');
  }
};

decrement.disabled = true;
classToggling(decrement);

const increase = () => {
    decrement.disabled = false;
    classToggling(decrement);
    value += 1;
    counter.textContent = value;
    if (value === 20) {
       increment.disabled = true; 
       classToggling(increment);
    }
};

const decrease = () => {
    increment.disabled = false;
    classToggling(increment);
    if(value === 0) {
        decrement.disabled = true;
        classToggling (decrement);
    } else {
        value -= 1;
        counter.textContent = value;
    }
    if (value === 0) {
        decrement.disabled = true;
        classToggling (decrement);
    } 
};

increment.addEventListener ("click", increase);
decrement.addEventListener ("click", decrease);
