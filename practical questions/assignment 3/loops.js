/*
Assignment 3 – Practical Question 6
Topic: Loops in JavaScript
Description: This file contains 7 examples each of for loop, while loop, and do-while loop.
*/

// FOR LOOP PROGRAMS

// Program 1: Print 1 to 5
for(let i = 1; i <= 5; i++) {
  console.log(i);
}

// Program 2: Print even numbers 2 to 10
for(let i = 2; i <= 10; i += 2) {
  console.log(i);
}

// Program 3: Print odd numbers 1 to 9
for(let i = 1; i < 10; i += 2) {
  console.log(i);
}

// Program 4: Print table of 5
for(let i = 1; i <= 10; i++) {
  console.log("5 x " + i + " = " + (5 * i));
}

// Program 5: Sum of 1 to 5
let sum1 = 0;
for(let i = 1; i <= 5; i++) {
  sum1 += i;
}
console.log("Sum: " + sum1);

// Program 6: Loop through array
let fruits = ["apple", "banana", "cherry"];
for(let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Program 7: Countdown 5 to 1
for(let i = 5; i >= 1; i--) {
  console.log(i);
}

// WHILE LOOP PROGRAMS

// Program 1: Print 1 to 5
let i = 1;
while(i <= 5) {
  console.log(i);
  i++;
}

// Program 2: Print even numbers 2 to 10
let j = 2;
while(j <= 10) {
  console.log(j);
  j += 2;
}

// Program 3: Print odd numbers 1 to 9
let k = 1;
while(k < 10) {
  console.log(k);
  k += 2;
}

// Program 4: Print table of 5
let m = 1;
while(m <= 10) {
  console.log("5 x " + m + " = " + (5 * m));
  m++;
}

// Program 5: Sum of 1 to 5
let n = 1, sum2 = 0;
while(n <= 5) {
  sum2 += n;
  n++;
}
console.log("Sum: " + sum2);

// Program 6: Loop through array
let arr = ["dog", "cat", "mouse"];
let p = 0;
while(p < arr.length) {
  console.log(arr[p]);
  p++;
}

// Program 7: Countdown 5 to 1
let q = 5;
while(q >= 1) {
  console.log(q);
  q--;
}

// DO-WHILE LOOP PROGRAMS

// Program 1: Print 1 to 5
let a = 1;
do {
  console.log(a);
  a++;
} while(a <= 5);

// Program 2: Print even numbers 2 to 10
let b = 2;
do {
  console.log(b);
  b += 2;
} while(b <= 10);

// Program 3: Print odd numbers 1 to 9
let c = 1;
do {
  console.log(c);
  c += 2;
} while(c < 10);

// Program 4: Print table of 5
let d = 1;
do {
  console.log("5 x " + d + " = " + (5 * d));
  d++;
} while(d <= 10);

// Program 5: Sum of 1 to 5
let e = 1, sum3 = 0;
do {
  sum3 += e;
  e++;
} while(e <= 5);
console.log("Sum: " + sum3);

// Program 6: Loop through array
let animals = ["lion", "tiger", "bear"];
let f = 0;
do {
  console.log(animals[f]);
  f++;
} while(f < animals.length);

// Program 7: Countdown 5 to 1
let g = 5;
do {
  console.log(g);
  g--;
} while(g >= 1);