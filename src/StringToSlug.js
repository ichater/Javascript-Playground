const stringToSlug = "Sluggify This String";

const toSlug = (input) =>
  input
    .split(" ")
    .map((str) => str.toLowerCase())
    .join("-");
console.log(toSlug(stringToSlug));
