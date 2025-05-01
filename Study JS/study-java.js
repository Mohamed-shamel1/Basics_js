/**
 * JavaScript Fundamentals Tutorial
 * A comprehensive guide to JavaScript basics for beginners
 *
 * This file covers:
 * - Variables and Data Types
 * - String Operations
 * - Conditionals
 * - Arrays and Array Methods
 * - Loops
 * - Functions
 * - Objects
 * - Higher Order Functions (map, filter, reduce)
 */

// ===============================================
// SECTION 1: VARIABLES AND DATA TYPES
// ===============================================

// Variables using var, let, and const
var name = "John Doe"; // String variable
console.log("Name: " + name); // String concatenation

// Template Literals (Modern string interpolation)
let firstName = "Shamel";
let lastName = "Mohamed";
console.log(`Full Name: ${firstName} ${lastName}`); // Template Literals with backticks

// Basic conditionals
let age = 25;
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

// Password validation example
let password = "123456";
if (password.length < 8) {
  console.log("Password is too short.");
} else {
  console.log("Password is valid.");
}

// Multi-branch conditional example (grading system)
let score = 85;
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else if (score >= 60) {
  console.log("Grade: D");
} else {
  console.log("Grade: F");
}

// Template Literals examples
let userName = "John";
let userAge = 30;
let expiryYear = 2025;
console.log(
  `User Name: ${userName}, Age: ${userAge}, Expiry Year: ${expiryYear}`
);

// Complex Template Literals with HTML
let title = "Studying JavaScript";
let description = "This is a simple example of using template literals";
let html = `<div class="container">
    <h1>${title}</h1>
    <p>${description}.</p>
    <p>Welcome to the<strong> JavaScript </strong> study program!</p>
    <p>JavaScript is a versatile programming language.</p>
</div>`;
document.write(html);

// ===============================================
// SECTION 2: OPERATORS
// ===============================================

// Arithmetic Operators
console.log(10 + 5); // Addition: 15
console.log(10 - 5); // Subtraction: 5
console.log(10 * 5); // Multiplication: 50
console.log(10 / 5); // Division: 2
console.log(10 % 3); // Modulus (Remainder): 1
console.log(10 ** 2); // Exponentiation (Power): 100

// Increment and Decrement Operators
let a = 5;
console.log(a++); // Postfix increment (returns 5, then a becomes 6)
console.log(a); // 6
console.log(++a); // Prefix increment (increments to 7, then returns 7)
console.log(a--); // Postfix decrement (returns 7, then a becomes 6)
console.log(a); // 6
console.log(--a); // Prefix decrement (decrements to 5, then returns 5)

// Assignment Operators
let x = 10; // Assignment
x += 5; // Add and assign (x = x + 5) -> 15
x -= 3; // Subtract and assign (x = x - 3) -> 12
x *= 2; // Multiply and assign (x = x * 2) -> 24
x /= 4; // Divide and assign (x = x / 4) -> 6
x %= 3; // Modulus and assign (x = x % 3) -> 0
x **= 2; // Exponentiation and assign (x = x ** 2) -> 0

// Comparison Operators
console.log(10 > 5); // Greater than: true
console.log(10 < 5); // Less than: false
console.log(10 >= 5); // Greater than or equal to: true
console.log(10 <= 5); // Less than or equal to: false
console.log(10 == 5); // Equal to: false
console.log(10 != 5); // Not equal to: true

// Logical Operators
console.log(true && true); // Logical AND: true
console.log(true || false); // Logical OR: true
console.log(!true); // Logical NOT: false

// Bitwise Operators
console.log(5 & 3); // Bitwise AND: 1
document.write("<br>");
document.write(5 | 3); // Bitwise OR: 7

// ===============================================
// SECTION 3: NUMBER METHODS
// ===============================================

let num = 10.566667;
console.log(num.toFixed(2)); // Rounds to 2 decimal places: 10.57
console.log(num.toPrecision(3)); // Sets precision to 3 digits: 10.6
console.log(Number.isInteger(num)); // Checks if number is an integer: false
console.log(Number.isNaN(num)); // Checks if value is NaN: false
console.log(parseInt(num)); // Converts to integer: 10
console.log(parseFloat(num)); // Converts to float: 10.566667
console.log(num.toString()); // Converts to string: "10.566667"

// ===============================================
// SECTION 4: STRING METHODS
// ===============================================

let str = "Hello,Web World!";
console.log(str.length); // Length of the string: 17
console.log(str[0]); // First character: "H"
console.log(str[5]); // Character at index 5: ","
console.log(str.charAt(0)); // First character: "H"
console.log(str.trim()); // Remove whitespace from both sides
console.log(str.toUpperCase()); // Convert to uppercase: "HELLO,WEB WORLD!"
console.log(str.toLowerCase()); // Convert to lowercase: "hello,web world!"
console.log(str.slice(2, 6)); // Extract substring from index 2 to 5: "llo,"
console.log(str.substring(2, 6)); // Extract substring from index 2 to 5: "llo,"
console.log(str.indexOf("Web", 0)); // Find index of "Web" starting from position 0: 6

// ===============================================
// SECTION 5: CONDITIONALS
// ===============================================

let name1 = "John";
let gender = "male";

// Traditional if-else
if (gender === "male") {
  document.write("Hello Mr. ");
} else {
  document.write("Hello Ms. ");
}
document.write("<br>");

// Conditional (Ternary) Operator: condition ? if_true : if_false
gender === "male" ? document.write("Hello Mr. ") : document.write("Hello Ms. ");
document.write("<br>");

// Storing ternary result in a variable
let result = gender === "male" ? "Hello Mr. " : "Hello Ms. ";
document.write(result);
document.write("<br>");

// Using ternary inside template literals
document.write(`Hello ${gender === "male" ? "Mr." : "Ms."} ${name1}`);

// ===============================================
// SECTION 6: ARRAYS
// ===============================================

let myFriends = [
  "Ahmed",
  "Mohamed",
  "Ali",
  "Sayed",
  ["Shamel", "Marwan", "Ali"],
];

console.log(myFriends[0]); // First element: "Ahmed"
console.log(myFriends[1][3]); // Fourth character of second element: "a"
console.log(myFriends.length); // Length of the array: 5
console.log(myFriends[myFriends.length - 1]); // Last element: ["Shamel", "Marwan", "Ali"]
console.log(myFriends.indexOf("Mohamed")); // Index of "Mohamed": 1
console.log(myFriends[4]); // Nested array: ["Shamel", "Marwan", "Ali"]
console.log(myFriends[4][0]); // First element of nested array: "Shamel"

// Modifying array elements
myFriends[4][0] = "Mohamed"; // Change first element of nested array
console.log(myFriends[4]); // Modified nested array: ["Mohamed", "Marwan", "Ali"]
console.log(myFriends.length); // Length remains: 5

// Adding elements
myFriends[7] = "Ahmed"; // Add element at index 7 (creates empty slots)
console.log(myFriends.length); // New length: 8
console.log(myFriends[7]); // "Ahmed"

// Add element at the end
myFriends[myFriends.length] = "Ahmed";
console.log(myFriends);

// Array Methods
// unshift() - Add element to beginning
myFriends.unshift("Ahmed");
console.log(myFriends.length); // Length: 9
console.log(myFriends);

// shift() - Remove first element
myFriends.shift();
console.log(myFriends);

// pop() - Remove last element
myFriends.pop();
console.log(myFriends);

// push() - Add element to end
myFriends.push("Ahmed");
console.log(myFriends);

// splice() - Add/remove elements
myFriends.splice(2, 0, "Ahmed"); // Add "Ahmed" at index 2
console.log(myFriends);

// Search Methods
console.log(myFriends.includes("Ahmed")); // Check if "Ahmed" exists: true
console.log(myFriends.indexOf("Ahmed")); // Find first index of "Ahmed"
console.log(myFriends.lastIndexOf("Ahmed")); // Find last index of "Ahmed"

// Sorting Arrays
let numbers = [5, "Mohamed", "10", 2, 3, 8, 1, 4];
console.log(numbers);
console.log(numbers.sort()); // Sort array (sorts as strings by default)
console.log(numbers.reverse()); // Reverse array order

// Concatenating Arrays
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = arr1.concat(arr2); // Combine arrays
console.log(arr3); // [1, 2, 3, 4, 5, 6]

// Join Method
console.log(arr3.join(", ")); // Join elements with comma and space: "1, 2, 3, 4, 5, 6"
console.log(arr3.join(" | ")); // Join with pipe: "1 | 2 | 3 | 4 | 5 | 6"

// ===============================================
// SECTION 7: LOOPS
// ===============================================

// For Loop
for (let i = 0; i < 5; i++) {
  console.log(i); // 0, 1, 2, 3, 4
}

// While Loop
let i = 0;
while (i < 5) {
  console.log(i); // 0, 1, 2, 3, 4
  i++;
}

// Array Filtering Example
let task = [1, 2, 3, "Mohamed", 4, 5, 6, "Ahmed", 7, 8, 9, "Ali", "123"];
let onlyNumbers = []; // Will contain only numbers
let onlyStrings = []; // Will contain only strings

for (let i = 0; i < task.length; i++) {
  if (typeof task[i] === "number") {
    onlyNumbers.push(task[i]); // Add numbers to numbers array
  } else {
    onlyStrings.push(task[i]); // Add strings to strings array
  }
}

console.log(onlyNumbers); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(onlyStrings); // ["Mohamed", "Ahmed", "Ali", "123"]

// Nested Loops Example
let cars = ["BMW", "Mercedes", "Audi", "Toyota", "Honda"];
let colors = ["red", "blue", "green", "yellow", "black"];
let years = [2020, 2021, 2022, 2023, 2024];

for (let i = 0; i < cars.length; i++) {
  console.log("#".repeat(15));
  console.log(`Car: ${cars[i]}`);
  console.log("#".repeat(15));

  console.log("Colors:");
  for (let j = 0; j < colors.length; j++) {
    console.log(`- ${colors[j]}`);
  }

  console.log("Years:");
  for (let k = 0; k < years.length; k++) {
    console.log(`- ${years[k]}`);
  }
}

// Loop Control - Break, Continue
let products = ["keyboard", "mouse", "monitor", "printer", "scanner"];
let colorItems = ["red", 1, 3, "blue", "green", 9, "yellow", "black"];

// Break example
for (let i = 0; i < products.length; i++) {
  if (products[i] === "monitor") {
    break; // Exit the loop when "monitor" is found
  }
  console.log(products[i]); // Prints only "keyboard" and "mouse"
}

// Continue example
for (let i = 0; i < colorItems.length; i++) {
  if (typeof colorItems[i] === "number") {
    continue; // Skip numbers and continue to next iteration
  }
  console.log(colorItems[i]); // Prints only "red", "blue", "green", "yellow", "black"
}

// Labeled Loops
let products1 = [
  "keyboard",
  "mouse",
  "monitor",
  "printer",
  "scanner",
  "monitor",
];
let colors1 = ["red", "blue", "green", "yellow", "black"];

mainloop: for (let i = 0; i < products1.length; i++) {
  console.log(products1[i]);

  nestedloop: for (let j = 0; j < colors1.length; j++) {
    console.log(colors1[j]);

    if (products1[i] === "green") {
      console.log("Found green color, exiting the loop.");
      break mainloop; // Exit the outer loop
    }
  }
}

outerLoop: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (j === 2) {
      break outerLoop; // Break the outer loop
    }
    console.log(`i=${i}, j=${j}`);
  }
}

// Loops Practice - Product Display
let sumProducts = ["keyboard", "mouse", "pen"];
let count = 3;
let sumColors = ["red", "blue", "green", "yellow", "black"];

document.write(`<h1>Show ${count} Products</h1>`);
for (let i = 0; i < count; i++) {
  document.write(`<h1>Product ${i + 1}: ${sumProducts[i]}</h1>`);
  for (let j = 0; j < sumColors.length; j++) {
    document.write(`<p>Color ${j + 1}: ${sumColors[j]}</p>`);
  }
}

// Practical Exercise: Admin and Employee Filtering
let myAdmins = ["Ahmed", "Osama", "Sayed"];
let myEmployees = [
  "Amgad",
  "Samah",
  "Ameer",
  "Omar",
  "Othman",
  "Amany",
  "Samia",
  "Shamel",
];

let count1 = 0;
document.write(`<h1>We have ${myAdmins.length} Admins</h1>`);
document.write(`<h2>The admin 1 is ${myAdmins[0]}</h2>`);

// Filtering employees starting with 'A'
for (const element of myEmployees) {
  if (element.charAt(0) === "A" || element.charAt(0) === "a") {
    count1++;
    document.write(`<p>The employee ${count1} is ${element}</p>`);
  }
}

document.write(`<hr>`);
count1 = 0;
document.write(`<h2>The admin 2 is ${myAdmins[1]}</h2>`);

// Filtering employees starting with 'O'
for (let i = 0; i < myEmployees.length; i++) {
  if (myEmployees[i].charAt(0) === "O" || myEmployees[i].charAt(0) === "o") {
    count1++;
    document.write(`<p>The employee ${count1} is ${myEmployees[i]}</p>`);
  }
}

document.write(`<hr>`);
count1 = 0;
document.write(`<h2>The admin 3 is ${myAdmins[2]}</h2>`);

// Filtering employees starting with 'S'
for (let i = 0; i < myEmployees.length; i++) {
  if (myEmployees[i].charAt(0) === "S" || myEmployees[i].charAt(0) === "s") {
    count1++;
    document.write(`<p>The employee ${count1} is ${myEmployees[i]}</p>`);
  }
}

// ===============================================
// SECTION 8: FUNCTIONS
// ===============================================

// Function Declaration
function say(name) {
  console.log("Hello " + name);
}
say("Shamel");

// Function with Return Value
function add(a, b) {
  return a + b; // Return the sum to use elsewhere
}
console.log(add(5, 10)); // 15

// Arrow Function
const add1 = (a, b) => a + b; // Simplified function syntax with arrow
console.log(add1(5, 10)); // 15

// More complex arrow function example (GCD calculation)
let gcdFunction = (a, b) => {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};
console.log(gcdFunction(48, 18)); // 6

// Variable Scope
let global1 = 1;
var global2 = 2;
console.log(global1); // 1
console.log(global2); // 2

function show() {
  let global1 = 3; // Local variable - shadows the global
  var global2 = 4; // Local variable - shadows the global
  console.log(global1); // 3
  console.log(global2); // 4
}
show();

// Lexical Scope
function parent() {
  let z = 1;
  function child() {
    let z = 2; // Local variable shadows parent's z
    console.log(z); // 2
  }
  child();
}
parent();

// Function Challenge - Rest Parameters
let names = function (...names) {
  return `string: ${names.join("],[ ")}=>done`; // Join array elements
};

let names1 = names(
  "ahmed",
  "mohamed",
  "ali",
  "sayed",
  "shamel",
  "marwan",
  "amgad",
  "samer",
  "sami",
  "samer"
);
console.log(names1);
// Note: The ... before parameter means you can pass unlimited arguments that will be collected as an array

// ===============================================
// SECTION 9: HIGHER ORDER FUNCTIONS
// ===============================================

// Map Method - transforms each array element
let numbersArr = [1, 2, 3, 4, 5];
let squared = numbersArr.map((num) => num * num); // Square each number
console.log(squared); // [1, 4, 9, 16, 25]

// Map method with traditional function
let numbers1 = [1, 2, 3, 4, 5];
let squared1 = numbers1.map(function (num) {
  return num * num; // Square each number
});
console.log(squared1); // [1, 4, 9, 16, 25]

// Practice: Case swapping
let swapcase = "ShAmEl MoHaMeD";
let swapcase1 = swapcase
  .split("") // Convert string to array
  .map(function (char) {
    if (char === char.toUpperCase()) {
      return char.toLowerCase();
    }
    return char.toUpperCase();
  })
  .join(""); // Convert array back to string
console.log(swapcase1); // shAmEl mOhAmEd

// Practice: Inverting numbers
let invertedNumbers = [1, -2, 3, -4, 5, -6, 7, -8, 9];
let invertedResult = invertedNumbers.map(function (num) {
  if (num < 0) {
    return -num; // Return positive value
  }
  return -num; // Return negative value
});
console.log(invertedResult); // [-1, 2, -3, 4, -5, 6, -7, 8, -9]

// Alternative way with shorter code
let invertedNumbers1 = [1, -2, 3, -4, 5, -6, 7, -8, 9];
let invertedResult1 = invertedNumbers1.map((num) => num * -1); // Multiply each by -1
console.log(invertedResult1); // [-1, 2, -3, 4, -5, 6, -7, 8, -9]

// Filter characters from string using map
let ignoreNum = "ahk5346sefkjjsndvkldj53853537";
let filteredChars = ignoreNum.split("").map(function (char) {
  if (char >= "0" && char <= "9") {
    return ""; // Ignore numbers
  }
  return char; // Keep the character
});
filteredChars = filteredChars.join("");
console.log(filteredChars);

// Filter Method - creates a new array with elements that pass a test
let ignoreNum1 = ignoreNum.split("").filter(function (char) {
  if (char >= "0" && char <= "9") {
    return false; // Filter out numbers
  }
  return true; // Keep non-numbers
});
ignoreNum1 = ignoreNum1.join("");
console.log(ignoreNum1); // "ahksefkjjsndvkldj"

/* Map vs Filter:
   - Map transforms elements, keeping array length the same
   - Filter removes elements, potentially changing array length
   - Map focuses on transformation, Filter focuses on selection
   - Filter creates a new array, Map can modify the existing array
*/

// Reduce Method - reduces array to a single value
let numbers2 = [1, 2, 3, 4, 5];
let sum = numbers2.reduce(function (
  accumulator,
  currentValue,
  currentIndex,
  array
) {
  console.log(`accumulator: ${accumulator},
     currentValue: ${currentValue},
     currentIndex: ${currentIndex},
     array: ${array}`);
  console.log("__________________________");

  return accumulator + currentValue; // Sum the numbers
});
console.log(sum); // 15

// ForEach Method - performs an action on each element
const buttons = document.querySelectorAll(".myButton");
let clicked = 0;

buttons.forEach(function (button, index) {
  button.addEventListener("click", function () {
    console.log(`Button ${index + 1} clicked`);
    clicked++;

    if (clicked === 1) {
      button.style.backgroundColor = "green";
      button.style.color = "white";
    } else if (clicked === 2) {
      button.style.backgroundColor = "";
      button.style.color = "";
      clicked = 0; // Reset counter
    }
  });
});

// ===============================================
// SECTION 10: OBJECTS
// ===============================================

// Object Literal
let user = {
  name: "ahmed",
  age: 25,
  sayHello: function () {
    return `Hello `;
  },
};

console.log(user.name); // "ahmed"
console.log(user.age); // 25
console.log(user.sayHello()); // "Hello "

// Dot Notation vs Bracket Notation
let myVariable = "name";
let user1 = {
  name: "ahmed",
  age: 25,
  sayHello: function () {
    return `Hello `;
  },
  "user-name": "ahmed", // Property with special character requires bracket notation
};

console.log(user1.name); // "ahmed" - dot notation
console.log(user1.age); // 25 - dot notation
console.log(user1[myVariable]); // "ahmed" - dynamic property access using variable
console.log(user1.sayHello()); // "Hello "
console.log(user1["user-name"]); // "ahmed" - bracket notation for hyphenated property
console.log(user1["name"]); // "ahmed" - bracket notation works for regular properties too

// Nested Objects
let info = {
  name: "shamel",
  age: 21,
  skills: ["html", "css", "js"],
  available: true,
  addresses: {
    morocco: "morocco",
    Egypt: {
      one: "cairo",
      two: "Giza",
    },
  },
  checkAvailable: function () {
    if (info.available === true) {
      return "available for work";
    }
    return "not available for work";
  },
};

console.log(info.name); // "shamel"
console.log(info.age); // 21
console.log(info.skills); // ["html", "css", "js"]
console.log(info.skills[0]); // "html"
console.log(info.available); // true
console.log(info.addresses.morocco); // "morocco"
console.log(info.addresses.Egypt.one); // "cairo"
console.log(info["addresses"].Egypt.one); // "cairo" - mixing notation styles
console.log(info.checkAvailable()); // "available for work"

// Object Methods

// Adding properties to an empty object
let empty = {};
empty.name = "ahmed";
empty.age = 25;
empty["address"] = "cairo";
empty["phone"] = "0123456789";
console.log(empty); // {name: "ahmed", age: 25, address: "cairo", phone: "0123456789"}

// Creating object with constructor
let empty1 = new Object();
empty1.name = "ahmed";
empty1.age = 25;
empty1["address"] = "cairo";
empty1["phone"] = "0123456789";
console.log(empty1);

// "this" keyword in different contexts
// Global scope
console.log(this); // Window object in browser or global object in Node.js

// "this" in object method
let user2 = {
  name: "ahmed",
  age: 25,
  sayHello: function () {
    return `Hello ${this.name}`; // "this" refers to the current object (user2)
  },
};
console.log(user2.sayHello()); // "Hello ahmed"

// Object.assign() Method - Merging objects
let obj1 = {
  prop1: 1,
  method1: function () {
    return this.prop1;
  },
};

let obj2 = {
  prop2: 2,
  method2: function () {
    return this.prop2;
  },
};

// Create a new object by merging obj1 and obj2
let finalObj = Object.assign({}, obj1, obj2);
console.log(finalObj); // {prop1: 1, method1: ƒ, prop2: 2, method2: ƒ}
// Note: If properties overlap, the last object's properties will override earlier ones

// End of JavaScript fundamentals tutorial
// This tutorial covers the basics of JavaScript, including variables, data types, functions, and more.