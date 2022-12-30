//СТРОГИЙ РЕЖИМ
'use strict';

// let Messi = 'GOAT';
// console.log(Messi);

// Messi = 'BEST';
// console.log(Messi);

/*
ДЗ №1

 let userName = 'Вася';

 let user = userName;

 console.log(user);

конец ДЗ №1
*/

// test = Boolean(test);

// console.log(test);

// let test = '1';

// console.log(typeof test);

// var min = document.getElementById('example').value;
// document.getElementById('min').innerHTML = min;
function check() {
  var min = document.getElementById('example').value;
  if (min < 25) {
    min = 'you are younger then 25';
  } else if (min < 55) {
    min = 'you are younger then 55';
  } else if (min < 90) {
    min = 'you are younger then 90';
  } else {
    min = 'type your real age or dont use any letters';
  }
  document.getElementById('min').innerHTML = min;
}

// ДЗ №2

// let users = '132';
// console.log(users ?? 'Без имени');

// let qwe = 0;
// let newqwe = ++qwe;
// console.log(newqwe);

let qwe = 0;
let newqwe = ++qwe;
console.log(newqwe);

// console.log(558 > 22++);

// конец ДЗ №2

// ДЗ №3

// let message = 'hello';
// let FalseMessage = 'bye';

// if (5 == 5) {
//   console.log(message);
// } else {
//   console.log(FalseMessage);
// }

// let checks = 5 == 5 ? 'yes' : 'no';
// console.log(checks);

// let age = min

// if (min < 25) {
//   console.log('You are too young');
// } else if (min < 55) {
//   console.log('You are not too young');
// } else if (min < 90) {
//   console.log('You are  too old');
// } else {
//   console.log('Type your real age');
// }

// конец ДЗ №3
