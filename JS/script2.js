// let button = document.querySelector('.button');
// let elem = document.querySelector('.train__list');
// let delegate = document.querySelectorAll('.delegate');

// let script = element => {
//   if (element.target.closest('.button')) {
//     elem.classList.toggle('active');
//   }

//   if (!element.target.closest('.button') && !element.target.closest('.train__list')) {
//     elem.classList.remove('active');
//   }
// };

// document.addEventListener('click', script);

//Деллегирование

// elem.addEventListener('click', deleg);

// function deleg(el) {
//   if (el.target.closest('.delegate')) {
//     console.log('Clicked!');
//   }
// }

let border = Math.abs(
  //Размер  границы поля
  document.getElementById('field').clientWidth - document.getElementById('field').offsetWidth
);

const field = document.getElementById('field'); //Переменная с полем
const ball = document.getElementById('ball'); //Переменная с мячем

function ballMove(event) {
  if (event.clientX > 30) {
    ball.style.marginLeft = `${event.clientX - border / 2}px`; //Задаем левый марджин
    console.log(event.clientX - border / 2);
  } else {
    ball.style.marginLeft = `${ball.offsetWidth / 2}px`;
  }

  if (event.clientY > 30) {
    ball.style.marginTop = `${event.clientY - border / 2}px`; //Задаем марджин топ
  } else {
    ball.style.marginTop = `${ball.offsetWidth / 2}px`;
  }
}

field.addEventListener('click', ballMove); //Вешаем слушатель

// Events

const block = document.querySelector('.events');
