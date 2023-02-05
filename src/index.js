let increment = document.querySelector
(".increment");
let decrement = document.querySelector(".decrement");
let disableButtonIn = () => {
increment.disabled = true;
};
let disableButtonDe = () => {
decrement.disabled = true;
};

let counter = document.querySelector(".counter");
let increase = () => {
decrement.disabled = false;
counter.textContent = Number(counter.textContent) + 1;
if (Number(counter.textContent) === 20){
disableButtonIn ();
}
}
let decrease = () => {
increment.disabled = false;
counter.textContent = Number(counter.textContent) - 1;
if(Number(counter.textContent) === 0) {
disableButtonDe ();
}
}
increment.addEventListener ("click", increase);
decrement.addEventListener ("click", decrease);