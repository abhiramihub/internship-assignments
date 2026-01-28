/*
Assignment 5 – Practical Question 4
Topic: Events (Keyboard and Mouse)
Description: Examples of keyboard and mouse events in JavaScript.
*/

console.log("=== EVENTS EXAMPLES ===");

// 1️⃣ Key press event (keyboard)
document.addEventListener("keydown", function(event) {
  console.log("Key pressed: " + event.key);
});

// 2️⃣ Mouse click event
document.addEventListener("click", function(event) {
  console.log("Mouse clicked at X:" + event.clientX + " Y:" + event.clientY);
});

// 3️⃣ Mouse over an element
let box = document.createElement("div");
box.textContent = "Hover over me!";
box.style.width = "200px";
box.style.height = "50px";
box.style.backgroundColor = "lightblue";
box.style.textAlign = "center";
box.style.lineHeight = "50px";
box.style.margin = "20px";
document.body.appendChild(box);

box.addEventListener("mouseover", function() {
  console.log("Mouse is over the box");
});

// 4️⃣ Mouse out event
box.addEventListener("mouseout", function() {
  console.log("Mouse left the box");
});