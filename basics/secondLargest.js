// corner cases

/**
 *
 * What if array is empty?
 * What if array has only one element ?
 * What if array has duplicates?
 * */
function secondLargestNumber(arr) {
  let firstL = -Infinity;
  let secondL = -Infinity;

  for (let num of arr) {
    if (num > firstL) {
      secondL = firstL;
      firstL = num;
    } else if (num > secondL && num < firstL) {
      // condition may vary based on num<firstL and num!== firstL
      secondL = num;
    }
  }

  return secondL;
}

const arr = [1, 2, 54, 23, 93, 93, 23];
console.log(secondLargestNumber(arr));
