#  JavaScript — Polyfills

## 🔹 What is a Polyfill?
A **polyfill** is a piece of code (usually JavaScript) that **implements modern features in older environments** that do not natively support them.  
Think of it as a "fallback implementation" that makes sure new JavaScript features work in older browsers or environments.  

- It checks if a feature exists → if **yes**, use the native one.  
- If **not**, it defines a custom implementation.  

Example: Adding `Array.prototype.map` in browsers that don’t support it.

---

## 🔹 Why Polyfills are Useful
1. **Backward compatibility** → Run modern JS code on older browsers (IE, legacy versions).  
2. **Standard compliance** → Use latest ES6+ features safely.  
3. **Interview questions** → Commonly asked: implement `map`, `filter`, `reduce`, `call`, `apply`, `bind`.  
4. **Performance** → Ensures code won’t break across different environments.  

---

## 🔹 Use Cases
- **Array methods**: `map`, `filter`, `reduce`, `forEach`, `find`.  
- **Object methods**: `Object.assign`, `Object.create`.  
- **Function methods**: `call`, `apply`, `bind`.  
- **Promises & fetch**: Adding support in older browsers. 



#  JavaScript — Polyfills Implementation

## 1) Polyfill for `map()` → `myMap`
```javascript
const demoArr = [2, 3, 1, 5, 6, 11, 10];

Array.prototype.myMap = function (cb) {
    const updatedArray = [];
    for (let i = 0; i < this.length; i++) {
        updatedArray.push(cb(this[i], i, this));
    }
    return updatedArray;
}

demoArr.myMap((arr) => console.log(arr));
```
**Theory:**  
- `map()` iterates through each element and transforms it using the callback.  
- Returns a new array of transformed values.  

---

## 2) Polyfill for `filter()` → `MyFilter`
```javascript
Array.prototype.MyFilter = function (cb, context) {
    const updatedArray = [];
    for (let i = 0; i < this.length; i++) {
        if (cb.call(context, this[i], i, this)) {
            updatedArray.push(this[i]);
        }
    }
    return updatedArray;
}

demoArr.MyFilter((ele) => ele > 4);
```
**Theory:**  
- `filter()` iterates through each element and checks the condition.  
- Returns a new array with only elements that satisfy the condition.  

---

## 3) Polyfill for `reduce()` → `MyReduce`
```javascript
Array.prototype.MyReduce = function (cb, initialvalue) {
    let acc = initialvalue;
    for (let i = 0; i < this.length; i++) {
        acc = acc ? cb(acc, this[i], i, this) : this[i];
    }
    return acc;
}

const t = demoArr.MyReduce((acc, curr) => acc + curr, 0);
```
**Theory:**  
- `reduce()` applies a function against an accumulator and each element.  
- Returns a single aggregated result.  

---

## 4) Polyfill for `call()` → `MyCall`
```javascript
let nameObj = { name: "Tony" };
let PrintName = {
    name: "Steve",
    sayHi: function (age) {
        console.log(this.name + " age is " + age);
    }
};

Object.prototype.MyCall = function (bindObj, ...args) {
    bindObj.myMethod = this;
    bindObj.myMethod(...args);
}

PrintName.sayHi.MyCall(nameObj, 42);
```
**Theory:**  
- `call()` calls a function with a given `this` value and arguments provided individually.  

---

## 5) Polyfill for `apply()` → `MyApply`
```javascript
Object.prototype.MyApply = function (bindObj, args) {
    bindObj.myMethod = this;
    bindObj.myMethod(...args);
}

PrintName.sayHi.MyApply(nameObj, [42]);
```
**Theory:**  
- `apply()` is similar to `call()` but takes arguments as an array.  

---

## 6) Polyfill for `bind()` → `MyBind`
```javascript
Object.prototype.MyBind = function (bindObj) {
    bindObj.myMethod = this;
    return function () {
        bindObj.myMethod();
    }
}

let HiFun = PrintName.sayHi.MyBind(nameObj);
HiFun();
```
**Theory:**  
- `bind()` creates a new function with a bound `this`.  
- Useful for preserving context in callbacks.  
