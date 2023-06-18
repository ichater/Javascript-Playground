const myMap = new Map();
myMap.set("key1", "value1");
myMap.set("key2", "value2");
myMap.set("key3", "value3");

console.log(myMap);
console.log([...myMap]); // Using spread operator
console.log(Array.from(myMap));

console.log("========================");
const contacts = new Map();
contacts.set("Jessie", { phone: "213-555-1234", address: "123 N 1st Ave" });
contacts.has("Jessie"); // true
contacts.get("Hilary"); // undefined
contacts.set("Hilary", { phone: "617-555-4321", address: "321 S 2nd St" });
contacts.get("Jessie"); // {phone: "213-555-1234", address: "123 N 1st Ave"}
contacts.delete("Raymond"); // false
contacts.delete("Jessie"); // true
console.log(contacts.size); // 1
