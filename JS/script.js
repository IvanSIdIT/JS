//СТРОГИЙ РЕЖИМ
'use strict';

// let Messi = 'GOAT';
// console.log(Messi);

// Messi = 'BEST';
// console.log(Messi);

function check() {
  var min = document.getElementById('example').value;
  if (min <= 0) {
    min = 'Type real year';
  } else if (min == 2023) {
    min = 0;
  } else if (min > 2022) {
    min = 'Type real year';
  } else if (min <= 2022) {
    min = `${2022 - min} or ${2023 - min}`;
  }
  document.getElementById('min').innerHTML = min;
  console.log(min);
}

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

// ДЗ №2

// let users;
// console.log(users ?? '<tp');

// let qwe = 0;
// let newqwe = ++qwe;
// console.log(newqwe);

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

// function DD(numch) {
//   console.log(`Number: ` + numch);
// }

// DD(num);

// let num = 1;

// for (let i = 0; i < 3; i++) {
//   console.log(i);
// }

// function betterThanAverage(classPoints, yourPoints) {
//   // Your code here
//   if (classPoints.summ / classPoints.length > yourPoints) {
//     console.log('true');
//   } else {
//     console.log('false');
//   }
// }

// betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9);

function abbrevName(name) {
  let asr = name[0];
  let s;
  let i;
  // while ((i = true)) {
  //   i = Boolean(name[s]);
  //   s++;
  //   console.log(i);
  // }
  // for (let i; (i = true); s++) {
  //   i = name[s];
  // }

  console.log(s);
}

abbrevName('Sam Harris');
