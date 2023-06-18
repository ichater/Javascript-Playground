let userDetails = {
  name: "John Doe",
  username: "dsfgj",
  age: 10,
};

const checkEmptyValues = (obj) =>
  Object.values(obj).some((value) => !value)
    ? "empty values in here"
    : "full object";

// console.log(checkEmptyValues(userDetails));

const obj = {};

const objectPush = (object, key) =>
  key in object ? object[key].push("New Element") : (object[key] = ["Here"]);

objectPush(obj, "newKey");
objectPush(obj, "newKey");
objectPush(obj, "newKey");
objectPush(obj, "newKey");
objectPush(obj, "AnotherNewKey");
console.log(obj);

console.log(typeof [1, 2, 3]);
