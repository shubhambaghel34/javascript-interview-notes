// S - Single Responsibility Principle (SRP)
// Problem it solves:
// When a class has multiple responsibilities (e.g., order handling + payment + notification),
// a change in one responsibility may break or affect the others.
// SRP solves this by ensuring each class has only one reason to change — one responsibility.

class OrderService {
    placeOrder(order) {
      console.log("Order is placed:", order);
    }
  }
  
  // Usage
  const orderService = new OrderService();
  orderService.placeOrder({ id: 1, item: "Shoes" });
  