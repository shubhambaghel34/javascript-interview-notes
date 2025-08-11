
//   📚 JavaScript var vs let vs const
// ┌─────────┬───────────────────┬────────────────────────────────────┬──────────────────────────────┬──────────────────────────────┐
// │ (index) │ Feature           │ var                                │ let                          │ const                        │
// ├─────────┼───────────────────┼────────────────────────────────────┼──────────────────────────────┼──────────────────────────────┤
// │    0    │ 'Scope'           │ 'Function-scoped'                  │ 'Block-scoped'               │ 'Block-scoped'               │
// │    1    │ 'Hoisting'        │ 'Yes, initialized to undefined'    │ 'Yes, TDZ until initialized' │ 'Yes, TDZ until initialized' │
// │    2    │ 'Re-declaration'  │ 'Allowed'                          │ 'Not allowed'                │ 'Not allowed'                │
// │    3    │ 'Re-assignment'   │ 'Allowed'                          │ 'Allowed'                    │ 'Not allowed (mutable refs OK)' │
// │    4    │ 'Default Value'   │ 'undefined'                        │ 'TDZ until assigned'         │ 'TDZ until assigned'         │
// │    5    │ 'Global Binding'  │ 'Binds to window/globalThis'        │ 'No binding'                 │ 'No binding'                 │
// └─────────┴───────────────────┴────────────────────────────────────┴──────────────────────────────┴──────────────────────────────┘

// 📚 JavaScript Output-based Questions: var vs let vs const

// ===============================
// 1) Scope in Loops
// ===============================
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log("var:", i), 0);
  }
  
  for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log("let:", j), 0);
  }
  /*
  Expected Output:
  var: 3
  var: 3
  var: 3
  let: 0
  let: 1
  let: 2
  
  Theory:
  - var is function-scoped → single i shared by all callbacks.
  - let is block-scoped → each loop iteration has a fresh j.
  */
  
  
  // ===============================
  // 2) Hoisting with var vs let
  // ===============================
  // console.log(a);
  // var a = 10;
  
  // try {
  //   console.log(b);
  // } catch (e) {
  //   console.log("Error:", e.message);
  // }
  // let b = 20;
  /*
  Expected Output:
  undefined
  Error: Cannot access 'b' before initialization
  
  Theory:
  - var is hoisted and initialized to undefined.
  - let is hoisted but in Temporal Dead Zone until the declaration.
  */
  
  
  
  // ===============================
  // 3) Redeclaration
  // ===============================
//   var x = 5;
//   var x = 10; //  Allowed
//   console.log(x);
  
//   try {
//     let y = 5;
//     let y = 10; //  Not allowed
//     console.log(y);
//   } catch (e) {
//     console.log("Error:", e.message);
//   }
  /*
  Expected Output:
  10
  Error: Identifier 'y' has already been declared
  
  Theory:
  - var allows redeclaration in the same scope.
  - let and const throw SyntaxError on redeclaration.
  */
  
  
  // ===============================
  // 4) const and Mutation
  // ===============================
  const arr = [1, 2];
  arr.push(3); // ✅ Allowed (mutation)
  console.log(arr);
  
  try {
    arr = [4, 5]; //  Re-assignment not allowed
    console.log(arr);
  } catch (e) {
    console.log("Error:", e.message);
  }
  /*
  Expected Output:
  [1, 2, 3]
  Error: Assignment to constant variable.
  
  Theory:
  - const prevents re-assignment of the variable binding.
  - But it doesn’t make the object/array immutable.
  */
  
  
  // ===============================
  // 5) Global Binding (browser only)
  // ===============================
  var ga = 1;
  let gb = 2;
  
  if (typeof window !== "undefined") { // Browser environment
    console.log(window.ga); // 1
    console.log(window.gb); // undefined
  } else { // Node.js environment
    console.log(globalThis.ga); // 1
    console.log(globalThis.gb); // undefined
  }
  /*
  Expected Output (in browser):
  1
  undefined
  
  Theory:
  - var declared globally becomes a property of window/globalThis in non-module scripts.
  - let and const do not bind to the global object.
  */
  











  // 📚 JavaScript Hoisting — Tricky Output-Based Questions

// ===============================
// 1) var Hoisting
// ===============================
console.log(a);
var a = 10;
/*
Output:
undefined

Theory:
- var is hoisted and initialized to undefined at the top of the scope.
*/


// ===============================
// 2) let Hoisting with TDZ
// ===============================
try {
  console.log(b);
} catch (e) {
  console.log("Error:", e.message);
}
let b = 20;
/*
Output:
Error: Cannot access 'b' before initialization

Theory:
- let is hoisted but in the Temporal Dead Zone until the declaration line.
*/


// ===============================
// 3) Function Declaration Hoisting
// ===============================
hoistedFunc();
function hoistedFunc() {
  console.log("I am hoisted!");
}
/*
Output:
I am hoisted!

Theory:
- Function declarations are fully hoisted along with their body.
*/


// ===============================
// 4) Function Expression with var
// ===============================
try {
  funcExpr(); // TypeError
} catch (e) {
  console.log("Error:", e.message);
}
var funcExpr = function () {
  console.log("Hello");
};
/*
Output:
Error: funcExpr is not a function

Theory:
- var funcExpr is hoisted and initialized to undefined.
- At the time of call, it's still undefined, so calling it as a function throws TypeError.
*/


// ===============================
// 5) Function Expression with let
// ===============================
try {
  funcExprLet();
} catch (e) {
  console.log("Error:", e.message);
}
let funcExprLet = function () {
  console.log("Hi");
};
/*
Output:
Error: Cannot access 'funcExprLet' before initialization

Theory:
- let declarations are in TDZ until executed, so accessing before declaration throws ReferenceError.
*/


// ===============================
// 6) Multiple var Declarations
// ===============================
var x = 1;
function testVar() {
  console.log(x); // ?
  var x = 2;
}
testVar();
/*
Output:
undefined

Theory:
- Inside testVar, var x is hoisted to the top of function scope and initialized to undefined, shadowing outer x.
*/


// ===============================
// 7) Inner Function Hoisting
// ===============================
function outer() {
  console.log(inner()); // Works
  function inner() {
    return "Inner function hoisted";
  }
}
outer();
/*
Output:
Inner function hoisted

Theory:
- Inner function declarations are hoisted to the top of their scope.
*/


// ===============================
// 8) var and Function with Same Name
// ===============================
function test() {
  console.log(typeof foo); // function
  var foo = "bar";
  function foo() {}
  console.log(typeof foo); // string
}
test();
/*
Output:
function
string

Theory:
- Function declarations are hoisted before var declarations.
- Then var foo assigns a string value later.
*/


// ===============================
// 9) Hoisting in Block Scope
// ===============================
{
  console.log(blockVar); // undefined
  var blockVar = 5;

  try {
    console.log(blockLet);
  } catch (e) {
    console.log("Error:", e.message);
  }
  let blockLet = 10;
}
/*
Output:
undefined
Error: Cannot access 'blockLet' before initialization

Theory:
- var is not block-scoped, so hoisted to function/global scope.
- let is block-scoped and in TDZ until initialized.
*/


// ===============================
// 10) Function Declaration Overriding
// ===============================
function duplicate() {
  return 1;
}
console.log(duplicate()); // ?

function duplicate() {
  return 2;
}
console.log(duplicate()); // ?
/*
Output:
2
2

Theory:
- Later function declarations override earlier ones due to hoisting.
*/
