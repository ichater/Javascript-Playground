// function rajat() {
//   console.log("global  " + this === global);
// }
// rajat();

// function Hero(heroName, realName) {
//   this.realName = realName;
//   this.heroName = heroName;
// }
// const superman = Hero("Superman", "Clark Kent");
// //unfdefined
// console.log(superman);
// const superman2 = new Hero("Superman", "Clark Kent");
// console.log(superman2);

// function Hero2(heroName, realName) {
//   return {
//     heroName: "Batman",
//     realName: "Bruce Wayne",
//   };
// }

// const hero3 = {
//   heroName: "Batman",
//   dialogue() {
//     console.log(`I am ${this.heroName}!`);
//   },
// };
// hero3.dialogue();

// const saying = hero3.dialogue();
// console.log(saying);

// function dialogue() {
//   console.log(`I am ${this.heroName}`);
// }
// const hero4 = {
//   heroName: "Batman",
// };

// dialogue.call(hero4);
// // or
// dialogue.apply(hero4);

speak = function (sound) {
  console.log(this.name, "is", sound);
};

const dog = {
  name: "dog",
};

const parrot = {
  name: "parrot",
};

let dusty = speak.bind(dog, "meow");
speak.call(dog, "bark");

dusty();

function talking(words) {
  console.log("words are ", words);
}

talking.call(null, "wind");

// function greet(message) {
//   console.log(message, this.name);
// }

// const person = {
//   name: "John",
// };

// const name = "global Chad";

// greet.call(person, "Hello"); // Output: Hello John
// greet.call(null, "Hi"); // Output: Hi undefined

// greet("Welcome");
