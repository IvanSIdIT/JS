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

const field = document.getElementById('field');
const ball = document.getElementById('ball');

function ballMove(event) {
  console.log(event.clientX, event.clientY);
  ball.style.left = event.clientX;
  ball.style.top = event.clientY;
}

field.addEventListener('click', ballMove);
