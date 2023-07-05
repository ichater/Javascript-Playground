const swap = (arr, i, j) => ([arr[j], arr[i]] = [arr[i], arr[j]]);

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    // min value is i because we dont know any better yet
    let min = i;
    // j starts at i because i will be the lowest value after
    // j finishes its loop
    for (let j = i; j < arr.length; j++) {
      // check if the current element is less than the current minimum
      if (arr[j] < arr[min]) min = j;
    }
    // swap i and min if it has changed
    i !== min && swap(arr, min, i);
  }
  return arr;
}

const arr = [44, 19, 5, 38, 1, 41, 8, 1, 3, 2, 66, 1132, 123, 0, 0, 0.5];

console.log(selectionSort(arr));
