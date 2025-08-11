// Shallow Copy vs Deep Copy in JavaScript

// Definition:
// Shallow Copy → Copies only the first level of an object or array.
//                Nested objects/arrays are still referenced (shared).
// Deep Copy    → Copies all levels, creating new references for nested structures.


// Comparison Table:
/*
| Feature                | Shallow Copy                              | Deep Copy                              |
|------------------------|-------------------------------------------|-----------------------------------------|
| Copies first level     | Yes                                       | Yes                                    |
| Copies nested levels   | No (references remain shared)             | Yes                                    |
| Performance            | Faster                                    | Slower                                 |
| Memory usage           | Lower                                     | Higher                                 |
| Common Methods         | Object.assign(), Spread (...)             | JSON.parse(JSON.stringify()), structuredClone(), libraries like Lodash |
*/


// 1) Shallow Copy Example
const originalShallow = { a: 1, b: { c: 2 } };

// Using spread operator (shallow copy)
const shallowCopy = { ...originalShallow };
shallowCopy.b.c = 99;

console.log("Original:", originalShallow); // { a: 1, b: { c: 99 } }
console.log("Copy:", shallowCopy);         // { a: 1, b: { c: 99 } }
/*
Theory:
- Spread copies only top-level properties.
- Nested object b is still the same reference in memory.
*/


// 2) Deep Copy Example (JSON method)
const originalDeep = { a: 1, b: { c: 2 } };

// Using JSON methods (deep copy)
const deepCopy = JSON.parse(JSON.stringify(originalDeep));
deepCopy.b.c = 99;

console.log("Original:", originalDeep); // { a: 1, b: { c: 2 } }
console.log("Copy:", deepCopy);         // { a: 1, b: { c: 99 } }
/*
Theory:
- JSON.parse(JSON.stringify(...)) creates a new object with no shared references.
- Limitation: Doesn't handle functions, undefined, symbols, Dates, Maps, Sets.
*/


// 3) Deep Copy Example (structuredClone - Modern JS)
const structuredOriginal = { a: 1, b: { c: 2 } };

const structuredCopy = structuredClone(structuredOriginal);
structuredCopy.b.c = 123;

console.log("Original:", structuredOriginal); // { a: 1, b: { c: 2 } }
console.log("Copy:", structuredCopy);         // { a: 1, b: { c: 123 } }
/*
Theory:
- structuredClone() deep-copies objects, arrays, Maps, Sets, Dates, etc.
- Does not support functions or class instances.
*/


// 4) Real-World Impact Example
const cartItem = { id: 1, details: { name: "Laptop", price: 60000 } };

// Shallow copy → modifying nested property changes original
const shallowCart = { ...cartItem };
shallowCart.details.price = 55000;
console.log("Original cart after shallow copy change:", cartItem.details.price); // 55000

// Deep copy → modifying nested property doesn't affect original
const deepCart = structuredClone(cartItem);
deepCart.details.price = 50000;
console.log("Original cart after deep copy change:", cartItem.details.price); // 55000
