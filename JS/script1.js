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

function feast(beast, dish) {
  let i = beast.length;

  let s = dish.length;

  return beast[0] === dish[0] && beast[i - 1] === dish[s - 1];
}

feast('laam', 'lassam');