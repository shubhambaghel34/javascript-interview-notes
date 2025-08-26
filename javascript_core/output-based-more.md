# 📚 JavaScript — Output-based Questions: More Concepts

## 1) IIFE (Immediately Invoked Function Expression)
```javascript
(function () {
    console.log("IIFE runs immediately!");
})();
/*
Output:
IIFE runs immediately!
*/
```

---

## 2) Default Parameters & Scope
```javascript
function testDefault(a = b, b = 5) {
    console.log(a, b);
}
try {
    testDefault();
} catch (e) {
    console.log("Error:", e.message);
}
/*
Output:
Error: Cannot access 'b' before initialization
*/
```

---

## 3) Destructuring with Defaults
```javascript
const [x = 10, y = 20] = [undefined, 5];
console.log(x, y);
/*
Output:
10 5
*/
```

---

## 4) Spread vs Rest Operators
```javascript
function sum(...nums) {
    return nums.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3)); // 6

const arr1 = [1, 2];
const arr2 = [3, 4];
console.log([...arr1, ...arr2]);
/*
Output:
6
[1, 2, 3, 4]
*/
```

---

## 5) Short-circuit Evaluation
```javascript
console.log(0 || "default"); 
console.log("hello" && "world");
/*
Output:
default
world
*/
```

---

## 6) Object.freeze vs const
```javascript
const obj = { a: 1 };
Object.freeze(obj);
obj.a = 2;
console.log(obj.a);
/*
Output:
1
*/
```

---

## 7) Type Coercion Quirks
```javascript
console.log([] + []);       // ""
console.log([] + {});       // "[object Object]"
console.log({} + []);       // "[object Object]"
/*
Output:
""
"[object Object]"
"[object Object]"
*/
```

---

## 8) NaN Comparison
```javascript
console.log(NaN === NaN);          
console.log(Object.is(NaN, NaN));  
/*
Output:
false
true
*/
```

---

## 9) Promise Order (Microtask vs Macrotask)
```javascript
console.log("start");
setTimeout(() => console.log("timeout"), 0);
Promise.resolve().then(() => console.log("promise"));
console.log("end");
/*
Output:
start
end
promise
timeout
*/
```

---

## 10) typeof null
```javascript
console.log(typeof null);
/*
Output:
object
*/
```
