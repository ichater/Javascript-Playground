const profile = {
  firstName: "",
  lastName: "",
  setName: function (name) {
    let splitName = function (n) {
      let nameArray = n.split(" ");
      //the 'this' here sets the below variables to a window function
      this.firstName = nameArray[0];
      this.lastName = nameArray[1];
    };
    splitName(name);
  },
};

profile.setName("john doe");
console.log(firstName);

const profile1 = {
  firstName: "",
  lastName: "",
  setName: function (name) {
    let splitName = (n) => {
      let nameArray = n.split(" ");
      //below are just scoped to "profile1" due to the use of an arrow function
      this.firstName1 = nameArray[0];
      this.lastName1 = nameArray[1];
    };
    splitName(name);
  },
};

profile1.setName("john doe");
console.log(profile1.firstName1);
