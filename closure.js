const prompt = require("prompt-sync")({ sigint: true });

const scope = () => {
  let command = prompt("where to?");
  let arr = [];
  const scope2 = () => {
    arr.push(command);
  };
  scope2();

  scope();
  if (command === "show") {
    console.log(arr);
  }
};
console.log([1, 2, 3, 4]);

scope();

const userInput = () => {
  let command = prompt("Where to?");
  const arr = [1, 2, 3, 4, 5, 6];
  scope2(arr, command);
};

const scope2 = (arr, command) => {
  console.log(arr);
  arrAdjust(arr, command);
  userInput();
};

const arrAdjust = (arr, command) => {
  arr.push(command);
};

userInput();
