/*
Assignment 3 – Practical Question 3
Topic: If-Else Conditions
Description: This file contains 7 programs demonstrating the use of "if-else" conditions in JavaScript.
*/

// Program 1: Check if number is positive or negative
let num1 = -5;
if (num1 > 0) {
  console.log(num1 + " is positive");
} else {
  console.log(num1 + " is negative");
}

// Program 2: Check if number is even or odd
let num2 = 7;
if (num2 % 2 === 0) {
  console.log(num2 + " is even");
} else {
  console.log(num2 + " is odd");
}

// Program 3: Check voting eligibility
let age = 16;
if (age >= 18) {
  console.log("Eligible to vote");
} else {
  console.log("Not eligible to vote");
}

// Program 4: Compare two numbers
let a = 10, b = 20;
if (a > b) {
  console.log(a + " is greater than " + b);
} else {
  console.log(b + " is greater than " + a);
}

// Program 5: Check temperature
let temp = 35;
if (temp > 30) {
  console.log("It's hot outside");
} else {
  console.log("Weather is moderate");
}

// Program 6: Check if string is empty
let str = "";
if (str.length === 0) {
  console.log("String is empty");
} else {
  console.log("String is not empty");
}

// Program 7: Check if variable is defined or undefined
let value;
if (value !== undefined) {
  console.log("Value is defined");
} else {
  console.log("Value is undefined");
}