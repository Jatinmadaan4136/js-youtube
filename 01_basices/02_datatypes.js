"use strict"; // Enforces strict mode for better error checking

// alert(3 + 3); // This would work in browsers, not in Node.js

console.log(3 + 3); // Outputs the result of 3 + 3
console.log("Jatin"); // Outputs the string "Jatin"
// Note: It's better to use separate lines for readability

let name = "Jatin"; // String variable
let age = 21; // Number variable
let isLoggedIn = true; // Boolean variable

// Data types in JavaScript:
// number   => Numeric values (up to 2^53)
// bigint   => Large integers
// string   => Text values, wrapped in quotes
// boolean  => true or false
// null     => Standalone value representing "no value"
// undefined=> Variable declared but not assigned
// symbol   => Unique identifiers

console.log(typeof name);      // Outputs: string
console.log(typeof age);       // Outputs: number
console.log(typeof null);      // Outputs: object (this is a known JavaScript quirk)
console.log(typeof undefined); // Outputs: undefined