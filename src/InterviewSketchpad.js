const arr1 = ["apple", "banana", "orange"];
const arr2 = ["Apple", "Banana", "Orange"];

// console.log(arr1.map((e) => e.length));
// console.log(arr2.map((e) => e.length));

const arr3 = [1.2, 2.3, 3.4];
const arr4 = [2.1, 1.2, 4.5];
const arr5 = [1.2, 4.5, 2.3, 3.4];

// console.log(arr3.map((e) => Math.floor(e)));
// console.log(arr4.map((e) => Math.floor(e)));
// console.log(arr5.map((e) => Math.floor(e)));

const uniqueArr = Array.from(
  new Set([(1, 2, 3, 3, 3, 4, 4, 4, 5, 6, 7, 7, 7, 8)].map((e) => e * 5))
);

function intersectionBy(iteratee, ...arrays) {
  const arrayArgs = [...arrays];
  // create a value of unique arrays
  const uniqueArr = Array.from(new Set(arrayArgs[0]));
  const uiqueArrIterate = uniqueArr.map(iteratee);

  //   console.log(uiqueArrIterate);

  for (let i = 1; i < arrayArgs.length; i++) {
    const arrIterate = arrayArgs[i].map(iteratee);
    // console.log(arrIteratee);
    for (let j = 0; j < arrIterate.length; j++) {
      if (!uiqueArrIterate.includes(arrIterate[j])) {
        const delIndex = uiqueArrIterate.findIndex((e) => e === arrIterate[j]);
        console.log(delIndex);
        uiqueArrIterate.splice(delIndex, j);
        uniqueArr.splice(delIndex, j);
        // console.log(uniqueArr);
      }
    }
  }
  return uniqueArr;
}

console.log(intersectionBy(Math.floor, [1.2, 2.4], [2.5, 3.6]));
