// function swap(arr, i, j) {
//   let temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
// }

// ES6 2015
const swap = (arr, i, j) => ([arr[j], arr[i]] = [arr[i], arr[j]]);

let arr = [10, 2, 3, 40, 1, 5, 6, 9, 100, 50, 60, 4000, 1, 2, 3, 8, 1, 4, 5];

// My attempt (worked)
// function bubbleSort(arr) {
//   for (let i = arr.length - 1; i > -1; i--) {
//     for (let j = arr.length; j > i - 2; j--) {
//       arr[j] < arr[i] && swap(arr, i, j);
//     }
//   }
//   return arr;
// }

// console.log(bubbleSort(arr));

// UNOPTIMIZED VERSION OF BUBBLE SORT
// function bubbleSort(arr) {
//   for (var i = arr.length; i > 0; i--) {
//     for (var j = 0; j < i - 1; j++) {
//       console.log(arr, arr[j], arr[j + 1]);
//       if (arr[j] > arr[j + 1]) {
//         var temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr;
// }

// // ES2015 Version
function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

// console.log(bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]));

// Optimized BubbleSort with noSwaps
// function bubbleSort(arr) {
//   var noSwaps;
//   for (var i = arr.length; i > 0; i--) {
//     noSwaps = true;
//     for (var j = 0; j < i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         var temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//         noSwaps = false;
//       }
//     }
//     if (noSwaps) break;
//   }
//   return arr;
// }

function bubbleSort(arr) {
  let noSwaps;
  // Its i-- because in each iteration we know for sure that the largest element
  // made it to the top
  for (let i = arr.length - 1; i > 0; i--) {
    // At the start of the loop there have been no elements swapped
    noSwaps = true;
    // Loop comparing 1 element to the next and swapping as nessessary
    // until we reach the point just before the largest element (arr[i])
    for (let j = 0; j <= i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        // As soon as a single element is swapped we let the upper scope know
        noSwaps = false;
      }
    }
    // If no element was swapped then we break out of the loop because
    // the array is sorted
    if (noSwaps) {
      break;
    }
  }
  return arr;
}

bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]);

console.log(bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]));
console.log(bubbleSort(arr));
