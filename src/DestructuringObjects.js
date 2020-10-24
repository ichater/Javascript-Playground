// let person = {
//   firstName: "John",
//   age: 28,
//   lastName: "Doe",
// };
// let person2 = {
//   firstName: "Jane",
//   age: 24,
//   lastName: "Doey",
//   address: {
//     city: "somewhere else",
//     state: "Another one",
//   },
// };

// const {
//   firstName: name,
//   age,
//   favouriteFood = "ricecream",
//   address: { city, state },
// } = person2;

// console.log(name);
// console.log(age);
// console.log(favouriteFood);
// console.log(city);
// console.log(state);

// //overwrite shared attibutesd of "person2" with "person"
// const person3 = { ...person2, ...person };

// console.log(person3);

function nestedArrayAndObject() {
  // refactor this to a single line of destructuring...
  const info = {
    title: "Once Upon a Time",
    protagonist: {
      name: "Emma Swan",
      enemies: [
        { name: "Regina Mills", title: "Evil Queen" },
        { name: "Cora Mills", title: "Queen of Hearts" },
        { name: "Peter Pan", title: `The boy who wouldn't grow up` },
        { name: "Zelena", title: "The Wicked Witch" },
      ],
    },
  };
  const {
    title,
    protagonist: {
      name,
      enemies: [{ name: enemyName, title: enemyTitle }],
    },
  } = info; // <-- replace the next few `const` lines with this

  return `${enemyName} (${enemyTitle}) is an enemy to ${name} in "${title}"`;
}

console.log(nestedArrayAndObject());

const metadata = {
  title: "Scratchpad",
  translations: [
    {
      locale: "de",
      localization_tags: [],
      last_edit: "2014-04-14T08:43:37",
      url: "/de/docs/Tools/Scratchpad",
      title: "JavaScript-Umgebung",
    },
  ],
  url: "/en-US/docs/Tools/Scratchpad",
};

let {
  title: englishTitle, // rename
  translations: [
    {
      title: localeTitle, // rename
    },
  ],
} = metadata;

console.log(englishTitle); // "Scratchpad"
console.log(localeTitle);
