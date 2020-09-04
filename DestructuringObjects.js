let person = {
  firstName: "John",
  age: 28,
  lastName: "Doe",
};
let person2 = {
  firstName: "Jane",
  age: 24,
  lastName: "Doey",
  address: {
    city: "somewhere else",
    state: "Another one",
  },
};

const {
  firstName: name,
  age,
  favouriteFood = "ricecream",
  address: { city, state },
} = person2;

console.log(name);
console.log(age);
console.log(favouriteFood);
console.log(city);
console.log(state);

//overwrite shared attibutesd of "person2" with "person"
const person3 = { ...person2, ...person };

console.log(person3);
