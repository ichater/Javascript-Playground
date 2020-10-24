const alphabet = ["A", "B", "C", "D", "E", "F"];
const numbers = ["1", "2", "3", "4", "5", "6"];

//what you want to destructure on right
//position of elements on left if what will be pulled out leading a to equal "A" and b to equal "B"
// two comma's to skip over b
// "...rest" in this case represents the rest of the array
const [a, , c, ...rest] = alphabet;

//same as alphabet.concat(numbers)
const newArray = [...alphabet, ...numbers];

console.log(a);
// console.log(b);
console.log(c);
console.log(rest);

console.log(newArray);

function sumAndMultiply(a, b) {
  return [a + b, a * b, a / b];
}

const [sum, multiply, division = "no division"] = sumAndMultiply(2, 3);

console.log(sum);
console.log(multiply);
console.log(division);
