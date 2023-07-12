const swap = (arr, i, j) => ([arr[j], arr[i]] = [arr[i], arr[j]]);

function pivot(arr, start = 0, end = arr.length) {
  // The element that will be compared against other elements
  // from the start to end of the array
  let pivot = arr[start];
  // mutable pivot index that will be returned
  let curPivotIndex = start;

  for (let i = start + 1; i < end; i++) {
    if (pivot > arr[i]) {
      // increase the current pivot index
      curPivotIndex++;
      // swap the element at that current index with the current
      // element in the loop
      swap(arr, i, curPivotIndex);
    }
  }
  // swap the start with the ending pivot index
  swap(arr, start, curPivotIndex);
  console.log(arr);
  return curPivotIndex;
}

const arrExample = [100, 309, 10, 2, -1, 3, 4, 8, 2, 1, 5, 7, 6, 3];

function quickSort(arr, left = 0, right = arr.length) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    // left
    quickSort(arr, left, pivotIndex - 1);
    // right
    quickSort(arr, pivotIndex + 1, right);
    console.log(arr);
  }
  return arr;
}

quickSort(arrExample);
