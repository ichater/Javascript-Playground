// Given an array X of positive integers, its elements are to be transformed by running the following operation on them as many times as required:

// if X[i] > X[j] then X[i] = X[i] - X[j]

// When no more transformations are possible, return its sum ("smallest possible sum").

// For instance, the successive transformation of the elements of input X = [6, 9, 21] is detailed below:

const numbers = [6, 9, 12];

// const largestNumber = Math.max(...numbers);

// const filteredNumbers = numbers.filter((num) => num === largestNumber);

// function solution(numbers) {
//   if (numbers.every((num) => num === numbers[0]))
//     return numbers.reduce((acc, cur) => acc + cur);

//   const largestNumber = Math.max(...numbers);
//   const filteredNumbers = numbers.filter((num) => num !== largestNumber);
//   numbers[numbers.indexOf(largestNumber)] =
//     largestNumber - Math.max(...filteredNumbers);
//   return solution(numbers);
// }

// console.log(solution(numbers));

// function maxSum(numbers) {
//   let max = -Infinity,
//     secondMax = -Infinity;
//   let sum = 0;

//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > max) {
//       secondMax = max;
//       max = numbers[i];
//     } else if (numbers[i] > secondMax) {
//       secondMax = numbers[i];
//     }
//     sum += numbers[i];
//   }

//   while (max > secondMax) {
//     max -= secondMax;
//     sum -= secondMax;
//     secondMax = Math.max(...numbers.filter((num) => num < max));
//   }

//   return sum;
// }

// console.log(maxSum(numbers));

function multiply(a, b) {
  return `${parseInt(a) * parseInt(b)}`;
}

console.log(multiply("3", "5"));
