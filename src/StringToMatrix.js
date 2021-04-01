const stringToMatrix = (str) =>
  str
    .split(`\n`)
    .map((i) => i.split(" "))
    .map((i) => i.map((i) => parseInt(i)));

console.log(stringToMatrix(`1 2\n3 4`));
