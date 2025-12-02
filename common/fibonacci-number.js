// my way

// function fibbonacci(n) {
//   let a = 0,
//     b = 1,
//     i = 0;

//   while (n > i) {
//     [a, b] = [b, a + b];
//     i++;
//   }

//   return a;
// }
// const number = 100;

// console.log(fibbonacci(number));
function fibbonacci(n) {
  let first = 0;
  let second = 1;

  for (let i = 2; i <= n; i++) {
    let temp = first + second;
    first = second;
    second = temp;
  }

  return second;
}
const number = 5;

console.log(fibbonacci(number));
