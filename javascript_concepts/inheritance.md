# 📦 JavaScript — Inheritance Example (Product & DiscountedProduct)

## Definition
Inheritance in JavaScript allows a class (child) to acquire properties and methods from another class (parent).  
- Promotes **reusability** and avoids **code duplication**.  
- The child class can also **override** or **extend** functionality of the parent class.  

---

## Parent Class: `Product`
```javascript
class Product {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
  
    getDetails() {
      return `${this.name} - ₹${this.price.toFixed(2)}`;
    }
  
    getFinalPrice() {
      return this.price;
    }
}
```

---

## Child Class: `DiscountedProduct`
```javascript
class DiscountedProduct extends Product {
    constructor(name, price, discountPercent) {
      super(name, price); // Call Product constructor
      this.discountPercent = discountPercent;
    }
  
    // Override method to calculate discounted price
    getFinalPrice() {
      const discountAmount = (this.price * this.discountPercent) / 100;
      return this.price - discountAmount;
    }
  
    // Override method to display more details
    getDetails() {
      return `${this.name} - Original: ₹${this.price.toFixed(2)}, ` +
             `Discount: ${this.discountPercent}%, ` +
             `Final: ₹${this.getFinalPrice().toFixed(2)}`;
    }
}
```

---

## Usage Example
```javascript
const laptop = new Product("Laptop", 60000);
const phone = new DiscountedProduct("Smartphone", 30000, 15);

console.log(laptop.getDetails());
// Output: Laptop - ₹60000.00

console.log(phone.getDetails());
// Output: Smartphone - Original: ₹30000.00, Discount: 15%, Final: ₹25500.00

console.log("Laptop final price:", laptop.getFinalPrice());
// Output: 60000

console.log("Phone final price:", phone.getFinalPrice());
// Output: 25500
```

---

## Theory
1. `Product` is the **base (parent) class** → contains common properties and methods for all products.  
2. `DiscountedProduct` **extends Product** → inherits all Product properties and methods.  
3. `super()` calls the parent class constructor to initialize inherited properties.  
4. `getFinalPrice()` is **overridden** in `DiscountedProduct` to apply discount calculation.  
5. This design avoids repeating the same fields and methods in multiple classes.  
