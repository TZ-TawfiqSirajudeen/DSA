// without space complex

// function removeDuplicates(arr) {
//   let result = [];

//   for (let num of arr) {
//     result.includes(num) ? null : result.push(num);
//   }
//   return result;
// }

// const array = [1, 2, 12, 2, 1, 5, 5, 6];
// console.log(removeDuplicates(array));

// with space complex

// function removeDuplicates(arr) {
//   let obj = {};

//   for (let num of arr) {
//     obj[num] ? (obj[num] = false) : (obj[num] = true);
//   }
//   return Object.keys(obj).map((n) => Number(n));
// }

// const array = [1, 2, 12, 2, 1, 5, 5, 6];
// console.log(removeDuplicates(array));

// function removeDuplicates(arr) {
//   return [...new Set(arr)];
// }

const array = [1, 2, 12, 2, 1, 5, 5, 6];
console.log(array.indexOf(2));

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[x]) {
      x = x + 1;
      nums[x] = nums[i];
    }
  }
  return x + 1;
};
