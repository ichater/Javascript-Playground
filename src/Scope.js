// function once(func) {
//   let ranOnce = false;
//   let value;

//   return function (...args) {
//     if (!ranOnce) {
//       console.log(ranOnce);
//       value = func.apply(this, args);
//       ranOnce = true;
//     }
//     return value;
//   };
// }

// let i = 1;

// function incrementBy(value) {
//   i += value;
//   return i;
// }

// const incrementByOnce = once(incrementBy);
// console.log(incrementByOnce(2)); // i is now 3) The function returns 3.
// console.log(incrementByOnce(3)); // i is still 3; The function returns the result of the first invocation, which is 3.
// i = 4;
// console.log(incrementByOnce(2));

function createCounter(obj) {
  let count = 1; // The variable to be persisted

  function increment() {
    count++;
    console.log(count);
  }

  obj[count] = "Hello";

  return increment;
}

const counter = createCounter();
counter({}); // Output: 1
counter({}); // Output: 2
counter({}); // Output: 3
