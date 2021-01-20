const arr1 = [1, 2, 1, 3, 4];
const arr2 = [1, 2, 2, 3];

const sortByNumbers = (a, b) => a - b;

const checkArrays = (arr1, arr2) =>
  arr1.length !== arr2.length
    ? false
    : arr1.sort(sortByNumbers).toString() ===
      arr2.sort(sortByNumbers).toString();

console.log(arr1, arr2);

console.log(checkArrays(arr1, arr2));

console.log(arr1, arr2);
