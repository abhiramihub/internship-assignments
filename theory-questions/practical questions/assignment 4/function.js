/*
Assignment 4 – Practical
Topic: Do-While Loops, Math Object, Function Execution
Description: This file contains 7 do-while loop examples, Math object usage, and function execution examples.
*/

// PROGRAMS USING MATH OBJECT

// Program 1: Math.round
let num1 = 4.7;
console.log("Math.round(" + num1 + ") = " + Math.round(num1));

// Program 2: Math.ceil
let num2 = 4.2;
console.log("Math.ceil(" + num2 + ") = " + Math.ceil(num2));

// Program 3: Math.floor
let num3 = 4.8;
console.log("Math.floor(" + num3 + ") = " + Math.floor(num3));

// Program 4: Math.pow
console.log("Math.pow(2, 3) = " + Math.pow(2,3));

// Program 5: Math.sqrt
console.log("Math.sqrt(16) = " + Math.sqrt(16));

// Program 6: Math.min
console.log("Math.min(5, 10, 2) = " + Math.min(5, 10, 2));

// Program 7: Math.max
console.log("Math.max(5, 10, 2) = " + Math.max(5, 10, 2));


// FUNCTION STRUCTURE EXAMPLES

// Program 1: Simple function
function greet() {
  console.log("Hello, World!");
}
greet();

// Program 2: Function with parameters
function add(a, b) {
  console.log("Sum: " + (a + b));
}
add(5, 3);

// Program 3: Function returning value
function square(x) {
  return x * x;
}
console.log("Square of 4: " + square(4));

// Program 4: Arrow function
const multiply = (a, b) => a * b;
console.log("Multiply: " + multiply(3, 5));

// Program 5: Function with default parameter
function greetName(name = "User") {
  console.log("Hello, " + name);
}
greetName();
greetName("Abhirami");

// Program 6: Function inside another function
function outer() {
  function inner() {
    console.log("Inner function executed");
  }
  inner();
}
outer();

// Program 7: Function expression
const divide = function(a, b) {
  return a / b;
}
console.log("Divide: " + divide(10, 2));