// 📚 JavaScript — Decorator Pattern Example
// ===========================================
// Definition:
// The Decorator Pattern allows behavior to be added to individual objects, 
// dynamically and transparently, without affecting the behavior of other objects 
// of the same class.
//
// Instead of modifying the original class, we "wrap" it inside another class
// (a decorator) that extends or modifies its functionality.
// This promotes flexible code composition over rigid inheritance.

class Product {
  getDescription() {
    return "Basic Product";
  }
}

class GiftWrap {
  constructor(product) {
    this.product = product;
  }

  getDescription() {
    return `${this.product.getDescription()} + Gift Wrap`;
  }
}

class ExpressDelivery {
  constructor(product) {
    this.product = product;
  }

  getDescription() {
    return `${this.product.getDescription()} + Express Delivery`;
  }
}

// Usage Example
let item = new Product();
item = new GiftWrap(item);          // Add gift wrapping
item = new ExpressDelivery(item);   // Add express delivery

console.log(item.getDescription());
// Output: Basic Product + Gift Wrap + Express Delivery


// ===========================================
// Use Cases of Decorator Pattern
// - Adding additional features (like logging, caching, authentication, security checks) 
//   without changing the base class.
// - Wrapping UI components (e.g., adding borders, scrollbars, themes dynamically).
// - Extending functionality in a modular way without subclass explosion.
// - Middleware in Express.js is a real-world example of the decorator approach.

// ===========================================
// Pros:
// 1. Open/Closed Principle → Extend behavior without modifying existing code.
// 2. High flexibility → Combine multiple decorators in different orders.
// 3. Avoids subclass explosion → No need to create many child classes for each variation.
// 4. Reusable and composable wrappers.
//
// Cons:
// 1. Can lead to too many small classes/objects, increasing complexity.
// 2. Debugging can be harder since behavior is distributed across multiple decorators.
// 3. Order of decorators matters and may lead to unexpected results if misused.
// ===========================================
