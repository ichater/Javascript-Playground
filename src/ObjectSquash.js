/**
 * @param {Object} obj
 * @return {Object}
 */

const isObject = (val) =>
  Object.prototype.toString.call(val) === "[object Object]";

const isArray = (val) => Array.isArray(val);

const keyParser = (mainKey, key) =>
  !!mainKey && !!key ? `${mainKey}.${key}` : !key ? `${mainKey}` : `${key}`;

function squashObject(obj) {
  let newObj = {};

  function squashRecursiveObj(obj, mainKey = "") {
    for (let [key, value] of Object.entries(obj)) {
      if (isObject(value)) {
        squashRecursiveObj(value, keyParser(mainKey, key));
      } else if (isArray(value)) {
        squashRecursiveArr(value, keyParser(mainKey, key));
      } else {
        newObj[keyParser(mainKey, key)] = value;
      }
    }
  }

  function squashRecursiveArr(arr, mainKey = "") {
    for (const i in arr) {
      if (isObject(arr[i])) {
        squashRecursiveObj(arr[i], keyParser(mainKey, i));
      } else if (isArray(arr[i])) {
        squashRecursiveArr(arr[i], keyParser(mainKey, i));
      } else {
        newObj[keyParser(mainKey, i)] = arr[i];
      }
    }
  }

  squashRecursiveObj(obj);
  console.log(newObj);
  return newObj;
}

// const object = {
//   a: 5,
//   b: 6,
//   c: {
//     f: 9,
//     g: {
//       m: 17,
//       n: 3,
//     },
//   },
// };

// squashObject(object); // { a: 5, b: 6, 'c.f': 9, 'c.g.m': 17, 'c.g.n': 3 }
const object = { a: { b: [1, 2, 3], c: ["foo"] } };
squashObject({
  foo: {
    "": {
      "": 1,
      bar: 2,
    },
    a: 1,
  },
});
//.toEqual({
//     foo: 1,
//     'foo.bar': 2,
//     'foo.a': 1,
//   });
