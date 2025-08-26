# 📚 JavaScript — Object References & Copying (Output-based)

## 1) Assignment by Reference
```javascript
const obj1 = { name: "Fullstack" };
const obj2 = obj1; // obj2 references the same object
obj2.name = "Developer";
console.log(obj1.name, obj2.name);
/*
Output:
Developer Developer

Theory:
- Both obj1 and obj2 point to the same object in memory.
- Changing one affects the other.
*/
```

---

## 2) Shallow Copy with Spread Operator
```javascript
const original = { a: 1, b: { c: 2 } };
const copy = { ...original };
copy.b.c = 99;
console.log(original.b.c, copy.b.c);
/*
Output:
99 99

Theory:
- Spread (...) creates a shallow copy.
- Nested objects are still references to the same memory.
*/
```

---

## 3) Deep Copy with JSON Methods
```javascript
const nestedObj = { x: 1, y: { z: 2 } };
const deepCopy = JSON.parse(JSON.stringify(nestedObj));
deepCopy.y.z = 42;
console.log(nestedObj.y.z, deepCopy.y.z);
/*
Output:
2 42

Theory:
- JSON parse/stringify creates a deep copy (but loses functions, undefined, symbols).
- Changes in deepCopy do not affect nestedObj.
*/
```

---

## 4) Object.assign()
```javascript
const objA = { a: 1, b: { c: 2 } };
const objB = Object.assign({}, objA);
objB.b.c = 50;
console.log(objA.b.c, objB.b.c);
/*
Output:
50 50

Theory:
- Object.assign() also performs a shallow copy.
- Nested objects remain linked by reference.
*/
```

---

## 5) Comparing Object References
```javascript
const ref1 = { lang: "JS" };
const ref2 = { lang: "JS" };
const ref3 = ref1;

console.log(ref1 === ref2); // false
console.log(ref1 === ref3); // true
/*
Output:
false
true

Theory:
- Objects are compared by reference, not by value.
- ref1 and ref2 have same content but different memory locations.
*/
```

---

## 6) Array Reference
```javascript
const arr1 = [1, 2, 3];
const arr2 = arr1;
arr2.push(4);
console.log(arr1, arr2);
/*
Output:
[1, 2, 3, 4] [1, 2, 3, 4]

Theory:
- Arrays are objects in JS.
- Assignment copies the reference, not the values.
*/
```

---

## 7) Prevent Modification with Object.freeze()
```javascript
const frozen = Object.freeze({ a: 1, b: 2 });
frozen.a = 99;
console.log(frozen.a);
/*
Output:
1

Theory:
- Object.freeze() prevents adding, removing, or modifying properties.
- It is shallow — nested objects can still change.
*/
```

---

## 8) Prevent Modification with Object.seal()
```javascript
const sealed = Object.seal({ a: 1 });
sealed.a = 2;     // allowed (modifying existing property)
sealed.b = 3;     // ignored (adding new property not allowed)
delete sealed.a;  // ignored
console.log(sealed);
/*
Output:
{ a: 2 }

Theory:
- Object.seal() prevents adding/removing properties but allows modification of existing ones.
*/
```

---

## 9) Copying with structuredClone() (Modern JS)
```javascript
const objClone = { a: 1, b: { c: 2 } };
const newClone = structuredClone(objClone);
newClone.b.c = 77;
console.log(objClone.b.c, newClone.b.c);
/*
Output:
2 77

Theory:
- structuredClone() creates a deep copy.
- Works with nested objects, Dates, Maps, Sets, etc.
*/
```

---

## 10) Mutation Inside Function
```javascript
function mutate(o) {
  o.changed = true;
}
const myObj = {};
mutate(myObj);
console.log(myObj);
/*
Output:
{ changed: true }

Theory:
- Objects are passed by reference (technically, reference by value).
- Modifying inside a function changes the original.
*/
```
