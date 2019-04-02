// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function embellish() {
  let title = "simple title";

  function formatter() {
    title = "@@@@@@@@@@@@@@@@  " + title + "  @@@@@@@@@@@@@@@@@@";
    console.log(title);
  }
  return formatter;

}

innerFunction = embellish();
innerFunction();

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====

console.log("*********************  STRETCH CHALLENGE: Increment a counter **********************")
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;
  function increment() {
    console.log(++count);
  }
  return increment;
};

newCounter = counter();
//Example usage: const newCounter = counter();
newCounter(); // 1
newCounter(); // 2



// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====

console.log("*********************  STRETCH CHALLENGE: Create object with increment and decrement functions **********************")
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = 0;
  let methodObject = {
    increment: function() {console.log(++count);},
    decrement: function() {console.log(--count);}
  }
  return methodObject;
};

let myObject = counterFactory();
myObject.increment();
myObject.increment();
myObject.increment();
myObject.decrement();
myObject.increment();
myObject.decrement();
// myObject.increment();


