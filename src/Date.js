console.log("date: " + new Date());

const currentDate = new Date();

console.log(
  `${currentDate.getHours()} : ${
    currentDate.getMinutes() < 10
      ? "0" + currentDate.getMinutes()
      : currentDate.getMinutes()
  } : ${currentDate.getSeconds()}`
);

console.log(typeof currentDate.getHours());
