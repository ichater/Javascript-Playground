const capitalize = (str) => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;

console.log(capitalize("hello, you are a cool person!"));

const toNumber = (str) => (isNaN(Number(str)) ? null : Number(str));

console.log(toNumber("111"));
console.log(toNumber("NaN"));

const merge = (a, b) => [...new Set([...a, ...b])];
const mergeWithDuplication = (a, b) => [...a, ...b];

console.log(merge([1, 2, 3, 4], [3, 4, 5, 6]));
console.log(mergeWithDuplication([1, 2, 3, 4], [3, 4, 5, 6]));

const randomColor = () =>
  `#${Math.random().toString(16).slice(2, 8).padStart(6, "0")}`;

console.log(randomColor());
