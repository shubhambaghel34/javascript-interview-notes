// D - Dependency Inversion Principle (DIP)
// Problem it solves:
// High-level modules (like services) often depend directly on low-level modules (like MongoDB).
// This creates tight coupling — if DB changes, service breaks.
// DIP says: Both should depend on abstractions (interfaces). 
// This makes it easy to swap dependencies (MongoDB → SQL) without changing high-level code.

class OrderRepository {
    save(order) {
      throw new Error("save() must be implemented");
    }
  }
  
  class MongoDbRepository extends OrderRepository {
    save(order) {
      console.log("Order saved in MongoDB:", order);
    }
  }
  
  class SqlDbRepository extends OrderRepository {
    save(order) {
      console.log("Order saved in SQL DB:", order);
    }
  }
  
  class OrderService {
    constructor(orderRepository) {
      this.orderRepository = orderRepository;
    }
  
    createOrder(order) {
      console.log("Order created");
      this.orderRepository.save(order);
    }
  }
  
  // Usage
  const mongoRepo = new MongoDbRepository();
  const service1 = new OrderService(mongoRepo);
  service1.createOrder({ id: 1, item: "Product10" });
  
  const sqlRepo = new SqlDbRepository();
  const service2 = new OrderService(sqlRepo);
  service2.createOrder({ id: 2, item: "Phone" });
  