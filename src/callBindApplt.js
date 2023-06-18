const boundFunction = () => {
  return arguments;
};

console.log(boundFunction.apply(null, [1, 2, 3]));
