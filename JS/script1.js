//СТРОГИЙ РЕЖИМ
'use strict';

// console.log('Jack');

// let arr = [1, 2, 5, 8, 10, 3];

// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//   sum = sum + arr[i];
// }

// console.log(sum / arr.length);
// let res = 0;
// function getGrade(s1, s2, s3) {
//   let arr = [s1, s2, s3];

//   let sum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }

//   let aver = sum / arr.length;

//   if (90 <= aver) {
//     return 'A';
//   } else if (80 <= aver) {
//     return 'B';
//   } else if (70 <= aver) {
//     return 'C';
//   } else if (60 <= aver) {
//     return 'D';
//   } else if (0 <= aver) {
//     return 'F';
//   }
// }

// getGrade(1, 2, 3);

// function feast(beast, dish) {
//   let i = beast.length;

//   let s = dish.length;

//   return beast[0] === dish[0] && beast[i - 1] === dish[s - 1];
// }

// feast('laam', 'lassam');

// function greet(name, owner) {
//   if (name == owner) {
//     console.log('Hello boss');
//   } else {
//     console.log('Hello guest');
//   }
// }

// greet('Danie', 'Daniel');

// function reverseWords(str) {
//   return str.split('').reverse().join();
// }

// function isSquare(n) {
//   n = Math.sqrt(n);
//   if (Number.isInteger(n)) {
//     console.log(true);
//   } else if (n < 0) {
//     console.log(false);
//   } else {
//     console.log(false);
//   }
// }

// isSquare(763361641);
// let word = 'Привет!';

// console.log(word.startsWith(`При`));

// let text = 'фрилансер';

// console.log(text.includes('лан'));

// var checkTree = function (root) {
//   if (root[0] === root[1] + root[2]) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// };

// checkTree([10, 4, 6]);
// function disemvowel(str) {
//   let i = 0;
//   for (i = 0; i < str.length; i++) {
//     if (str[i] === 'a') {
//       str = str.replace('a', '');
//     } else if (str[i] === 'u') {
//       str = str.replace('u', '');
//     } else if (str[i] === 'e') {
//       str = str.replace('e', '');
//     } else if (str[i] === 'i') {
//       str = str.replace('i', '');
//     } else if (str[i] === 'o') {
//       str = str.replace('o', '');
//     } else if (str[i] === 'A') {
//       str = str.replace('A', '');
//     } else if (str[i] === 'E') {
//       str = str.replace('E', '');
//     } else if (str[i] === 'I') {
//       str = str.replace('I', '');
//     } else if (str[i] === 'O') {
//       str = str.replace('O', '');
//     } else if (str[i] === 'U') {
//       str = str.replace('U', '');
//     }
//   }
//   return str;
// }

// console.log(disemvowel('uuuuuuUUEe'));

// function noSpace(x) {
//   let i = 0;
//   for (i = 0; i < x.length; i++) {
//     if (x[i] === 'q') {
//       x[i] = ' ';
//     }
//   }
//   console.log(x);
// }

// noSpace('qwe qeewq  qwewqe');

// function noSpace(x) {
//   let i = 0;
//   let resu = '';
//   for (i = 0; i < x.length; i++) {
//     if (x[i] !== ' ') {
//       resu = resu + x[i];
//     }
//   }
//   console.log(resu);
// }

// noSpace('qq qq qq');

// function areYouPlayingBanjo(name) {
//   console.log(name[0].toLowerCase() === 'r' ? 1 : 2);
// }

// areYouPlayingBanjo('roman');

let qwe = 'Jack';
console.log(qwe);

qwe[1] = 'S';

console.log(qwe);
