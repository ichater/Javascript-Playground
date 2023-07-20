function isObject(val) {
  return Object.prototype.toString.call(val) === "[object Object]";
}

function isArray(val) {
  return Array.isArray(val);
}

function deepEqual(one, two) {
  if (typeof one !== "object" && typeof two !== "object") {
    if (isNaN(one) && isNaN(two)) {
      return one.toString() === two.toString();
    }
    if (typeof one === "number" && typeof two === "number") {
      return 1 / one === 1 / two;
    }

    return one === two;
  }

  if (isArray(one) && isArray(two)) {
    if (one.length !== two.length) return false;
    for (let i = 0; i < one.length; i++) {
      if (!deepEqual(one[i], two[i])) {
        return false;
      }
    }
    return true;
  }
  if (isObject(one) && isObject(two)) {
    const arrOne = Object.entries(one);
    const arrTwo = Object.entries(two);
    return deepEqual(arrOne, arrTwo);
  }
}

// console.log(deepEqual(0, 0)); // true
// console.log(deepEqual(-0, +0)); // false
// console.log(deepEqual("foo", "foo")); // true
// console.log(deepEqual(true, 1)); // false
// console.log(deepEqual(true, true)); // true
// console.log(deepEqual(false, false)); // true
// console.log(deepEqual(undefined, null)); // false
console.log(deepEqual(null, null)); // true
console.log(deepEqual(undefined, undefined)); // true
console.log(deepEqual(NaN, NaN)); // true

// console.log("TRUE");
// console.log(deepEqual({ x: 1, y: 2 }, { x: 1, y: 2 }));
// console.log(deepEqual([1, 2, [3, 4, [5, 6]]], [1, 2, [3, 4, [5, 6]]]));
// console.log(
//   deepEqual(
//     { x: 1, y: 2, z: [1, 2, { a: [1, 2, 123] }] },
//     { x: 1, y: 2, z: [1, 2, { a: [1, 2, 123] }] }
//   )
// );

// console.log("\nFALSE\n");
// // console.log(deepEqual(true, 1));
// console.log(deepEqual(undefined, null));
// console.log(deepEqual([1, 2, 3], [1, 2, 3, 4]));
// console.log(deepEqual([1, 2, 3], [1, 2, 4]));
// console.log(deepEqual({ x: 1, y: 2 }, { x: 1, y: 3 }));
