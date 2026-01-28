/*
Assignment 3 – Practical Question 2
Description: This file contains 7 programs demonstrating the use of "if" conditions in JavaScript.
*/

// Program 1: Check if number is positive
let num1 = 5;
if (num1 > 0) {
  console.log(num1 + " is positive");
}

// Program 2: Check if number is even
let num2 = 4;
if (num2 % 2 === 0) {
  console.log(num2 + " is even");
}

// Program 3: Check if number is odd
let num3 = 7;
if (num3 % 2 !== 0) {
  console.log(num3 + " is odd");
}

// Program 4: Check if age is eligible to vote
let age = 20;
if (age >= 18) {
  console.log("Eligible to vote");
}

// Program 5: Check if string length > 5
let str = "HelloWorld";
if (str.length > 5) {
  console.log("String is long");
}

// Program 6: Check if number is greater than 10
let num4 = 15;
if (num4 > 10) {
  console.log(num4 + " is greater than 10");
}

// Program 7: Check if variable is defined
let value;
if (value === undefined) {
  console.log("Value is undefined");
}