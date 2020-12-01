const brunoDiaz = {
  type: "doggo",
  age: 3,
  saying: "BORKUF!",
};

console.log(brunoDiaz);

const changeDoggoSaying = (dog) => ({
  type: dog.type,
  age: dog.age,
  saying: "BORKUF ALSO!",
});

console.log(changeDoggoSaying(brunoDiaz));
console.log(brunoDiaz);
