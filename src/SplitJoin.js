// const str = "The quick brown fox jumps over the lazy dog.";

// const words = str.split(" ");
// console.log(words[3]);
// // expected output: "fox"

// const chars = str.split("");
// console.log(chars[8]);
// // expected output: "k"

// const strCopy = str.split();
// console.log(strCopy);
// // expected output: Array ["The quick brown fox jumps over the lazy dog."]

// const strExp = str.split("f");
// console.log(strExp);

// const elements = ["Fire", "Air", "Water"];

// console.log(elements.join());
// // expected output: "Fire,Air,Water"

// console.log(elements.join(""));
// // expected output: "FireAirWater"

// console.log(elements.join("-"));
// // expected output: "Fire-Air-Water"

const robot = "place 1,2,north";
const robot2 = "place 3 , 2 , north";

const words1 = robot2.split(" ");
const [word, ...restOfWords] = words1;
console.log(words1);
console.log(words1.join(""));
console.log(restOfWords.join(" ").split(","));
console.log(restOfWords.join(" ").split(",")[2]);
