// L - Liskov Substitution Principle (LSP)
// Problem it solves:
// Sometimes child classes break parent class expectations. 
// For example, if a subclass removes or changes behavior in a way 
// that makes it incompatible with the parent, code relying on the parent may break.
// LSP says: Subclasses must be substitutable for their parent classes without issues.

class Product {
    getPrice() {
      return 100;
    }
  }
  
  class DiscountedProduct extends Product {
    constructor(discountedPrice) {
      super();
      this.discountedPrice = discountedPrice;
    }
  
    getPrice() {
      return this.discountedPrice;
    }
  }
  
  class FreeProduct extends Product {
    getPrice() {
      return 0;
    }
  }
  
  function fetchPrice(product) {
    console.log("Price:", product.getPrice());
  }
  
  // Usage
  const regular = new Product();
  fetchPrice(regular);
  
  const discounted = new DiscountedProduct(50);
  fetchPrice(discounted);
  
  const free = new FreeProduct();
  fetchPrice(free);
  