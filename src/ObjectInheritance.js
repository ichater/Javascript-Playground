// class Person {
//   constructor(species) {
//     this.species = "human";
//   }
//   talk() {
//     return "Talking";
//   }
// }

// const izaak = new Person();

// console.log(izaak); // Person { species: 'human' } talk() is absent

// console.log("proto: ", Object.getPrototypeOf(izaak).talk()); // Talking
// console.log("proto: ", izaak.__proto__); // {}
// console.log(Person.prototype.talk()); // Talking

// console.log(Person.prototype === izaak.__proto__); // true

// Person.prototype.talk = function () {
//   return "New and more advanced talking";
// };

// console.log(Person.prototype.talk()); // New and more advanced talking

// function FunctionPerson() {
//   this.age = 12;
// }

// const me = new FunctionPerson();

// console.log("me age: " + me.age); // 12

// me.age = 40;

// console.log("FunctionPerson age: " + new FunctionPerson().age); //12
// console.log("me age: " + me.age); // 40

// class SuperHuman extends Person {
//   fly() {
//     return "flying to the moon!";
//   }
// }

// const you = new SuperHuman();

// console.log("Talking and flying " + you.talk() + " and " + you.fly());

const myDate = new Date();
let object = myDate;

do {
  object = Object.getPrototypeOf(object);
  console.log(object);
} while (object);

const myObject = {
  city: "Madrid",
  greet() {
    console.log(`Greetings from ${this.city}`);
  },
};

console.log(Object.getPrototypeOf(myObject)); // Greetings from Madrid
