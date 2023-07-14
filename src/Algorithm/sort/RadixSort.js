// stack overflow
// function getDidgit(num, i) {
//   return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
// }

// My solution
function getDidgit(num, place) {
  const numString = num.toString();
  return place > numString.length - 1
    ? 0
    : parseInt(numString[numString.length - 1 - place]);
}

// console.log(getDidgit(12345, 0));

// stack overflow (works with negative numbers)
function didgitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// My solution
// const didgitCount = (num) => num.toString().length;

// console.log(didgitCount(111));

function mostDigits(arr) {
  if (!arr.length) return 0;
  let maxNumbers = 1;
  for (let i = 0; i < arr.length; i++) {
    if (didgitCount(arr[i]) > maxNumbers) {
      maxNumbers = didgitCount(arr[i]);
    }
  }
  return maxNumbers;
}

const arrayFromNumber = (num) => Array.from(Array(num), (_, index) => []);

function radixSort(arr) {
  const maxDidgits = mostDigits(arr);
  for (let k = 0; k < maxDidgits; k++) {
    const buckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < arr.length; i++) {
      buckets[getDidgit(arr[i], k)].push(arr[i]);
    }
    console.log(buckets);
    // arr = [].concat(...buckets);
    arr = buckets.flat();
  }
  return arr;
}

const radixArr = [
  123456, 3221, 1, 10, 9680, 577, 9420, 7, 5622, 4793, 2030, 3138, 81, 2599,
  743, 4127,
];

console.log(radixSort(radixArr));
