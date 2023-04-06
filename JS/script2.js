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

// Events

// const block = document.querySelector('.events');

function logCheck() {
  let name = prompt('Type your login', 'name');

  if (name === null) return 'Canceled';
  if (name.toLowerCase() !== 'админ') return 'I dont know you';

  let password = prompt('Type your password', 'password');
  if (password === null) return 'Canceled';
  if (password === 'qwe') return 'Welcome!';

  return 'Wrong!';
}

alert(logCheck());
