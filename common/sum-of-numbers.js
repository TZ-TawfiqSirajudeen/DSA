function sumOfNumbers(n) {
  // way 1
  //   let result = 0;
  //   for (let i = 1; i <= n; i++) {
  //     result += i;
  //   }

  //   way 2

  //   let i = 1;
  //   while (n >= i) {
  //     console.log(i);
  //     result += i;
  //     i++;
  //   }

  //   way 3 use mathematical formula n*(n+1)/2 (more efficient)

  return (n * (n + 1)) / 2;
}
const number = 6;
console.log(sumOfNumbers(number));
