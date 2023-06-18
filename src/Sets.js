// const set1 = new Set([1, 2, 3, 4, 5, 5]);

// console.log(set1.has(1));
// // Expected output: true

// console.log(set1.has(5));
// // Expected output: true

// console.log(set1.has(6));

// console.log(set1);

// console.log(Array.from(set1));

function dropRightWhile(array, predicate) {
  let returnedArr = [...array];
  let lastElement = array.length - 1;

  while (predicate(array[lastElement])) {
    returnedArr.pop();
    lastElement -= 1;
    // console.log(returnedArr);
  }

  return returnedArr;
}

console.log(dropRightWhile([1, 2, 3], (value) => value < 6));
console.log(dropRightWhile([1, 2, 3, 4, 5], (value) => value > 3));
console.log(dropRightWhile([1, 2, 3, 4, 5], (value) => value > 6));
