class OrderSubject {
    constructor() {
      this.observers = [];
    }
  
    subscribe(service) {
      this.observers.push(service);
    }
  
    placeOrder(order) {
      console.log("✅ Order placed:", order);
      this.observers.forEach(obs => obs.notify(order));
    }
  }
  
  class EmailService {
    notify(order) {
      console.log("📧 Email sent for order:", order.id);
    }
  }
  
  class InventoryService {
    notify(order) {
      console.log("📦 Inventory updated for:", order.item);
    }
  }
  
  const orderSystem = new OrderSubject();
  orderSystem.subscribe(new EmailService());
  orderSystem.subscribe(new InventoryService());
  
  orderSystem.placeOrder({ id: 1, item: "Phone" });
  