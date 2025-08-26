// O - Open/Closed Principle (OCP)
// Problem it solves:
// If new requirements force you to modify existing code (like adding new payment methods),
// you risk breaking tested code. OCP says classes should be open for extension 
// (new behavior via inheritance/composition) but closed for modification.

class PaymentStrategy {
    pay(amount) {
      throw new Error("pay() must be implemented");
    }
  }
  
  class CardPayment extends PaymentStrategy {
    pay(amount) {
      console.log(`Paid ${amount} via Card`);
    }
  }
  
  class PaypalPayment extends PaymentStrategy {
    pay(amount) {
      console.log(`Paid ${amount} via PayPal`);
    }
  }
  
  class PaymentService {
    constructor(paymentMethod) {
      this.paymentMethod = paymentMethod;
    }
  
    processPayment(amount) {
      this.paymentMethod.pay(amount);
    }
  }
  
  // Usage
  const cardPayment = new CardPayment();
  const paymentWithCard = new PaymentService(cardPayment);
  paymentWithCard.processPayment(1500);
  
  const paypalPayment = new PaypalPayment();
  const paymentWithPaypal = new PaymentService(paypalPayment);
  paymentWithPaypal.processPayment(1000);
  