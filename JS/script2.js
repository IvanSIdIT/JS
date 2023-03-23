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
  document.getElementById('field').clientWidth - document.getElementById('field').offsetWidth
);

const field = document.getElementById('field');
const ball = document.getElementById('ball');

function ballMove(event) {
  if (event.clientX > 30) {
    ball.style.marginLeft = `${event.clientX - border / 2}px`;
    console.log(event.clientX - border / 2);
  } else {
    ball.style.marginLeft = `${ball.offsetWidth / 2}px`;
  }

  if (event.clientY > 30) {
    ball.style.marginTop = `${event.clientY - border / 2}px`;
  } else {
    ball.style.marginTop = `${ball.offsetWidth / 2}px`;
  }
}

field.addEventListener('click', ballMove);

// let binatySearch = (list, item) => {
//   for (let i = 1; i < 1000000; i++) {
//     list.push(i);
//   }
//   let low = 0;
//   let high = list.length - 1;
//   while (low <= high) {
//     let mid = Math.floor((low + high) / 2);
//     let guess = list[mid];
//     if (item === guess) return `Index is ${mid}`;
//     if (guess > item) high = mid - 1;
//     if (guess < item) low = mid + 1;
//   }
//   return -1;
// };

// console.log(binatySearch([], 684654));
