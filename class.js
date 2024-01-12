class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    kd() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  }
  
  // Creating an instance of the class
  const person1 = new Person('Harishna', 21);
  
  // Calling a method on the instance
  person1.kd();
  