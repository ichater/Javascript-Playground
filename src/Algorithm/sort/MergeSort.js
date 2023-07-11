// function merge(arr1, arr2) {
//   let returnArr = [];
//   let i = 0;
//   let j = 0;
//   while (i < arr1.length && j < arr2.length) {
//     if (arr1[i] < arr2[j]) {
//       returnArr.push(arr1[i]);
//       i++;
//     } else {
//       returnArr.push(arr2[j]);
//       j++;
//     }
//     if (i === arr1.length) {
//       returnArr = [...returnArr, ...arr2.slice(j)];
//       j = arr2.length;
//     }
//     if (j === arr2.length) {
//       returnArr = [...returnArr, ...arr1.slice(i)];
//       i = arr1.length;
//     }
//   }
//   return returnArr;
// }

// // console.log(merge([500], [1, 1, 1, 1.4, 2, 14, 99, 100, 200]));

// function mergeSort(arr) {
//   if (arr.length <= 1) return arr;
//   const mid = Math.floor(arr.length / 2);
//   let left = mergeSort(arr.slice(0, mid));
//   let right = mergeSort(arr.slice(mid));
//   return merge(left, right);
// }

// console.log(mergeSort([9, 5, 6, 8, 1, 3, 2, 9, 100, 0.2, 99, 800, 12, 55]));

function merge(arrI, arrJ) {
  let results = [];
  let i = 0;
  let j = 0;

  while (i < arrI.length && j < arrJ.length) {
    if (arrI[i] < arrJ[j]) {
      results.push(arrI[i]);
      i++;
    } else {
      results.push(arrJ[j]);
      j++;
    }
  }
  while (i < arrI.length) {
    results.push(arrI[i]);
    i++;
  }
  while (j < arrJ.length) {
    results.push(arrJ[j]);
    j++;
  }
  return results;
}

// console.log(merge([500], [1, 1, 1, 1.4, 2, 14, 99, 100, 200]));

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const half = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, half));
  const right = mergeSort(arr.slice(half));
  return merge(left, right);
}

console.log(mergeSort([9, 5, 6, 8, 1, 3, 2, 9, 100, 0.2, 99, 800, 12, 55]));
