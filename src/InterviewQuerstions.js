// const arr = [2, 2, 1, 1, 3, 3, 4, 5, 7, 7];

// const arr2 = [2, 2, 1, -3, 3, 4, 5, 7, 17];

// // //Find the second minimum element of an array

// console.log(
//   arr.filter((e, i, array) => array.indexOf(e) === i).sort((a, b) => a - b)[1]
// );

// // First non-repeating integers in an array

// // console.log(arr.map((e, i)=> ));

// // Merge two sorted arrays

// console.log([...arr, ...arr2].sort((a, b) => a - b));

// // Rearrange positive and negative values in an array

// console.log([...arr, ...arr2].sort((a, b) => a - b));

// Find the longest substring with non repeating characters and all different characters

// abcddddefg should return defg

// abcddddefghhi should also return defg

const longestChar = (str) => {
  const strArr = str.split("");
  const repearArr = [];
  let repString = "";
  for (let i = 0; i < strArr.length; i++) {
    if (i === strArr.length - 1) {
      repearArr.push(repString);
    }
    if (!repString.includes(strArr[i])) {
      repString += strArr[i];
    } else {
      repearArr.push(repString);
      repString = "";
    }
  }
  return repearArr.reduce((acc, cur) => (cur.length > acc.length ? cur : acc));
};

console.log(longestChar("abcddddefghijk"));

console.log(longestChar("abcddddefghi"));

console.log(longestChar("abcddddefghhiiiiijklmnopqqqqrstuvwx"));
