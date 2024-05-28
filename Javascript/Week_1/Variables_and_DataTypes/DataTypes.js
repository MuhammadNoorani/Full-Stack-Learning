// String, Numbers, Boolean, null, undefined, symbols

const username = 'Muhammad Noorani';
const name = 'Muhammad Noorani';

/* 

The deprecation warning you encountered is specific to TypeScript's type definitions for the DOM (lib.dom.d.ts). This file includes types for standard web APIs, including the name property on the global Window object. When you declare a variable named name in the global scope, it conflicts with this existing property, causing the warning.

To clarify and resolve this issue, here are a few strategies:

1. Avoid Using name in the Global Scope
As previously mentioned, renaming your variable to something else (e.g., username) is the simplest solution. This avoids the conflict entirely.

2. Encapsulate Code in a Function
Encapsulating your code within a function or block scope can also resolve the warning. This ensures that name is treated as a local variable, avoiding the global scope conflict:

4. Suppress the Warning
If you must use name and are aware of the implications, you can suppress the TypeScript warning using @ts-ignore:

The warning arises because name is a global property in the browser environment, and TypeScript highlights this to prevent accidental conflicts. By renaming your variable, encapsulating your code, or understanding the context, you can avoid this issue and write clearer, more maintainable code.


*/


const age = "30";
const rating = 3.8;
const x = null;
const y = undefined;
let z;


console.log(typeof username);
console.log(typeof age);


// Concatenation 
console.log("My name is"+username+"and I am" + age);
// Template string"
console.log(`My name is ${username} and I am age ${age}`);


