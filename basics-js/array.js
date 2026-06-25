/*In JavaScript, an array is a special type of object used to store multiple values in a single variable.
Arrays are ordered, indexed starting from 0, and can hold mixed data types (numbers, strings, objects, functions, etc.) */

// 1. Using array literal
let fruits = ["Apple", "Banana", "Mango"];
let StudName = ["Breach", "Sova", "Phoenix"];
console.log(fruits, StudName);
console.table([fruits, StudName]);

// accessing Elements 
console.log(fruits[2]); //Mango

//add element
let arr = [1, 2, 3];
arr.push(4); //add at end
arr.unshift(0) //add at start
console.log(arr);

// remove elements
arr.pop(); //remove last
arr.shift(); //remove first

console.log(arr);

// Find elements
console.log(arr.indexOf(2)); // 1
console.log(arr.includes(3)); // true

// Iterate
arr.forEach(num => console.log(num)); // 1, 2, 3

// Transform
let doubled = arr.map(num => num * 2); // [2, 4, 6]
console.log(doubled);

// Filter
let evens = arr.filter(num => num % 2 === 0); // [2]
console.log(evens);

// Reduce
let sum = arr.reduce((total, num) => total + num, 0); // 6
console.log(sum);

/*-------------------Multi Dimensional Array---------------*/

let mat = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(mat);
console.table(mat)
console.log(mat[1][2]);


