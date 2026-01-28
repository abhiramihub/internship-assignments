/*
Assignment 5 – Practical Question 1
Topic: Arrays
Author: Your Name
Date: 28-Jan-2026
Description: Create arrays in all ways and loop through them.
*/

// Definition:
// An array is a collection of elements stored in a single variable. 
// Arrays can store numbers, strings, objects, or even other arrays. 
// They allow us to access, add, or modify elements using indices and loop through them easily.

console.log("=== ARRAY EXAMPLES ===");

// 1️⃣ Array using literal notation
let arr1 = [1, 2, 3, 4, 5];
console.log("Array literal:");
for(let i = 0; i < arr1.length; i++) {
  console.log(arr1[i]);
}

// 2️⃣ Array using new Array()
let arr2 = new Array(6, 7, 8, 9, 10);
console.log("Array using new Array():");
for(let val of arr2) {
  console.log(val);
}

// 3️⃣ Empty array and push
let arr3 = [];
arr3.push("apple", "banana", "cherry");
console.log("Empty array with push:");
arr3.forEach(item => console.log(item));

// 4️⃣ Array with string values
let arr4 = ["red", "green", "blue"];
console.log("String array:");
for(let color of arr4) {
  console.log(color);
}

// 5️⃣ Loop using while
let i = 0;
console.log("Loop using while:");
while(i < arr1.length) {
  console.log(arr1[i]);
  i++;
}

// 6️⃣ Loop using do-while
let j = 0;
console.log("Loop using do-while:");
do {
  console.log(arr2[j]);
  j++;
} while(j < arr2.length);

// 7️⃣ Loop using forEach
console.log("Loop using forEach:");
arr3.forEach(item => console.log(item));