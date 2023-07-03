function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

// console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5]));

function sumZeroMultiplePointers(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    }
    sum > 0 ? right-- : left++;
  }
}

// console.log(sumZeroMultiplePointers([-4, -3, -2, -1, 0, 1, 2, 5]));

// My attempt
function countUniqueValues(arr) {
  if (!arr.length) return 0;

  let uniqueValues = 1;
  let initial = 0;
  let comparison = 1;

  while (comparison < arr.length) {
    if (arr[initial] !== arr[comparison]) {
      uniqueValues += 1;
      initial = comparison;
      comparison += 1;
    } else {
      comparison += 1;
    }
  }

  return uniqueValues;
}

// console.log(countUniqueValues([1, 2, 3, 3, 3, 4, 5, 6, 7, 8, 9]));

// Using set as a way of finding unique values. Not a versatile solution
// like multiple pointers but a good one for this use case
function setSolution(arr) {
  return new Set(arr).size;
}

// console.log(setSolution([1, 2, 4, 4, 4, 4, 5, 5]));

function coltsSolution(arr) {
  let i = 0;
  if (!arr.length) return i;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

// console.log(coltsSolution([]));

// function areThereDuplicates(argument) {
//   const set = new Set(arguments);
//   return set.size !== arguments.length;
// }

function averagePair(arr, avg) {
  // return false if there are no elements or if the smallest element is higher than the average
  if (!arr.length) return false;
  if (arr[0] > avg) return false;

  const average = (one, two) => (one + two) / 2;

  let left = 0;
  let right = arr.length - 1;

  while (arr[right] > avg * 2) {
    right -= 1;
    arr.pop();
  }

  if (average(arr[right - 1], arr[right]) < avg) {
    return false;
  }

  while (left < arr.length) {
    if (average(arr[left], arr[right]) === avg) {
      return true;
    } else if (average(arr[left], arr[right]) < avg) {
      left += 1;
      right = arr.length;
    } else {
      right -= 1;
    }
  }
  return false;
}

console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 30, 40, 50, 60], 8)); // true
console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false

// Write a function called isSubsequence which takes in two strings and
// checks whether the characters in the first string form a subsequence
// of the characters in the second string. In other words, the function
// should check whether the characters in the first string appear somewhere
//  in the second string, without their order changing.

function isSubsequence(str1, str2) {
  if (str1.length > str2.length) return false;
  if (!str1) return true;

  let i = 0;
  let j = 0;

  while (i < str1.length) {
    let first = str1[i];
    let second = str2[j];
    if (first === second) {
      i++;
    } else if (j === str2.length - 1) {
      return false;
    } else {
      j++;
    }
  }

  return true;
}

// console.log(isSubsequence("hello", "hell")); // false
// console.log(isSubsequence("sing", "igstintrg")); // true
// console.log(isSubsequence("abc", "abracadabra")); // true
// console.log(isSubsequence("abc", "acb")); // false (order matters)
// console.log(isSubsequence("abc", "abcb"));
