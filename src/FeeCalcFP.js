const tierOne = (balance) => {
  const fee = balance * 0.004;
  if (fee <= 0) {
    return 0;
  } else if (fee < 375) {
    return 375;
  } else if (fee > 375 && fee < 800) {
    return fee;
  } else {
    return 800;
  }
};

const tierTwo = (balance) => {
  const tierTwoUncapped =
    (balance - 200000) * 0.0015 <= 0 ? 0 : (balance - 200000) * 0.0015;
  const isTirerTwo = tierTwoUncapped > 450 ? 450 : tierTwoUncapped
  return balance > 200000 ? isTirerTwo : 0
};

const tierThree = (balance) =>
  (balance - 500000) * 0.0003 <= 0 ? 0 : (balance - 500000) * 0.0003;

const feeTotalUnCapped = (balance) =>
  tierOne(balance) + tierTwo(balance) + tierThree(balance);

const feeTotalCapped = (balance) =>
  feeTotalUnCapped(balance) < 2400 ? feeTotalUnCapped(balance) : 2400;

console.log(feeTotalCapped(150000));
