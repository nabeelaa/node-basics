class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greeting() {
    console.log(`My name is ${this.name} and I am ${this.age} years old`);
  }
}

// const person = {
//   name: "Jane Doe",
//   age: 30
// };

// module.exports = person;
module.exports = Person;
