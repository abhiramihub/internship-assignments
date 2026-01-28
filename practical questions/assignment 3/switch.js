/*
Assignment 3 – Practical Question 5
Topic: Switch and Loops
Description: This file contains programs demonstrating switch case and loop conditions in JavaScript.
*/

// Program 1: Day of the week using switch
let day = 3;
switch(day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day");
}

// Program 2: Simple calculator using switch
let num1 = 10, num2 = 5, operator = '+';
switch(operator) {
  case '+':
    console.log(num1 + num2);
    break;
  case '-':
    console.log(num1 - num2);
    break;
  case '*':
    console.log(num1 * num2);
    break;
  case '/':
    console.log(num1 / num2);
    break;
  default:
    console.log("Invalid operator");
}

