let button = document.querySelector('.button');
let elem = document.querySelector('.train__list');

let script = () => {
  elem.classList.toggle('active');
};

button.addEventListener('click', script);
