// const API = "http://www.omdbapi.com/?apikey=ac8a5131&s=blade";

// const returnAPI = (api) => {
//   fetch(api)
//     .then((response) => response.json())
//     .then((json) => console.log(json[0].title))
//     .catch((err) => console.log(err));
// };

// returnAPI(API);

// let arr = [5, 7, 4, 12];

// console.log(
//   arr.map((v, i) => {
//     return { number: v, id: i };
//   })
// );

// console.log(
//   arr.map((v, i) => {
//     return { number: v, id: i };
//   })
// );

// const reduce = (accumulator, currentValue) => accumulator + currentValue;

// console.log(arr.reduce(reduce));

// const cars = [
//   "Mclaren",
//   "Lamborghini",
//   "Ferrari",
//   "Porsche",
//   "Mercedes",
//   "Corvette",
// ];

// console.log(
//   arr.push(cars.filter((car) => car.substring(0).toLowerCase().includes("f")))
// );
// console.log(cars.sort());
// console.log(cars.reverse());

// var car = {
//   make: "Lamborghini",
//   model: "Huracán",
//   name: null,
//   fullName: function () {
//     this.name = this.make + " " + this.model;
//     console.log(this.name);
//   },
// };
// var anotherCar = {
//   make: "Ferrari",
//   model: "Italia",
//   name: null,
// };
// car.fullName.call(anotherCar);

// // console.log(anotherCar.name);

// var cars = [
//   { make: "Mclaren", model: "720s" },
//   { make: "Ferrari", model: "Italia" },
// ];
// var car = {
//   cars: [{ make: "Lamborghini", model: "Huracán" }],
//   fullName: function () {
//     console.log(this.cars[0].make + " " + this.cars[0].model);
//   },
// };
// var vehicle = car.fullName.bind(car);
// vehicle();

// const calculateFee = (balance) => {
//   if (balance < 200000) {
//     return feeTierOne(balance);
//   }
//   if (balance < 500000) {
//     return feeTierTwo(balance);
//   }
//   if (balance > 500000) {
//     return feeTierThree(balance);
//   }
// };

// const feeTierOne = (balance) => {
//   return balance * 0.004 < 375 ? 375 : balance * 0.004;
// };

// const feeTierTwo = (balance) => {
//   return (balance - 200000) * 0.0015 + 800;
// };

// const feeTierThree = (balance) => {
//   return (balance - 500000) * 0.0003 + 1250;
// };

// console.log(calculateFee(50000));

// let officers = [
//   { id: 20, name: "Captain Piett" },
//   { id: 24, name: "General Veers" },
//   { id: 56, name: "Admiral Ozzel" },
//   { id: 88, name: "Commander Jerjerrod" },
// ];

// console.log(officers.map((i) => i.id));

// var pilots = [
//   {
//     id: 10,
//     name: "Poe Dameron",
//     years: 14,
//   },
//   {
//     id: 2,
//     name: "Temmin 'Snap' Wexley",
//     years: 30,
//   },
//   {
//     id: 41,
//     name: "Tallissan Lintra",
//     years: 16,
//   },
//   {
//     id: 99,
//     name: "Ello Asty",
//     years: 22,
//   },
// ];

// let totalYears = pilots.reduce((a, pilot) => a + pilot.years, 0);

// console.log(totalYears);

// var pilots = [
//   {
//     id: 2,
//     name: "Wedge Antilles",
//     faction: "Rebels",
//   },
//   {
//     id: 8,
//     name: "Ciena Ree",
//     faction: "Empire",
//   },
//   {
//     id: 40,
//     name: "Iden Versio",
//     faction: "Empire",
//   },
//   {
//     id: 66,
//     name: "Thane Kyrell",
//     faction: "Rebels",
//   },
// ];

// const rebels = pilots.filter((pilot) => pilot.faction === "Rebels");
// const empire = pilots.filter((pilot) => pilot.faction === "Empire");

// var personnel = [
//   {
//     id: 5,
//     name: "Luke Skywalker",
//     pilotingScore: 98,
//     shootingScore: 56,
//     isForceUser: true,
//   },
//   {
//     id: 82,
//     name: "Sabine Wren",
//     pilotingScore: 73,
//     shootingScore: 99,
//     isForceUser: false,
//   },
//   {
//     id: 22,
//     name: "Zeb Orellios",
//     pilotingScore: 20,
//     shootingScore: 59,
//     isForceUser: false,
//   },
//   {
//     id: 15,
//     name: "Ezra Bridger",
//     pilotingScore: 43,
//     shootingScore: 67,
//     isForceUser: true,
//   },
//   {
//     id: 11,
//     name: "Caleb Dume",
//     pilotingScore: 71,
//     shootingScore: 85,
//     isForceUser: true,
//   },
// ];

// const stepOne = personnel
//   .filter((char) => char.isForceUser)
//   .map((char) => char.pilotingScore + char.shootingScore)
//   .reduce((total, score) => total + score, 0);

// console.log(stepOne);

// const stepTwo = stepOne.map((char) => char.pilotingScore + char.shootingScore);

// console.log(stepTwo);

// const stepThree = stepTwo.reduce((total, score) => total + score, 0);

// console.log(stepThree);

//Variable declarations come first before any code is run THEN variable assignments works differently with const let and var
// function hoist() {
//   a = 20;
//   var b = 100;
// }

// hoist();

// console.log(a);

// console.log(hoist1); // Output: undefined

// var hoist1 = "The variable has been hoisted.";

// function hoist2() {
//   message = "Hoisting is all the rage!";
//   console.log(message);
//   var message;
// }

// hoist2();

// let hoist3;
// console.log(hoist3); // Output: undefined

// hoist3 = "Hoisted";

// class Hobbit {
//   constructor(height, weight) {
//     this.height = height;
//     this.weight = weight;
//   }
// }

// var Frodo = new Hobbit();
// Frodo.height = 100;
// Frodo.weight = 300;
// console.log(Frodo); // Output: ReferenceError: Hobbit is not defined

console.log(null == undefined);

console.log(null === undefined);

console.log("1" == 1);

console.log("1" === 1);
