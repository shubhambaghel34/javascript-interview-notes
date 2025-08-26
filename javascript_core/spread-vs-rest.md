# 📚 JavaScript — Spread & Rest Operators

## Definition
- **Spread Operator (`...`)** → Expands elements of an array/object into individual elements.  
- **Rest Operator (`...`)** → Collects multiple elements into an array/object.  

The syntax is the same, but their usage depends on the context.

---

## 1) Spread in Arrays
```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5];
const merged = [...arr1, ...arr2];
console.log(merged);
/*
Output:
[1, 2, 3, 4, 5]
Theory:
- Spread expands arr1 and arr2 into individual elements in the new array.
*/
```

---

## 2) Spread in Objects
```javascript
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const combinedObj = { ...obj1, ...obj2 };
console.log(combinedObj);
/*
Output:
{ a: 1, b: 3, c: 4 }
Theory:
- Spread copies enumerable properties into a new object.
- If keys are the same, later spreads overwrite earlier values.
*/
```

---

## 3) Rest in Function Parameters
```javascript
function sum(...nums) {
  return nums.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3, 4));
/*
Output:
10
Theory:
- Rest gathers all remaining arguments into an array called nums.
*/
```

---

## 4) Rest with Destructuring (Array)
```javascript
const [first, second, ...restNumbers] = [10, 20, 30, 40, 50];
console.log(first, second, restNumbers);
/*
Output:
10 20 [30, 40, 50]
Theory:
- Rest collects remaining elements after destructuring into a new array.
*/
```

---

## 5) Rest with Destructuring (Object)
```javascript
const product = { name: "Laptop", brand: "Dell", price: 50000, stock: 20 };
const { name, ...otherDetails } = product;
console.log(name, otherDetails);
/*
Output:
Laptop { brand: 'Dell', price: 50000, stock: 20 }
Theory:
- Rest collects remaining properties into a new object.
*/
```

---

## 6) Spread for Copying Arrays (Shallow Copy)
```javascript
const originalArr = [1, 2, 3];
const copyArr = [...originalArr];
copyArr.push(4);
console.log(originalArr, copyArr);
/*
Output:
[1, 2, 3] [1, 2, 3, 4]
Theory:
- Spread creates a shallow copy of the array.
- Changes in the copy don't affect the original (for primitives).
*/
```

---

## 7) Spread for Copying Objects (Shallow Copy)
```javascript
const originalObj = { x: 1, y: { z: 2 } };
const copyObj = { ...originalObj };
copyObj.y.z = 99;
console.log(originalObj.y.z, copyObj.y.z);
/*
Output:
99 99
Theory:
- Spread copies nested objects by reference (shallow copy).
*/
```

---

## 8) Spread in Function Calls
```javascript
function multiply(a, b, c) {
  return a * b * c;
}
const nums = [2, 3, 4];
console.log(multiply(...nums));
/*
Output:
24
Theory:
- Spread expands array elements into separate arguments for the function.
*/
```

---

## 9) Rest with Reduce for Multiplication
```javascript
function multiplyAll(...numbers) {
  return numbers.reduce((acc, num) => acc * num, 1);
}
console.log(multiplyAll(2, 3, 4));
/*
Output:
24
Theory:
- Rest collects all arguments, then reduce multiplies them together.
*/
```

---

## 10) Mixing Spread & Rest
```javascript
function demoMix(first, ...rest) {
  console.log("First:", first);
  console.log("Rest:", rest);
}
const data = [10, 20, 30, 40];
demoMix(...data);
/*
Output:
First: 10
Rest: [20, 30, 40]
Theory:
- Spread unpacks data array into arguments.
- Rest gathers remaining arguments into an array.
*/
```
