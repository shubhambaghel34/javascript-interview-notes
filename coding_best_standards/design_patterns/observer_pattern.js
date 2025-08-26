// 📚 JavaScript — Observer Pattern Example
// ===========================================
// Definition:
// The Observer Pattern is a behavioral design pattern where an object (the Subject)
// maintains a list of dependents (Observers) and notifies them automatically 
// of any state changes, usually by calling one of their methods.
//
// It establishes a one-to-many relationship between Subject and Observers. 
// When the Subject changes, all its observers are updated automatically.

class OrderSubject {
  constructor() {
    this.observers = [];
  }

  // Register an observer
  subscribe(service) {
    this.observers.push(service);
  }

  // Notify all observers about an event
  placeOrder(order) {
    console.log("Order placed:", order);
    this.observers.forEach(obs => obs.notify(order));
  }
}

class EmailService {
  notify(order) {
    console.log("Email sent for order:", order.id);
  }
}

class InventoryService {
  notify(order) {
    console.log("Inventory updated for:", order.item);
  }
}

// Usage Example
const orderSystem = new OrderSubject();
orderSystem.subscribe(new EmailService());
orderSystem.subscribe(new InventoryService());

orderSystem.placeOrder({ id: 1, item: "Phone" });
// Output:
// Order placed: { id: 1, item: 'Phone' }
// Email sent for order: 1
// Inventory updated for: Phone


// ===========================================
// Use Cases of Observer Pattern
// - Event-driven systems (e.g., DOM event listeners).
// - Notification systems (e.g., when a user posts a comment, 
//   notify followers, update feeds, send emails).
// - Distributed systems where multiple services need to react 
//   to changes in shared data (like order updates).
// - Publish/Subscribe systems (e.g., Kafka, SNS, message queues).

// ===========================================
// Pros:
// 1. Decouples Subject and Observers → the Subject doesn't need to know 
//    details about observers, only that they have a notify method.
// 2. Easy to add new observers without changing the subject's code.
// 3. Promotes a modular and scalable event-driven architecture.
//
// Cons:
// 1. Too many observers can cause performance issues.
// 2. Debugging and tracing notifications can become harder 
//    since many objects may react to the same event.
// 3. Risk of memory leaks if observers are not unsubscribed properly.
// ===========================================
