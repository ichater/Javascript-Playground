const prompt = require("prompt-sync")({ sigint: true });

// const scope = () => {
//   let command = prompt("where to?");
//   let arr = [];
//   const scope2 = () => {
//     arr.push(command);
//   };
//   scope2();

//   scope();
//   if (command === "show") {
//     console.log(arr);
//   }
// };
// console.log([1, 2, 3, 4]);

// scope();

// const scope2 = (arr, command) => {
//   console.log(arr);
//   arrAdjust(arr, command);
//   userInput();
// };

// const arrAdjust = (arr, command) => {
//   arr.push(command);
// };

// const scopeFunction = (a) => {
//   const b = a;
//   const c = () => {
//     console.log(this);
//     return "hello";
//   };
//   c();
// };

// scopeFunction();


//https://medium.com/dailyjs/some-examples-to-help-understand-javascripts-closure-372e42fff94d

var incrementUntil = function(max) { 
  if(num >= max) return num 
  num++
  incrementUntil(max)
}

var num = 0
incrementUntil(3)
console.log(num) //> 3


num1 = 0
var myFun2 = function() { 
   var num1 = -1
   incrementUntil(3)
   console.log(num1)
  return num1 
}

// Here’s how we can fix myFun2 so it can leverage the incrementUntil 
// function to modify the num inside of its own scope.

myFun2() //> -1 ……Why?
console.log(num1) //> 3

var myFun2 = function() { 
  var num = -1
  function incrementUntil(max) { 
     if(num >= max) return num 
     num++
     incrementUntil(max)
   }
   incrementUntil(3)
   console.log(num)
   return num 
}	
myFun2() //> 3



var incrementUntil = function(max) {
  var inc = function(num) { 
     if(num >= max) return num 
     return inc(num+1)
   }
   return (num) => inc(num)
}
 
console.log(incrementUntil(4)(1)) //> 4
 
console.log(incrementUntil(8)(3)) //> 8
