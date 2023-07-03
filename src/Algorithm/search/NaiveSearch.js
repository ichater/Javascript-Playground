function stringSearch(longStr, shortstr) {
  let count = 0;
  for (let i = 0; i < longStr.length; i++) {
    for (let j = 0; j < shortstr.length; j++) {
      if (shortstr[j] !== longStr[i + j]) break;
      if (j === shortstr.length - 1) count += 1;
    }
  }
  return count;
}

console.log(stringSearch("zomgomgagainletsogomg", "omg"));

console.log(stringSearch("izaakdoeswhatizaakdoesnotdo", "izaak"));

console.log(stringSearch("Idonothavethewords", "izaak"));

function naiveSearch(long, short) {
  var count = 0;
  for (var i = 0; i < long.length; i++) {
    for (var j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) break;
      if (j === short.length - 1) count++;
    }
  }
  return count;
}

console.log(naiveSearch("lorie loled", "lol"));
