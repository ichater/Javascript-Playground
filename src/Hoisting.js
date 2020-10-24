// Variable declarations come first before any code is run THEN variable assignments works differently with const let and var
function hoist() {
  a = 20;
  var b = 100;
}

hoist();

console.log(a);

console.log(hoist1); // Output: undefined

var hoist1 = "The variable has been hoisted.";

function hoist2() {
  message = "Hoisting is all the rage!";
  console.log(message);
  var message;
}

hoist2();

let hoist3;
console.log(hoist3); // Output: undefined

hoist3 = "Hoisted";

class Hobbit {
  constructor(height, weight) {
    this.height = height;
    this.weight = weight;
  }
}

var Frodo = new Hobbit();
Frodo.height = 100;
Frodo.weight = 300;
console.log(Frodo); // Output: ReferenceError: Hobbit is not defined
