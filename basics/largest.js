// find largest

function findLargest(arr) {
  let largest = -Infinity;

  for (let num of arr) {
    if (num > largest) {
      largest = num;
    }
  }

  return largest;
}

const arr = [1, 2, 99, -43, 23];
console.log(findLargest(arr));
