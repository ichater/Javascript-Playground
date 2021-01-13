const dArray = [...Array(5)].map(() => [...Array(5)].map((_, i) => 0));

// console.log(dArray);

const rocks = [{ x: 5, y: 3 }];

const pushRockIntoArray = (array, rocks) => {
  rocks.map((rock) => array[rock.y - 1].splice(rock.x - 1, 1, 1));
  return array;
};

console.log(pushRockIntoArray(dArray, rocks));

let arr1 = [1, 2, 3, 4];

arr1.map((x) => [x * 2]);
// [[2], [4], [6], [8]]

arr1.flatMap((x) => [x * 2]);
// [2, 4, 6, 8]

// only one level is flattened
arr1.flatMap((x) => [[x * 2]]);
// [[2], [4], [6], [8]]

const flatDeep = (arr, d = 1) =>
  d > 0
    ? arr.reduce(
        (acc, val) =>
          acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val),
        []
      )
    : arr.slice();

console.log(flatDeep([[[2], [4], [6], [8]]], 2));
