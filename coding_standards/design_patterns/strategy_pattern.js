// 📚 JavaScript — Strategy Pattern Example
// ===========================================
// Definition:
// The Strategy Pattern is a behavioral design pattern that allows you to define
// a family of algorithms (strategies), put each of them in a separate class,
// and make their objects interchangeable.
//
// Instead of embedding multiple payment methods inside one big class with conditionals,
// we delegate the behavior to different strategy classes. This promotes flexibility
// and follows the Open/Closed Principle.

class CreditCardPayment {
  pay(amount) {
    console.log(`Paid ${amount} using Credit Card`);
  }
}

class PayPalPayment {
  pay(amount) {
    console.log(`Paid ${amount} using PayPal`);
  }
}

class PaymentContext {
  constructor(strategy) {
    this.strategy = strategy;
  }

  execute(amount) {
    this.strategy.pay(amount);
  }
}

// Usage Example
const payment = new PaymentContext(new CreditCardPayment());
payment.execute(500); 
// Output: Paid 500 using Credit Card

const payment2 = new PaymentContext(new PayPalPayment());
payment2.execute(300); 
// Output: Paid 300 using PayPal


// ===========================================
// Use Cases of Strategy Pattern
// - Payment methods (Credit Card, PayPal, UPI, Crypto).
// - Sorting algorithms (QuickSort, MergeSort, BubbleSort).
// - Compression algorithms (ZIP, RAR, TAR).
// - Authentication mechanisms (OAuth, JWT, SAML).
// - Different discount or pricing strategies in e-commerce.

// ===========================================
// Pros:
// 1. Avoids large conditional statements (e.g., if/else or switch for strategies).
// 2. Easy to add new strategies without modifying existing code.
// 3. Promotes the Open/Closed Principle (open for extension, closed for modification).
// 4. Strategies can be swapped at runtime for flexibility.
//
// Cons:
// 1. Increases the number of classes (each strategy needs its own class).
// 2. Clients must be aware of different strategies to choose the right one.
// 3. Overhead of creating strategy objects even if some are rarely used.
// ===========================================
