/*
Assignment 5 – Practical Question 2
Topic: Array Methods (map, forEach, filter, sort)
Description: Explore different array methods in JavaScript.
*/

// Definition:
// Array methods like map, forEach, filter, and sort are used to manipulate arrays.
// map() – transforms each element and returns a new array
// forEach() – executes a function for each element
// filter() – selects elements based on a condition
// sort() – sorts elements in a specific order

console.log("=== ARRAY METHODS EXAMPLES ===");

// Sample array of numbers
let numbers = [1, 2, 3, 4, 5];

// 1️⃣ map() – multiply each element by 2
let doubled = numbers.map(n => n * 2);
console.log("Doubled numbers (map): " + doubled);

// 2️⃣ forEach() – print each element
console.log("Numbers printed using forEach:");
numbers.forEach(n => console.log(n));

// 3️⃣ filter() – get numbers greater than 2
let filtered = numbers.filter(n => n > 2);
console.log("Filtered numbers (>2): " + filtered);

// 4️⃣ sort() – sort numbers in ascending order
let unsorted = [5, 3, 8, 1, 4];
let sorted = unsorted.sort((a, b) => a - b);
console.log("Sorted numbers: " + sorted);

// 5️⃣ map() with strings – convert to uppercase
let fruits = ["apple", "banana", "cherry"];
let upperFruits = fruits.map(f => f.toUpperCase());
console.log("Fruits in uppercase (map): " + upperFruits);

// 6️⃣ filter() with strings – only fruits with length > 5
let longFruits = fruits.filter(f => f.length > 5);
console.log("Fruits with length >5 (filter): " + longFruits);

// 7️⃣ forEach() with index
console.log("Fruits printed with index (forEach):");
fruits.forEach((f, index) => console.log(index + ": " + f));