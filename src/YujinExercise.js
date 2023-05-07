// const bill = 275;
// let tip = bill <= 300 && bill >= 50 ?  bill * .15:  bill * .2

// console.log(6000*14)
// console.log("the bill was " + bill + ", the tip was " + tip)
// console.log(`the bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

// if(bill !== 1000){
//     if(bill === 500){

//     }else {

// }

// }

// function fruitProcessor(aser, Bruno) {
//   const juice = `Milkshake with ${aser} apples and ${Bruno} oranges.`;
//   return juice;
// }

// const fruitProcessorArrow = (aser, Bruno) =>
//   `Milkshake with ${aser} apples and ${Bruno} oranges.`;

// // console.log(fruitProcessor(8, 5));

// // const calculation = (num1, num2) => num1 * num2;

// const french = fruitProcessor();
// console.log(french);

// const appleJuice = fruitProcessor(5, 0);// 5, 0  are arguments
// console.log(appleJuice);
// console.log(fruitProcessor(5, 0));

// Yujin Ok
// Yujin sen t Today at 7:06 PM

// const dolphinsOne = [44, 23, 71];
// const dolphinsTwo = [85, 54, 41];
// const koalasOne = [65, 54, 49];
// const koalasTne = [23, 34, 27];

// const calcAverage = (scoreArray) =>
//   scoreArray.reduce((acc, cur) => acc + cur) / scoreArray.length + 1;

// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: () => {
//     return (this.mass / this.height) * 2;
//   },
// };
// // console.log(mark.calcBMI());

// const badObject = {
//   name: "bad",
//   lastName: "object",
//   greeting: () => {
//     console.log(`I am a ${this.name} ${this.lastName}`);
//   },
//   errors: true,
// };

// // badObject.greeting();

// const truthyFalsey = (param) =>
//   param ? `${param} is truthy` : `${param} is falsey`;

// console.log(truthyFalsey(truthyFalsey(null)));

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };
// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// const anotherArray = bills;

// const tips = [];
// const totals = [];

// for (let i = 0; i < bills.length; i++) {
//   const tip = calcTip(bills[i]);
//   tips.push(tip);
//   totals.push(tip + bills[i]);
// }

// console.log([...bills, ...anotherArray]);

// console.log(tips);
// console.log(totals);

const originalArr = [-3, -2, 1, 5, -1, 0, 2, 3, 4];
const arrIhave = [-3, -2, 1, 5];
// let newArr = [];

const newArrFunction = (arr1, arr2) =>
  arr1.filter((item) => !arr2.includes(item));

console.log(newArrFunction(originalArr, arrIhave));
