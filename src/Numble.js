const getRandomInt = (max) => Math.floor(Math.random() * max);

// Generates a random operator.
function getRandomOperator() {
  switch (getRandomInt(3)) {
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

// Takes array of 7 elements and returns equasion array
const randomEquasionArray = (arr) =>
  arr.map((_, i) => (i % 2 === 0 ? getRandomInt(9) : getRandomOperator()));

// Takes in the array and checks if answer is an int returning boolean
const answerIsInt = (equasion) => {
  const answer = eval(equasion.join(""));
  return answer % 1 === 0;
};

// Takes in array and returns true if dividing by zero
const isDividingByZero = (equasion) =>
  equasion
    .map((item, index) =>
      item === "0" && equasion[index - 1] === "/" ? "Bad" : "Good"
    )
    .includes("Bad");

const validEquasion = (equasionArr) => {
  if (!answerIsInt(equasionArr)) {
    return validEquasion(randomEquasionArray(arr));
  }

  return isDividingByZero(equasionArr)
    ? validEquasion(randomEquasionArray(arr))
    : { equasionArr: equasionArr, answer: eval(equasionArr.join("")) };
};

console.log(validEquasion(randomEquasionArray(arr)));
