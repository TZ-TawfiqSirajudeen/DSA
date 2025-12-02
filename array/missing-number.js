// const missingNumber = (arr) => {
//   let n = arr.length;
//   let max = (n * (n + 1)) / 2;
//   let totalArr = arr.reduce((acc, curr) => acc + curr, 0);
//   console.log(totalArr, max);
//   return max - totalArr;
// };

// const array = [0, 1, 3]; //2
// console.log(missingNumber(array));

function missingNumber(arr) {
  let set = new Set(arr);

  for (let i = 0; i < arr.length; i++) {
    if (!set.has(i)) return i;
  }
}

const array = [1, 2];
console.log(missingNumber(array));
