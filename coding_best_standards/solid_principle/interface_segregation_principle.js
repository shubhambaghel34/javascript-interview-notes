// I - Interface Segregation Principle (ISP)
// Problem it solves:
// Large, "fat" interfaces force classes to implement methods they don’t need 
// (e.g., a DigitalProduct shouldn't need a `ship()` method).
// ISP says: Split large interfaces into smaller, specific ones so clients only implement what they use.

class Shippable {
    ship() {
      throw new Error("ship() must be implemented");
    }
  }
  
  class Downloadable {
    download() {
      throw new Error("download() must be implemented");
    }
  }
  
  class PhysicalProduct extends Shippable {
    ship() {
      console.log("Shipping physical product");
    }
  }
  
  class DigitalProduct extends Downloadable {
    download() {
      console.log("Sending download link");
    }
  }
  
  // Usage
  const shirt = new PhysicalProduct();
  shirt.ship();
  
  const ebook = new DigitalProduct();
  ebook.download();
  