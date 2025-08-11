// 📚 JavaScript — The `this` Keyword

// Definition:
// In JavaScript, `this` refers to the object that is executing the current function.
// Its value depends on HOW the function is called, not where it is defined.


// ===============================
// 1) Global Context
// ===============================
console.log(this);
/*
Output (browser): Window {...}
Output (Node.js): {}
Theory:
- In the global scope (non-strict mode, browser), `this` refers to the global object (window).
- In Node.js modules, `this` refers to an empty object.
*/


// ===============================
// 2) Inside a Regular Function (non-strict mode)
function showThis() {
  console.log(this);
}
showThis();
/*
Output (browser, non-strict): Window {...}
Theory:
- In non-strict mode, standalone function calls set `this` to the global object.
*/


// ===============================
// 3) Inside a Regular Function (strict mode)
"use strict";
function strictFunc() {
  console.log(this);
}
strictFunc();
/*
Output:
undefined
Theory:
- In strict mode, `this` remains undefined for standalone functions.
*/


// ===============================
// 4) Inside an Object Method
const obj = {
  name: "Shubham",
  greet() {
    console.log(`Hello, ${this.name}`);
  }
};
obj.greet();
/*
Output:
Hello, Shubham
Theory:
- When a function is called as a method of an object, `this` refers to that object.
*/


// ===============================
// 5) Losing `this` Reference
const obj2 = {
  name: "JS",
  greet() {
    console.log(this.name);
  }
};
const greetFn = obj2.greet;
greetFn(); // ?
/*
Output (non-strict): undefined (or global value)
Theory:
- Assigning method to a variable removes its binding to the object.
- Now it’s just a regular function call → `this` is global (undefined in strict mode).
*/


// ===============================
// 6) Arrow Functions and `this`
const arrowObj = {
  name: "Arrow Example",
  greet: () => {
    console.log(this.name);
  }
};
arrowObj.greet();
/*
Output:
undefined
Theory:
- Arrow functions do NOT have their own `this`.
- They capture `this` from their defining scope (here: global).
*/


// ===============================
// 7) `this` in setTimeout
setTimeout(function () {
  console.log("setTimeout normal:", this);
}, 0);

setTimeout(() => {
  console.log("setTimeout arrow:", this);
}, 0);
/*
Output:
setTimeout normal: (Window or Timeout object depending on env)
setTimeout arrow: (lexical this from outer scope)
Theory:
- Normal function gets its own `this` based on how it's called.
- Arrow function inherits `this` from its surrounding context.
*/


// ===============================
// 8) `this` in Constructor Functions
function Person(name) {
  this.name = name;
}
const p = new Person("Shubham");
console.log(p.name);
/*
Output:
Shubham
Theory:
- In constructor calls with `new`, `this` refers to the newly created object.
*/


// ===============================
// 9) `this` in Classes
class User {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`Hi, ${this.name}`);
  }
}
const u = new User("Sinha");
u.greet();
/*
Output:
Hi, Sinha
Theory:
- In class methods, `this` refers to the instance object.
*/


// ===============================
// 10) Explicit Binding with call, apply, bind
function intro(lang) {
  console.log(`${this.name} codes in ${lang}`);
}
const dev = { name: "Shubham" };

intro.call(dev, "JavaScript"); // Call with arg list
intro.apply(dev, ["Python"]); // Call with arg array
const boundIntro = intro.bind(dev, "Java");
boundIntro();
/*
Output:
Shubham codes in JavaScript
Shubham codes in Python
Shubham codes in Java
Theory:
- call: invoke immediately with arguments list
- apply: invoke immediately with arguments array
- bind: returns a new function with bound this
*/
