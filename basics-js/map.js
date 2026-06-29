// // Create an empty Map
// const fruits = new Map();

// // Set Map Values
// fruits.set("apples", 500);
// fruits.set("bananas", 300);
// fruits.set("oranges", 200);

// Create a Map
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

console.log(fruits);
console.table(fruits);


// You can add elements to a Map with the set() method:

fruits.set("mangos", 100);

// The set() method can also be used to change existing Map values:

fruits.set("apples", 200);

// The get() method gets the value of a key in a Map:

fruits.get("apples");    // Returns 500

console.log( typeof (fruits));

console.table(fruits);