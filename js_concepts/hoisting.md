# 📚 JavaScript — var vs let vs const

## Comparison Table

| Feature           | var                                | let                          | const                              |
|-------------------|------------------------------------|------------------------------|------------------------------------|
| Scope             | Function-scoped                    | Block-scoped                 | Block-scoped                       |
| Hoisting          | Yes, initialized to undefined      | Yes, TDZ until initialized   | Yes, TDZ until initialized         |
| Re-declaration    | Allowed                            | Not allowed                  | Not allowed                        |
| Re-assignment     | Allowed                            | Allowed                      | Not allowed (mutable refs OK)      |
| Default Value     | `undefined`                        | TDZ until assigned           | TDZ until assigned                 |
| Global Binding    | Binds to `window/globalThis`       | No binding                   | No binding                         |

---

## 1) Scope in Loops
```javascript
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log("var:", i), 0);
}
  
for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log("let:", j), 0);
}
/*
Output:
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
```

---

## 2) Hoisting with var vs let
```javascript
console.log(a);
var a = 10;

try {
  console.log(b);
} catch (e) {
  console.log("Error:", e.message);
}
let b = 20;
/*
Output:
undefined
Error: Cannot access 'b' before initialization

Theory:
- var is hoisted and initialized to undefined.
- let is hoisted but in Temporal Dead Zone until the declaration.
*/
```

---

## 3) Redeclaration
```javascript
var x = 5;
var x = 10; // Allowed
console.log(x); // 10

try {
  let y = 5;
  let y = 10; // Not allowed
  console.log(y);
} catch (e) {
  console.log("Error:", e.message);
}
/*
Output:
10
Error: Identifier 'y' has already been declared
*/
```

---

## 4) const and Mutation
```javascript
const arr = [1, 2];
arr.push(3); // ✅ Allowed (mutation)
console.log(arr); // [1, 2, 3]

try {
  arr = [4, 5]; // Re-assignment not allowed
} catch (e) {
  console.log("Error:", e.message);
}
/*
Output:
[1, 2, 3]
Error: Assignment to constant variable.
*/
```

---

## 5) Global Binding
```javascript
var ga = 1;
let gb = 2;

if (typeof window !== "undefined") { // Browser
  console.log(window.ga); // 1
  console.log(window.gb); // undefined
} else { // Node.js
  console.log(globalThis.ga); // 1
  console.log(globalThis.gb); // undefined
}
```
---

# 📚 JavaScript — Hoisting (Tricky Output-Based Questions)

## 1) var Hoisting
```javascript
console.log(a);
var a = 10;
/*
Output:
undefined
*/
```

---

## 2) let Hoisting with TDZ
```javascript
try {
  console.log(b);
} catch (e) {
  console.log("Error:", e.message);
}
let b = 20;
/*
Output:
Error: Cannot access 'b' before initialization
*/
```

---

## 3) Function Declaration Hoisting
```javascript
hoistedFunc();
function hoistedFunc() {
  console.log("I am hoisted!");
}
/*
Output:
I am hoisted!
*/
```

---

## 4) Function Expression with var
```javascript
try {
  funcExpr();
} catch (e) {
  console.log("Error:", e.message);
}
var funcExpr = function () {
  console.log("Hello");
};
/*
Output:
Error: funcExpr is not a function
*/
```

---

## 5) Function Expression with let
```javascript
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
*/
```

---

## 6) Multiple var Declarations
```javascript
var x = 1;
function testVar() {
  console.log(x); // ?
  var x = 2;
}
testVar();
/*
Output:
undefined
*/
```

---

## 7) Inner Function Hoisting
```javascript
function outer() {
  console.log(inner()); 
  function inner() {
    return "Inner function hoisted";
  }
}
outer();
/*
Output:
Inner function hoisted
*/
```

---

## 8) var and Function with Same Name
```javascript
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
*/
```

---

## 9) Hoisting in Block Scope
```javascript
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
*/
```

---

## 10) Function Declaration Overriding
```javascript
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
*/
```
