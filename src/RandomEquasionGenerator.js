function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getRandomOperator() {
  const possibilities = Math.floor(Math.random() * 3);
  switch (possibilities) {
    case 0:
      return "+";
    case 1:
      return "-";
    case 2:
      return "/";
    case 3:
      return "*";
  }
}

const arr = [1, 2, 3, 4, 5, 6, 7];

console.log(
  arr.map((_, i) => (i % 2 === 0 ? getRandomInt(9) : getRandomOperator()))
);
