function Person(name) {
  this.name = name;
  this.talk = () => {
    return `hello I am ${this.name}`;
  };
}

const izaak = new Person("Izaak");

const claire = new Person("Claire");

console.log(izaak.talk()); // hello I am Izaak
console.log(claire.talk()); // hello I am Claire
