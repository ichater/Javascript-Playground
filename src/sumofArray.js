const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumNumbers = (numbers) => {
  return numbers.reduce((acc, cur) => acc + cur);
};

const sumNumbersLoop = (numbers) => {
  let num = 0;
  for (let i = 0; i <= numbers.length - 1; i++) {
    num += numbers[i];
  }
  return num;
};

console.log(sumNumbersLoop([1, 3, 10]));
