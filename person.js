const person = {
  name: {
    first: "Bob",
    last: "Smith",
  },
  age: 32,
  bio () {
    console.log(`${this.name.first} ${this.name.last} is ${this.age} years old.`);
  },
  introduceSelf () {
    console.log(`Hi! I'm ${this.name.first}.`);
  },
};

person.bio();
person.introduceSelf();

