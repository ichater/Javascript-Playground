class Address {
  constructor(zip, street) {
    this.zip = zip;
    this.street = street;
  }
}

class User {
  constructor(name, age, phone, address) {
    this.name = name;
    this.age = age;
    this.phone = phone;
    this.address = address;
  }
}

class UserBuilder {
  constructor(name) {
    this.user = new User(name);
  }

  setAge(age) {
    this.user.age = age;
    return this;
  }

  setPhone(phone) {
    this.user.phone = phone;
    return this;
  }

  setAddress(zip, address) {
    this.user.address = new Address(zip, address);
    return this;
  }

  build() {
    return this.user;
  }
}

// Builder class methods allow you to chain in different additions to your class below.
let bob = new UserBuilder("Bob")
  .setAge(19)
  .setPhone(123124123)
  .setAddress(100, "Anne")
  .build();
console.log(bob);

class UserBuilderJavascript {
  constructor(name, { age, phone, address } = {}) {
    this.name = name;
    this.age = age;
    this.phone = phone;
    this.address = address;
  }
}

let Maggie = new UserBuilderJavascript("maggie", {
  age: 5,
  address: new Address(43, "Ann street"),
  phone: 93975245,
});

console.log(Maggie);
