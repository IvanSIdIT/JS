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

// let qwe = 'Jack';
// console.log(qwe);

// qwe[1] = 'S';

// console.log(qwe);

// function qwe(nums) {
//   let all = 0;
//   let i = 0;
//   for (i = 0; i < nums.length; i++) {
//     all = all + nums[i];
//   }

//   console.log(all / nums.length);
// }

// qwe([1, 2, 3, 4]);

// function bmi(weight, height) {
//   let bmi = weight / (height * height);
//   if (bmi <= 18.5) {
//     console.log('Underweight');
//   } else if (bmi <= 25.0) {
//     console.log('Normal');
//   } else if (bmi <= 30.0) {
//     console.log('Overweight');
//   } else {
//     console.log('Obese');
//   }
// }

// bmi(80, 1.8);

// function validatePIN(pin) {
//   if (typeof pin !== 'number') {
//     return false;
//   } else {
//     pin = pin.toString().length;
//   }

//   if (pin === 4) {
//     return true;
//   } else if (pin === 6) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(validatePIN(1234));

// let pis = 123;
// console.log(Number.isInteger(pis));
// console.log(Math.sqrt(pis));

// function addToArrayForm(num, k) {
//   num = Number(num.join(''));
//   num = num + k;
//   console.log(Array.from(String(num)));
//   if (num < 12630717197566440000) {
//   }
// }

// addToArrayForm([1, 2, 6, 3, 0, 7, 1, 7, 1, 9, 7, 5, 6, 6, 4, 4, 0, 0, 6, 3], 516);

// function sumCubes(n) {
//   let res = 0;

//   for (let i = 0; i < n; i++) {
//     res += Math.pow(i, 3);
//   }
//   console.log(res);
// }

// sumCubes(2);

// function countPositivesSumNegatives(input) {
//   if (input === null) return [];
//   let count = 0;
//   let sum = 0;
//   for (let n of input) {
//     if (n > 0) count += 1;
//     if (n < 0) sum += n;
//   }

//   return [count, sum];
// }

let test = [];

console.log(typeof test[0]);
