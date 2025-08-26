// Set in JavaScript
// ------------------------------------------------------
// Description:
// A Set is a collection of unique values (no duplicates allowed).
// It remembers the insertion order. Useful for removing duplicates, lookups.
//
// Tricks:
// - Duplicate values are ignored.
// - Iteration order = insertion order.
// - Can store primitives and object references.
// ------------------------------------------------------

const set = new Set();

// Add values
set.add(1);
set.add(2);
set.add(2); // duplicate ignored
set.add("hello");
set.add({ id: 1 });

// Check existence
console.log(set.has(1)); // true
console.log(set.has(3)); // false

// Size
console.log(set.size); // 4

// Iterate
for (let val of set) {
  console.log(val);
}

// Convert array to unique values
const numbers = [1, 2, 2, 3, 4, 4, 5];
const unique = [...new Set(numbers)];
console.log(unique); // [1,2,3,4,5]
