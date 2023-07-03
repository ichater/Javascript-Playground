// const me = {
//   name: "Izaak",
//   talk() {
//     return "I am Izaak";
//   },
// };

// const you = {
//   name: "Claire",
//   talk() {
//     return "I am Claire";
//   },
// };

function createPerson(name) {
  return {
    name,
    talk() {
      return `I am ${name}`;
    },
  };
}

const me = createPerson("Izaak");
const you = createPerson("Claire");

console.log();
