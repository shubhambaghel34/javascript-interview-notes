class DigitalProduct {
    deliver() {
      console.log("🔗 Download link sent.");
    }
  }
  
  class PhysicalProduct {
    deliver() {
      console.log("📦 Shipping label printed.");
    }
  }
  
  class ProductFactory {
    static create(type) {
      if (type === "digital") return new DigitalProduct();
      if (type === "physical") return new PhysicalProduct();
      throw new Error("Invalid product type");
    }
  }
  
  const product1 = ProductFactory.create("digital");
  product1.deliver();
  
  const product2 = ProductFactory.create("physical");
  product2.deliver();
  