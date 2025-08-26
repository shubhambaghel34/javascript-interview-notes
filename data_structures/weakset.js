// WeakSet in JavaScript
// ------------------------------------------------------
//  Description:
// A WeakSet is like Set, but it only stores OBJECTS (not primitives).
// The references are "weak" → if no other reference exists, 
// the object can be garbage collected.
//
// Tricks:
// - Only objects allowed (no numbers/strings).
// - No size property (cannot know how many items).
// - Not iterable (cannot use for..of).
// - Useful for tracking objects without preventing garbage collection.
// ------------------------------------------------------

let obj1 = { id: 1 };
let obj2 = { id: 2 };

const weakset = new WeakSet();
weakset.add(obj1);
weakset.add(obj2);

console.log(weakset.has(obj1)); // true

obj1 = null; // object is eligible for garbage collection
// weakset will no longer hold obj1 internally

// Cannot loop or check size → weak by design
