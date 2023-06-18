const loan = 400000;
const interest = 5;
const term = 30;

const mortgageCalculator = (loan, interest, term) => {
  const percentToDecimal = interest / 100;
  const monthlyInterestRate = percentToDecimal / 12;

  const top = loan * monthlyInterestRate;
  const bottom = 1 - Math.pow(1 + monthlyInterestRate, -12 * term);
  return (top / bottom).toFixed(2);
};

console.log(mortgageCalculator(loan, interest, term));

console.log(isNaN("2"));
