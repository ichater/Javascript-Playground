"use strict";
//entire JS file uses strict mode if its on top

let test = () => {
  //undeclared variables inside functions are hoisted to the global scope
  //without strict mode
  //this function will error at every turn in strict mode
  x = 3.14;
  let obj = {
    y: 90,
  };
  Object.defineProperty(obj, "y", { writable: false });
  obj.y = 100;
  console.log(obj.y);
};

test();

let test1 = () => {
  "use strict";
  //function scope uses strict
  x = 3.14;
};
