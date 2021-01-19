const tierOne = (balance) => {
  const fee = balance * 0.004;
  if (fee === 0) {
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
  const fee = (balance - 200000) * 0.0015;
  if (fee <= 0) {
    return 0;
  } else if (fee >= 1 && fee < 450) {
    return fee;
  } else {
    return 450;
  }
};

const tierThree = (balance) =>
  (balance - 500000) * 0.0003 <= 0 ? 0 : (balance - 500000) * 0.0003;

const feeTotal = (balance) => {
  const total = tierOne(balance) + tierTwo(balance) + tierThree(balance);
  return total < 2400 ? total : 2400;
};

console.log(feeTotal(1750000));
