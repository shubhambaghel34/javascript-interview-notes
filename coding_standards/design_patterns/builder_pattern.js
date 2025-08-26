// 📚 JavaScript — Builder Pattern Example (E-commerce Domain)
// ===========================================================
// Definition:
// The Builder Pattern is a creational design pattern that lets you 
// construct complex objects step by step. 
//
// Instead of having a large constructor with many parameters (which can get confusing),
// we use a builder that provides methods to set properties incrementally,
// and then finally build the object.
//
// It’s especially useful when creating objects with lots of optional properties.

// Product Class
class Product {
    constructor(builder) {
      this.name = builder.name;
      this.price = builder.price;
      this.category = builder.category;
      this.discount = builder.discount;
      this.warranty = builder.warranty;
      this.giftWrap = builder.giftWrap;
    }
  
    getDetails() {
      return `Product: ${this.name}, Price: ₹${this.price}, Category: ${this.category}, ` +
             `Discount: ${this.discount}%, Warranty: ${this.warranty} yrs, GiftWrap: ${this.giftWrap}`;
    }
  }
  
  // Builder Class
  class ProductBuilder {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
  
    setCategory(category) {
      this.category = category;
      return this;
    }
  
    setDiscount(discount) {
      this.discount = discount;
      return this;
    }
  
    setWarranty(years) {
      this.warranty = years;
      return this;
    }
  
    setGiftWrap(giftWrap) {
      this.giftWrap = giftWrap;
      return this;
    }
  
    build() {
      return new Product(this);
    }
  }
  
  // Usage Example
  const product1 = new ProductBuilder("Laptop", 60000)
    .setCategory("Electronics")
    .setDiscount(10)
    .setWarranty(2)
    .setGiftWrap(true)
    .build();
  
  const product2 = new ProductBuilder("Shoes", 3000)
    .setCategory("Footwear")
    .setDiscount(5)
    .build();
  
  console.log(product1.getDetails());
  // Output: Product: Laptop, Price: ₹60000, Category: Electronics, Discount: 10%, Warranty: 2 yrs, GiftWrap: true
  
  console.log(product2.getDetails());
  // Output: Product: Shoes, Price: ₹3000, Category: Footwear, Discount: 5%, Warranty: undefined yrs, GiftWrap: undefined
  
  
  // ===========================================================
  // Use Cases of Builder Pattern
  // - Creating products with many optional attributes (like in e-commerce).
  // - Building complex configuration objects (e.g., AWS SDK clients, DB connections).
  // - Constructing UI components with optional styling/props.
  // - When constructors have too many arguments (Telescoping constructor problem).
  
  // ===========================================================
  // Pros:
  // 1. Makes object creation more readable and flexible.
  // 2. Handles complex objects with many optional parameters gracefully.
  // 3. Promotes immutability — once built, the object can be treated as read-only.
  // 4. Follows the Single Responsibility Principle (separates construction from representation).
  //
  // Cons:
  // 1. Requires writing extra Builder classes (increases boilerplate).
  // 2. Can be overkill for simple objects.
  // ===========================================================
  