function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;

    for (let j = minIndex; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    [([arr[i], arr[minIndex]] = [arr[minIndex], arr[i]])];
  }

  return arr;
}

console.log("working");

function selectionSortAlso(arr) {
  for (let i = 0; i < arr.length; i++) {
    
  }

  return arr;
}



selectionSort([5, 7, 2, 1, 3, 9, 86]);
console.log(selectionSort([5, 7, 2, 1, 3, 68, 9, 86]));

console.log(selectionSort([5, 4, 3, 2, 1]));
