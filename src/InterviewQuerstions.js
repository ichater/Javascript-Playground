const arr = [2, 2, 1, 3, 3, 4, 5, 7, 7];

const arr2 = [2, 2, 1, -3, 3, 4, 5, 7, 17];

// //Find the second minimum element of an array

console.log(arr.sort((a, b) => a - b)[1]);

// First non-repeating integers in an array

console.log(arr.sort((a, b) => a - b).filter((e, i, arr) => arr.includes(e)));

// Merge two sorted arrays

console.log([...arr, ...arr2].sort((a, b) => a - b));

// Rearrange positive and negative values in an array

console.log([...arr, ...arr2].sort((a, b) => a - b).reverse());
