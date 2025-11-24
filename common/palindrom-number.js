function isPalindromeNumber(num) {
  let numCopy = num;

  if (num == 0) {
    return 1;
  }
  let reversed = 0;
  while (num > 0) {
    let findReminder = num % 10;
    reversed = reversed * 10 + findReminder;
    // console.log(reversed, findReminder);

    num = Math.floor(num / 10);
  }
  // console.log(typeof reversed, reversed, typeof num, num);
  return reversed === numCopy;
}

const number = 121;
console.log(isPalindromeNumber(number));
