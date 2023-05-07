console.log("heap number");

const object = { x: 1.1 };
// → no “boxing” for `x` in object

console.log(object.x);

let y = object.x;

console.log(y);
object.x += 1;
// → update the value of `x` inside object

console.log(object.x);
console.log(y);
