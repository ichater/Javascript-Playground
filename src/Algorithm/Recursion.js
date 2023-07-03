// function countDown(num) {
//   if (num <= 0) {
//     console.log("All done!");
//     return;
//   }
//   console.log(num);
//   num--;
//   countDown(num);
// }
// countDown(3);

// // Iterative Version
// function countDown(num) {
//   for (var i = num; i > 0; i--) {
//     console.log(i);
//   }
//   console.log("All done!");
// }

function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

// console.log(sumRange(4));

function factorial(num) {
  let total = 1;
  for (let i = num; i > 1; i--) {
    total *= i;
  }
  return total;
}

// console.log(factorial(10));

// function factorialRecurse(num) {
//   if (num === 1) return 1;
//   return num * factorialRecurse(num - 1);
// }

function power(base, exponent) {
  if (exponent === 0) return 1;
  if (exponent === 1) {
    return base;
  }
  return base * power(base, exponent - 1);
}

// console.log(Math.pow(2, 0));
// console.log(power(2, 0));

function productOfArray(arr) {
  const newArr = arr.slice(1);
  if (arr.length === 1) {
    return arr[0];
  }
  return arr[0] * productOfArray(newArr);
}

// console.log(productOfArray([1, 2, 3])); // 6
// console.log(productOfArray([1, 2, 3, 10])); // 60

function fib(num) {
  if (num <= 2) return 1;

  function fibArrFill(last = 1, cur = 1, arr) {
    if (arr.length === num) return arr;
    last = arr[arr.length - 2];
    cur = last + cur;
    arr = [...arr, cur];
    return fibArrFill(last, cur, arr);
  }

  const returnArr = fibArrFill(1, 1, [1, 1]);
  return returnArr[num - 1];
}

// console.log(fib(35)); // 3
// console.log(fib(10)); // 55

// function reverse(str) {
//   let revStr = "";

//   function reverseString(str) {
//     if (str === "") return;
//     revStr += str.slice(-1);
//     return reverseString(str.slice(0, -1));
//   }

//   reverseString(str);

//   return revStr;
// }

// console.log(reverse("Izaak")); // 3

// function isPalindrome(str) {
//   return str === reverse(str);
// }

// console.log(isPalindrome("awesome"));
// console.log(isPalindrome("foobar"));
// console.log(isPalindrome("tacocat"));
// console.log(isPalindrome("amanaplanacanalpanama"));
// console.log(isPalindrome("amanaplanacanalpandemonium"));

function someRecursive(arr, callback) {
  if (!arr.length) return false;
  if (!!callback(arr[arr.length - 1])) return true;
  arr.pop();
  return someRecursive(arr, callback);
}

const isOdd = (val) => val % 2 !== 0;

// console.log(someRecursive([1, 2, 3, 4], isOdd));
// console.log(someRecursive([4, 6, 8, 9], isOdd));
// console.log(someRecursive([4, 6, 8], isOdd));
// console.log(someRecursive([4, 6, 8], (val) => val > 10));

// function flatten(arr) {
//   let flattenedArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (!Array.isArray(arr[i])) {
//       flattenedArr = [...flattenedArr, arr[i]];
//     } else {
//       flattenedArr = flattenedArr.concat(flatten(arr[i]));
//     }
//   }

//   return flattenedArr;
// }

// console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
// console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
// console.log(flatten([[1], [2], [3]])); // [1,2,3]
// console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3

function capitalizeFirst(arr) {
  let newArr = [];
  const recurseCap = (arr, i = 0) => {
    if (i === arr.length) return;
    newArr = [...newArr, arr[i].charAt(0).toUpperCase() + arr[i].slice(1)];
    recurseCap(arr, i + 1);
  };
  recurseCap(arr);
  return newArr;
}

// console.log(capitalizeFirst(["car", "taco", "banana"])); // ['Car','Taco','Banana']

const isObject = (maybeObj) =>
  Object.prototype.toString.call(maybeObj) === "[object Object]";

// function nestedEvenSum(obj) {
//   let evenCount = 0;

//   for (value of Object.values(obj)) {
//     if (typeof value === "number" && value % 2 === 0) {
//       evenCount += value;
//     }
//     if (isObject(value)) {
//       evenCount += nestedEvenSum(value);
//     }
//   }
//   return evenCount;
// }

// var obj1 = {
//   outer: 2,
//   obj: {
//     inner: 2,
//     otherObj: {
//       superInner: 2,
//       notANumber: true,
//       alsoNotANumber: "yup",
//     },
//   },
// };

// var obj2 = {
//   a: 2,
//   b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
//   c: { c: { c: 2 }, cc: "ball", ccc: 5 },
//   d: 1,
//   e: { e: { e: 2 }, ee: "car" },
// };

// console.log(nestedEvenSum(obj1)); // 6
// console.log(nestedEvenSum(obj2)); // 10
function stringifyNumbers(obj) {
  let newObj = {};
  for (let [k, v] of Object.entries(obj)) {
    if (typeof v === "number") {
      newObj[k] = v.toString();
    } else if (isObject(v)) {
      newObj[k] = stringifyNumbers(v);
    } else {
      newObj[k] = v;
    }
  }
  return newObj;
}

// let obj = {
//   num: 1,
//   test: [],
//   data: {
//     val: 4,
//     info: {
//       isRight: true,
//       random: 66,
//     },
//   },
// };

// console.log(stringifyNumbers(obj));

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/
function collectStrings(obj) {
  let arr = [];
  for (let value of Object.values(obj)) {
    if (typeof value === "string") {
      arr.push(value);
    } else if (isObject(value)) {
      arr = arr.concat(collectStrings(value));
    }
  }

  return arr;
}

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])
