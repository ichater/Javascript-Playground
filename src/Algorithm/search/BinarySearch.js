// Binary search only works on sorted arrays
// Follows divide and conquor pattern
// Write a function called binarySearch that accepts an array and a value
// Create 2 pointers for a left and right 0 and arr.length
// loop ends when left >= right
// -1 if value is never found

// attempt
// function binarySearch(arr, val) {
//   let left = 0;
//   let right = arr.length - 1;
//   let middle = Math.floor((right + left) / 2);

//   while (arr[middle] !== val && left <= right) {
//     let cur = arr[middle];
//     // console.log({ middle, cur, left, right });
//     if (val > cur) {
//       left = middle + 1;
//     } else {
//       right = middle - 1;
//     }

//     middle = Math.floor((right + left) / 2);
//   }

//   return arr[middle] === val ? middle : -1;
// }

// function binarySearch(arr, val) {
//   let start = 0;
//   let end = arr.length - 1;
//   let middle = Math.floor((start + end) / 2);
//   while (arr[middle] !== val && start <= end) {
//     val > arr[middle] ? (start = middle + 1) : (end = middle - 1);
//     middle = Math.floor((start + end) / 2);
//   }
//   return arr[middle] === val ? middle : -1;
// }

// console.log(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 30));
// console.log(binarySearch([1, 2, 3, 4, 5], 2)); // 1
// console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2
// console.log(binarySearch([1, 2, 3, 4, 5], 5)); // 4
// console.log(binarySearch([1, 2, 3, 4, 5], 6)); // -1
// console.log(
//   binarySearch(
//     [
//       5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
//       99,
//     ],
//     10
//   )
// ); // 2
// console.log(
//   binarySearch(
//     [
//       5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
//       99,
//     ],
//     95
//   )
// ); // 16
// console.log(
//   binarySearch(
//     [
//       5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
//       99,
//     ],
//     100
//   )
// ); // -1

// function binarySearchDayLater(arr, val) {
//   let start = 0;
//   let end = arr.length - 1;
//   if (val < arr[start] || val > arr[end]) return -1;
//   let middle = Math.floor((end + start) / 2);
//   while (start <= end) {
//     if (val < arr[middle]) {
//       end = middle - 1;
//     } else {
//       start = middle + 1;
//     }
//     middle = Math.floor((end + start) / 2);
//   }
//   return arr[middle] === val ? middle : -1;
// }

// let arr = [1, 2, 3, 4, 5, 7, 400];

// console.log(binarySearchDayLater(arr, 1.5));
