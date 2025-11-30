// way 1

// function sumOfDigit(n) {
//   let result = 0;

//   while (n > 0) {
//     let findLast = n % 10;
//     result += findLast;
//     n = Math.floor(n / 10);
//   }

//   return result;
// }
// const number = 1043; //1+0+4+3 = 8
// console.log(sumOfDigit(number));

// way 2

// function sumOfDigit(n) {
//   return n
//     .toString()
//     .split("")
//     .reduce((result, current) => result + Number(current), 0);
// }
// const number = 1043; //1+0+4+3 = 8
// console.log(sumOfDigit(number));
