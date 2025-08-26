// 📚 JavaScript — Factory Pattern Example
// ===========================================
// Definition:
// The Factory Pattern is a creational design pattern that provides an interface 
// for creating objects, but allows subclasses or a dedicated factory method 
// to decide which class to instantiate.
//
// Instead of directly using `new` everywhere in the codebase, 
// we delegate object creation to a factory. 
// This makes the code more modular, reusable, and easier to maintain.

class DigitalProduct {
  deliver() {
    console.log("Download link sent.");
  }
}

class PhysicalProduct {
  deliver() {
    console.log("Shipping label printed.");
  }
}

class ProductFactory {
  static create(type) {
    if (type === "digital") return new DigitalProduct();
    if (type === "physical") return new PhysicalProduct();
    throw new Error("Invalid product type");
  }
}

// Usage Example
const product1 = ProductFactory.create("digital");
product1.deliver(); // Output: Download link sent.

const product2 = ProductFactory.create("physical");
product2.deliver(); // Output: Shipping label printed.


// ===========================================
// Use Cases of Factory Pattern
// - When object creation logic is complex or depends on dynamic conditions.
// - To manage families of related objects (e.g., different product types, 
//   payment methods, or user roles).
// - Useful in libraries/frameworks to create objects without exposing 
//   the creation logic to the client.

// ===========================================
// Pros:
// 1. Encapsulates object creation logic in one place (centralized).
// 2. Simplifies client code (no need to know which class to instantiate).
// 3. Makes code more maintainable and extensible (easy to add new product types).
// 4. Promotes loose coupling (clients depend on factory, not concrete classes).
//
// Cons:
// 1. Can introduce unnecessary complexity if simple `new` calls are sufficient.
// 2. May hide dependencies, making the code harder to trace/debug.
// 3. Overuse can lead to many factory classes, increasing maintenance burden.
// ===========================================
