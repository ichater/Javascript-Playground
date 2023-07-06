function insertionSort(arr) {
  let sortedArr = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < sortedArr.length; j++) {
      if (arr[i] < sortedArr[j]) {
        sortedArr.splice(j, 0, arr[i]);
        // break statements because the array gets longer when we splice
        // or push into it
        break;
      }
      if (j === sortedArr.length - 1) {
        sortedArr = [...sortedArr, arr[i]];
        break;
      }
    }
  }
  return sortedArr;
}

const arr = [3, 4, 1, 15, 6, 7, 1, 8, 9, 100, 0.4, 5, 6];

// console.log(insertionSort(arr));

function insertionSortColt(arr) {
  let counter = 0;
  // current val is stored because the array elements will be swapped later
  var currentVal;
  for (var i = 1; i < arr.length; i++) {
    currentVal = arr[i];
    // j loops back through the array that preceeds i
    // while j is greater than the current value
    // j has to be instantiated with var so it can be used outside
    // the loop
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      // if j greater than the last j we swap them
      counter++;
      arr[j + 1] = arr[j];
      console.log(counter);
    }
    // if j was not greater than the current value then this is
    // currentVal=currentVal
    arr[j + 1] = currentVal;
  }
  return arr;
}

// currentVal=arr[1] (1)
// [2, 1, 9, 4]
// arr[j](0) = 2 greater than 1 so arr[j + 1] = arr[j];
// [2, 2, 9, 4]
// arr[j + 1] = currentVal;
// [1, 2, 9, 4]
// currentVal=arr[2] (9)
// [1, 2, 9, 4]
// arr[j](1) = 2 not greater than 9
// arr[j+1] = currentVal which is still 9 so no change
// currentVal=arr[3] (4)
// arr[j](2) = 9 greater than 4 so arr[j + 1] = arr[j];
// [1, 2, 9, 9]
// arr[j](1) = 2 less than 4 so j loop done
// arr[j + 1] = currentVal;
// [1,2,4,9]

// console.log(insertionSortColt([15, 14, 13, 12, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));

// attempt at insertionSort without var

function insertionSortEs6(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > currentVal) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

console.log(insertionSortEs6([15, 14, 13, 12, 11]));
