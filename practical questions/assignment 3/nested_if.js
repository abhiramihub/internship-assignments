/*
Assignment 3 – Practical Question 4
Topic: Nested If Conditions
Description: This file contains 7 programs demonstrating the use of nested "if" conditions in JavaScript.
*/

// Program 1: Check if number is positive, negative, or zero
let num1 = 0;
if (num1 > 0) {
  console.log(num1 + " is positive");
} else {
  if (num1 < 0) {
    console.log(num1 + " is negative");
  } else {
    console.log(num1 + " is zero");
  }
}

// Program 2: Check age group
let age = 25;
if (age > 0) {
  if (age < 13) {
    console.log("Child");
  } else if (age <= 19) {
    console.log("Teenager");
  } else {
    console.log("Adult");
  }
}

// Program 3: Check number divisible by 2 and 3
let num2 = 12;
if (num2 % 2 === 0) {
  if (num2 % 3 === 0) {
    console.log(num2 + " is divisible by 2 and 3");
  } else {
    console.log(num2 + " is divisible by 2 but not by 3");
  }
}

// Program 4: Compare three numbers
let a = 10, b = 20, c = 15;
if (a > b) {
  if (a > c) {
    console.log(a + " is greatest");
  } else {
    console.log(c + " is greatest");
  }
} else {
  if (b > c) {
    console.log(b + " is greatest");
  } else {
    console.log(c + " is greatest");
  }
}

// Program 5: Check exam result
let marks = 85;
if (marks >= 0 && marks <= 100) {
  if (marks >= 60) {
    console.log("Passed");
  } else {
    console.log("Failed");
  }
} else {
  console.log("Invalid marks");
}

// Program 6: Check temperature range
let temp = 15;
if (temp >= 0) {
  if (temp <= 20) {
    console.log("Cool");
  } else {
    console.log("Warm");
  }
} else {
  console.log("Freezing");
}

// Program 7: Check login credentials
let username = "admin";
let password = "1234";
if (username === "admin") {
  if (password === "1234") {
    console.log("Login successful");
  } else {
    console.log("Incorrect password");
  }
} else {
  console.log("Unknown user");
}