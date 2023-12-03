/* 
   Filename: sophisticated_app.js
   Description: Sophisticated and complex JavaScript code 
*/

// Create a class for a Person
class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }

  sayGender() {
    console.log(`I am ${this.gender}.`);
  }
}

// Create a subclass for a Student inheriting from Person
class Student extends Person {
  constructor(name, age, gender, major) {
    super(name, age, gender);
    this.major = major;
  }

  study() {
    console.log(`I am studying ${this.major}`);
  }
}

// Create instances of Person and Student
const john = new Person('John Doe', 25, 'Male');
const jane = new Student('Jane Smith', 20, 'Female', 'Computer Science');

// Call methods on the instances
john.greet(); // Output: Hello, my name is John Doe and I am 25 years old.
john.sayGender(); // Output: I am Male.
jane.greet(); // Output: Hello, my name is Jane Smith and I am 20 years old.
jane.sayGender(); // Output: I am Female.
jane.study(); // Output: I am studying Computer Science.

// Create an async function to fetch data from an API
async function fetchUserData(username) {
  try {
    const response = await fetch(`https://api.example.com/user/${username}`);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Call the async function to fetch user data
fetchUserData('johndoe');

// Create a recursive function to calculate factorial
function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(5)); // Output: 120

// Define a closure to create a counter
function counter() {
  let count = 0;

  return function () {
    return count++;
  };
}

const increment = counter();

console.log(increment()); // Output: 0
console.log(increment()); // Output: 1
console.log(increment()); // Output: 2

// Generate a random number between two values
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomNumber(1, 10)); // Output: Random number between 1 and 10

// Implement a class for a Queue data structure
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item);
  }

  dequeue() {
    if (this.isEmpty()) {
      return 'Underflow';
    }
    return this.items.shift();
  }

  front() {
    if (this.isEmpty()) {
      return 'No elements in Queue';
    }
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}

// Create an instance of Queue and perform operations
const queue = new Queue();
queue.enqueue('A');
queue.enqueue('B');
queue.enqueue('C');

console.log(queue.front()); // Output: A
console.log(queue.dequeue()); // Output: A
console.log(queue.size()); // Output: 2

// ... continue with more sophisticated code logic