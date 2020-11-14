let activities = [
  ["Work", 9],
  ["Eat", 1],
  ["Commute", 2],
  ["Play Game", 1],
  ["Sleep", 7],
];

console.table(activities);

activities.push(["Study", 2]);

console.table(activities);

activities.splice(1, 0, ["Programming", 2]);

console.table(activities);

console.log(activities);

console.assert(false);

activities.forEach((activity) => {
  let percentage = ((activity[1] / 24) * 100).toFixed();
  activity[2] = percentage + "%";
});

console.table(activities);
