// const x = [1, 2, 3, 4, 5, 6];
// const y = [1, 2, 3, 4, 5, 6, 7];

// console.log(
//   x.map((x, i) => {
//     return { x: x, y: y };
//   })
// );

// console.log(
//   x
//     .map((x) =>
//       y.map((y) => {
//         return { x: x, y: y };
//       })
//     )
//     .reduce((acc, cur) => acc.concat(cur))
// );

// const test = x.map((x) => {
//   return y.map((y) => {
//     return { x: x, y: y };
//   });
// });

// console.log(test.reduce((acc, cur) => acc.concat(cur)));

// const numberToArray = (number) => {
//   let array = [];
//   for (let i = 1; i <= number; i++) {
//     array.push(i);
//   }
//   return array;
// };

// console.log([...Array(3)].map((_, i) => i + 1));

// const result = [
//   { x: 1, y: 1, token: null },
//   { x: 1, y: 2, token: null },
//   { x: 2, y: 1, token: null },
//   { x: 2, y: 2, token: null },
// ];

// const chipFallLength = (gameCells, command) => {
//   const lowestCellY = gameCells
//     .filter((cell) => cell.x === command && cell.token === null)
//     .map((cell) => cell.y);

//   const cellToToken = gameCells.find(
//     (cell) => cell.y === Math.min(...lowestCellY) && cell.x === command
//   );

//   gameCells.splice(gameCells.indexOf(cellToToken), 1, {
//     x: cellToToken.x,
//     y: cellToToken.y,
//     token: "red",
//   });

//   return gameCells;
// };

// console.log(chipFallLength(result, 2));

// const gameBoardCells = (board) => {
//   const x = numberToArray(board.x);
//   const y = numberToArray(board.y);

//   return x
//     .map((x) =>
//       y.map((y) => {
//         return { x: x, y: y, token: null };
//       })
//     )
//     .reduce((acc, cur) => acc.concat(cur));
// };

// const numberToArray = (number) => {
//   return [...Array(number)].map((_, i) => i + 1);
// };

// const gameBoardCells = (board) => {
//   const cell = { token: null };
//   return [...Array(board.y)].map(() => [...Array(board.x)].map((_, i) => cell));
// };

// // console.log(gameBoardCells({ x: 6, y: 7 }));

const board = [
  [
    { token: null },
    { token: null },
    { token: null },
    { token: null },
    { token: null },
    { token: null },
  ],
  [
    { token: "red" },
    { token: "red" },
    { token: "red" },
    { token: null },
    { token: null },
    { token: null },
  ],
  [
    { token: "red" },
    { token: "yellow" },
    { token: "yellow" },
    { token: null },
    { token: null },
    { token: null },
  ],
  [
    { token: "red" },
    { token: null },
    { token: null },
    { token: null },
    { token: null },
    { token: null },
  ],
  [
    { token: "red" },
    { token: null },
    { token: null },
    { token: null },
    { token: null },
    { token: null },
  ],
  [
    { token: null },
    { token: null },
    { token: null },
    { token: null },
    { token: null },
    { token: null },
  ],
  [
    { token: null },
    { token: null },
    { token: null },
    { token: null },
    { token: null },
    { token: null },
  ],
];

const i = 0;

const result = [board[i][0], board[i + 1][0], board[i + 2][0], board[i + 3][0]];

console.table(board);

// const isConnectedHorizontal = (gameCells, i, j) => {
//   const result = gameCells[i].slice(gameCells[i][j], 4);
//   return (
//     result.every((x) => x.token === "red") ||
//     result.every((x) => x.token === "yellow")
//   );
// };

// const isConnectedVerticle = (gameCells, i, j) => {
//   const result = [...gameCells[i]];
//   // console.log([gameCells[i + 1][j], gameCells[i + 2][j]]);
//   console.log(result);
//   return (
//     result.every((x) => x.token === "red") ||
//     result.every((x) => x.token === "yellow")
//   );
// };

// const isConnected = (gameCells) => {
//   for (var i = 1; i < gameCells.length; i++) {
//     for (var j = 1; j < gameCells[i].length; j++) {
//       const result = gameCells[i][j].token;

//       if (result !== null) {
//         if (
//           isConnectedHorizontal(gameCells[i], j) ||
//           isConnectedVerticle(gameCells, i, j)
//         ) {
//           return "got a winner!";
//         } else {
//           continue;
//         }
//       } else {
//         continue;
//       }
//     }
//   }
// };

// console.log(isConnectedVerticle(board));

// const arr = [
//   { token: "red" },
//   { token: "yellow" },
//   { token: "yellow" },
//   { token: null },
//   { token: null },
//   { token: null },
//   { token: "red" },
//   { token: "yellow" },
//   { token: "yellow" },
//   { token: null },
//   { token: null },
//   { token: null },
// ];

// const j = 2;
// console.log(arr.slice(j, j + 4));
