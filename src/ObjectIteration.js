const nestedObject = {
  a: 1,
  b: 2,
  c: {
    d: 3,
    e: {
      f: 4,
    },
  },
};

const isObject = (val) =>
  Object.prototype.toString.call(val) === "[object Object]";

const flattenObject = function (obj) {
  const arr = {};
  const recurse = function (obj) {
    for (let val in obj) {
      if (isObject(obj[val])) {
        recurse(obj[val]);
      } else {
        arr[val] = obj[val];
      }
    }
  };
  recurse(obj);
  return arr;
};

// console.log(flattenObject(nestedObject));

const snakeToCamelCase = function (string) {
  const arr = string.split("_");
  for (let i = 1; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  return arr.join("");
};

const camelCaseObject = function (obj) {
  const recurse = function (obj) {
    const returnObj = Array.isArray(obj) ? [] : {};

    for (let val in obj) {
      if (isObject(obj[val])) {
        returnObj[snakeToCamelCase(val)] = recurse(obj[val]);
      } else {
        returnObj[snakeToCamelCase(val)] = obj[val];
      }
    }

    return returnObj;
  };

  return recurse(obj);
};

const snakeObject = {
  snake_case: "one",
  also_snake: "two",
  snake_object: {
    snaking_around: "Three",
    deeper_object: {
      still_snake: "four",
      deeper_still: {
        array_now: [1, 2, 3],
      },
    },
  },
};

console.log(snakeObject);
// console.log(camelCaseObject([snakeObject]));

const reverseKeyValue = (obj) => {
  let newObject = {};

  for (const val in obj) {
    newObject[obj[val]] = val;
  }
  return newObject;
};

const obj = { a: 1, b: 2, c: { d: 3 } };
const arr = Object.entries(obj).map(([key, value]) => [key, value]);
// console.log(arr); // [1, 2, 3]

console.log(Object.entries(obj));
