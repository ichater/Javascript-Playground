// const arr = [1, 2, 3, 4, 5, 65, 7, 8, 9];

// const newArr = arr.slice(1, 4);

// console.log(newArr);
// console.log(arr);

// const rows = 4;
// const columns = 5;

// const rowsArr = [...Array(rows).keys()];
// const colsArr = [...Array(columns).keys()];
// console.log(rowsArr.map((r, rowIndex) => colsArr));

// console.log(Array.from({ length: rows }, () => 0));

// const arr = [2, 3, 42, 145, 23, 4, 1, 5, 2, 34];

// const biggestNumber = (arr) =>
//   arr.reduce((acc, cur) => (acc > cur ? acc : cur));

// const nthBiggestNumber = (arr, nth = 1) => {
//   if (!arr.length || nth >= arr.length) return;
//   if (nth === 1) return biggestNumber(arr);
//   const newArr = [...arr];
//   const biggestIndex = arr.indexOf(biggestNumber(arr));
//   newArr.splice(biggestIndex, 1);
//   return nthBiggestNumber(newArr, nth - 1);
// };

// console.log(nthBiggestNumber(arr, 4));

// function chunk(array, size = 1) {
//   const newArr = [];
//   let tempArr = [];

//   if (!array.length) return array;
//   if (size > array.length) return [[...array]];

//   for (let i = 0; i <= array.length; i++) {
//     if (tempArr.length < size && i !== array.length) {
//       tempArr.push(array[i]);
//     }
//     if (tempArr.length === size) {
//       newArr.push(tempArr);
//       tempArr = [];
//     }
//     if (i === array.length && tempArr.length) {
//       newArr.push(tempArr);
//     }
//   }

//   return newArr;
// }

// console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 3));
// console.log(chunk(["A", "B", "C"]));

// const arr = ["hello", "world"];

// console.log(arr.join(", "));

// const arr = [1, 2, 3, 4, 5, 65, 7, 8, 9];

// console.log(arr.at(1));
// arr.at(1)=3
// console.log(arr.at(1));

// const arrObjects = [
//   { id: 1, comment: "i am a comment" },
//   { id: 2, comment: "i am a comment" },
//   { id: 3, comment: "i am a comment" },
// ];

// arrObjects[arrObjects.findIndex((e) => e.id === 2)].comment =
//   "I am an exceptional comment";

// console.log(arrObjects);

const arr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

function investmentDataParser(arr, num) {
  let returnArr = [];
  const pages = arr.length / num;

  if (num > arr.length) return [arr];

  for (let i = 0; i < pages; i++) {
    returnArr[i] = [];
    for (let j = 0; j <= num; j++) {
      returnArr[i][j] = arr[i * pages + j];
    }
  }

  return returnArr;
}

console.log(investmentDataParser(arr, 40));
