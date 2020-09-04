const prompt = require("prompt-sync")({ sigint: true });

// const scope = () => {
//   let command = prompt("where to?");
//   let arr = [];
//   const scope2 = () => {
//     arr.push(command);
//   };
//   scope2();

//   scope();
//   if (command === "show") {
//     console.log(arr);
//   }
// };
// console.log([1, 2, 3, 4]);

// scope();

const scope2 = (arr, command) => {
  console.log(arr);
  arrAdjust(arr, command);
  userInput();
};

const arrAdjust = (arr, command) => {
  arr.push(command);
};

const scopeFunction = (a) => {
  const b = a;
  const c = () => {
    console.log(this);
    return "hello";
  };
  c();
};

scopeFunction();
