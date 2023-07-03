function divideAndConquer(arr, val) {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let cur = arr[middle];
    if (cur < val) {
      min = middle + 1;
    } else if (cur > val) {
      max = middle - 1;
    } else return middle;
  }

  return -1;
}

console.log(divideAndConquer([1, 2, 4, 5, 6, 7], 5));
