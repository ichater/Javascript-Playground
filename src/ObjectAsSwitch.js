function getDrinkES5(type) {
  var drinks = {
    coke: function () {
      return "Coke";
    },
    pepsi: function () {
      return "Pepsi";
    },
    lemonade: function () {
      return "Lemonade";
    },
  };
  return drinks[type]();
}

const getDrinkES6 = (type) => {
  const drinks = {
    coke: () => "Coke",
    pepsi: () => "Pepsi",
    lemonade: () => "Lemonade",
  };
  return drinks[type]();
};

function getDrinkTwoES5(type) {
  var fn;
  var drinks = {
    coke: function () {
      return "Coke";
    },
    pepsi: function () {
      return "Pepsi";
    },
    lemonade: function () {
      return "Lemonade";
    },
    default: function () {
      return "Default item";
    },
  };
  if (drinks[type]) {
    fn = drinks[type];
  } else {
    fn = drinks["default"];
  }
  return fn();
}

const getDrinkTwoES6 = (type) => {
  const drinks = {
    coke: () => "Coke",
    pepsi: () => "Pepsi",
    lemonade: () => "Lemonade",
    default: () => "Default item",
  };

  return drinks[type] ? drinks[type]() : drinks["default"]();
};

console.log(getDrinkTwoES6("sdfhg"));
