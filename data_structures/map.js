//  Map in JavaScript
// ------------------------------------------------------
//  Description:
// A Map stores key-value pairs where keys can be ANY type (primitive or object).
// Unlike objects, keys are not restricted to strings.
//
//  Tricks:
// - Maintains insertion order.
// - Can use functions, arrays, objects as keys.
// - Easier iteration than plain objects.
// ------------------------------------------------------

const map = new Map();

// Add key-value pairs
map.set("name", "Alice");
map.set(10, "Number Key");
map.set({ id: 1 }, "Object Key");

// Get values
console.log(map.get("name")); // Alice
console.log(map.get(10)); // Number Key

// Check existence
console.log(map.has("name")); // true

// Size
console.log(map.size); // 3

// Iterate
for (let [key, value] of map) {
  console.log(key, value);
}

// Convert Object → Map
const obj = { a: 1, b: 2 };
const objToMap = new Map(Object.entries(obj));
console.log(objToMap); // Map(2) { 'a' => 1, 'b' => 2 }
