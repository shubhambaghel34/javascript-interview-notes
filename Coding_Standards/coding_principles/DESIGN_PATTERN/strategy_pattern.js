class CreditCardPayment {
    pay(amount) {
      console.log(`💳 Paid ${amount} using Credit Card`);
    }
  }
  
  class PayPalPayment {
    pay(amount) {
      console.log(`💸 Paid ${amount} using PayPal`);
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
  
  const payment = new PaymentContext(new CreditCardPayment());
  payment.execute(500);
  
  const payment2 = new PaymentContext(new PayPalPayment());
  payment2.execute(300);
  