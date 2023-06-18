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

class NewUserBuilder {
  constructor(username) {
    this.user = new NewUser(username);
  }

  setFirstName(firstName) {
    this.user.first_name = firstName;
    return this;
  }

  build() {
    return this.user;
  }
}

class NewUser {
  constructor(
    username = "Ledwards",
    id = 12235135,
    first_name = "Leon",
    last_name = "Edwards",
    email = "Ledwards@Nottingham.uk",
    city = "Nottingham",
    password = "23ssdag1245ger24",
    phone = "042607708",
    belt = "BLACK",
    about = "",
    created_at = new Date(),
    updated_at = new Date()
  ) {
    this.id = id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.username = username;
    this.email = email;
    this.city = city;
    this.password = password;
    this.phone = phone;
    this.belt = belt;
    this.about = about;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}

const leonEdwards = new NewUserBuilder("endnow").setFirstName("izaak").build();

console.log(leonEdwards);

const newUser = new NewUser();
