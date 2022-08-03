// console.log("1" == 1); //true
// console.log("1" != 1); //false
// console.log("1" !== 1); //true
// console.log("1" === 1); //false
// console.log(null == undefined); //true
// console.log(null === undefined); //false

// // null and undefined both represend an empty value, undefined is something
// // javascript does for you but Null is something you declare yourself

// console.log(typeof null); //object
// console.log(typeof undefined); //undefined

let a = [1, 2, 3, 4];
let b = a;
let c = [1, 2, 3, 4];
// true (same reference)
console.log(a === b);
// false (same array different reference)
console.log(a === c);

b = [3, 4, 5];
// false (now completely different arrays with a new stored reference)
console.log(a === b);
