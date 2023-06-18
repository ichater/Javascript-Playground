function hash(key) {
  let hashValue = 0;
  const stringKey = `${key}`;

  for (let index = 0; index < stringKey.length; index++) {
    const charCode = stringKey.charCodeAt(index);
    hashValue += charCode << (index * 8);
  }

  return hashValue;
}

console.log(hash("rat"));
console.log(hash("cat"));
console.log(hash("dog"));
