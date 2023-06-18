const query = "http://localhost:3000/search?city=asdgasfg";
const noQuery = "http://localhost:3000/search";

const queryParams = (query) => {
  if (!query.includes("?")) return "no query params";
  const params = query.slice(query.indexOf("?") + 1);
  return params.slice(params.indexOf("=") + 1);
};

console.log(queryParams(noQuery));
console.log(queryParams(query));

const findCity = (slug) => {
  if (!slug.includes("city=")) return "";

  return slug.slice(slug.indexOf("=") + 1);
};

console.log(findCity(query));
