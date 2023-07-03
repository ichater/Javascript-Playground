// function sameSolutiopnBad(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     // indexOf loops through array again making this 0(n^2)
//     let correctIndex = arr2.indexOf(arr1[i] ** 2);
//     if (correctIndex === -1) {
//       return false;
//     }
//     arr2.splice(correctIndex, 1);
//   }
//   return true;
// }

// same([1, 2, 3, 2], [9, 1, 4, 4]);

// function same(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   let frequencyCounter1 = {};
//   let frequencyCounter2 = {};
//   // 3 loops is still 0(n)
//   for (let val of arr1) {
//     frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
//   }
//   for (let val of arr2) {
//     frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
//   }
//   console.log("1", frequencyCounter1);
//   console.log("2", frequencyCounter2);
//   // Checking object keys is 0(1)
//   for (let key in frequencyCounter1) {
//     // 0(1) to check keys in an object
//     if (!(key ** 2 in frequencyCounter2)) {
//       return false;
//     }
//     // confirm that the values are the same (2 2s or 2 4s etc)
//     if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
//       return false;
//     }
//   }
//   return true;
// }

// // console.log(same([1, 2, 3, 2, 5], [9, 1, 4, 4, 11]));

// console.log(same([1, 2, 2, 3], [9, 4, 4, 1]));
// my solution
// function validAnagram(strOne, strTwo) {
//   if (strOne.length !== strTwo.length) return false;

//   let strObjOne = {};
//   let strObjTwo = {};

//   for (let i = 0; i < strOne.length; i++) {
//     const letter = strOne[i];
//     strObjOne[letter] ? (strObjOne[letter] += 1) : (strObjOne[letter] = 1);
//   }
//   for (let i = 0; i < strTwo.length; i++) {
//     const letter = strTwo[i];
//     strObjTwo[letter] ? (strObjTwo[letter] += 1) : (strObjTwo[letter] = 1);
//   }
//   console.log(strObjOne);
//   console.log(strObjTwo);
//   for (let key of Object.keys(strObjOne)) {
//     if (!(key in strObjTwo)) {
//       return false;
//     }
//     if (strObjOne[key] !== strObjTwo[key]) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(validAnagram("raacc", "caarr"));

// // colts solution

// function validAnagramColt(strOne, strTwo) {
//   if (strOne.length !== strTwo.length) return false;

//   let lookUp = {};

//   for (let i = 0; i < strOne.length; i++) {
//     const letter = strOne[i];
//     lookUp[letter] ? (lookUp[letter] += 1) : (lookUp[letter] = 1);
//   }

//   for (let i = 0; i < strTwo.length; i++) {
//     const letter = strTwo[i];
//     if (!lookUp[letter]) {
//       return false;
//     } else {
//       lookUp[letter] -= 1;
//     }
//   }

//   return true;
// }

// console.log(validAnagramColt("raacc", "caarr"));

function areThereDuplicates(arr) {
  let lookup = {};
  for (let i = 0; i < arr.length; i++) {
    let key = arr[i];
    lookup[key] = lookup[key] === 1 ? (lookup[key] += 1) : 1;
    if (lookup[key] > 1) {
      return true;
    }
  }
  console.log(lookup);
  return false;
}

console.log(areThereDuplicates([1, 2, 3]));
