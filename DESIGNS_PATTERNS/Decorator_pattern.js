class Product {
    getDescription() {
      return "Basic Product";
    }
  }
  
  class GiftWrap {
    constructor(product) {
      this.product = product;
    }
  
    getDescription() {
      return `${this.product.getDescription()} + 🎁 Gift Wrap`;
    }
  }
  
  class ExpressDelivery {
    constructor(product) {
      this.product = product;
    }
  
    getDescription() {
      return `${this.product.getDescription()} + 🚀 Express Delivery`;
    }
  }
  
  let item = new Product();
  item = new GiftWrap(item);
  item = new ExpressDelivery(item);
  
  console.log(item.getDescription());
  // Output: Basic Product + 🎁 Gift Wrap + 🚀 Express Delivery
  