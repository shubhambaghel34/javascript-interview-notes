// WeakMap in JavaScript
// ------------------------------------------------------
// 📝 Description:
// A WeakMap is like Map, but keys MUST be objects and are held "weakly".
// If there are no other references, the object key is garbage collected.
// Useful for storing private data for objects.
//
//  Tricks:
// - Keys must be objects (not strings/numbers).
// - No size property, not iterable.
// - Great for caching and hiding internal object data.
// ------------------------------------------------------

let user = { id: 101 };

const weakmap = new WeakMap();
weakmap.set(user, "Sensitive Info");

console.log(weakmap.get(user)); // Sensitive Info
console.log(weakmap.has(user)); // true

user = null; // object is garbage collected
// weakmap entry also disappears automatically
