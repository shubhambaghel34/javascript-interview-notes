//A customer places an order → different payment methods (Card, PayPal) are supported → the system logs the event and sends a confirmation.

//S-Singles responsibility principle
class OrderService {
    constructor() {
    }
    placeOrder(order) {
        console.log("order is placed", order);
    }
}

/************************************************************************************************************/
/****
 * 
 * Open closed principle
 */
class Payment {
    processPayment(type, amount) {
        if (type === "card") {
            console.log(`Paid amount ${amount} using card`);
        } else if (type === "paypal") {
            console.log(`Paid ${amount} using Paypal`);
        }
    }
}


class PaymentStrategy {
    pay(amount) {
        throw new Error("pay() must be implemted with");
    }
}

//Implemented in class
class PaymentService {
    constructor(paymentMethod) {
        this.paymentMethod = paymentMethod;
    }

    processPayment(amount) {
        this.paymentMethod.pay(amount);
    }

}

class CardPayment extends PaymentStrategy {
    pay(amount) {
        console.log(`Paid amount${amount} via Card`)
    }
}

class PaypalPayment extends PaymentStrategy {
    pay(amount) {
        console.log(`Paid amount${amount} via PayPal`)
    }
}


/***Usage***/
const cardPayment = new CardPayment();
const paymentWithCard = new PaymentService(cardPayment);
paymentWithCard.processPayment(1500); //  Paid 100 via Card









/**********************************************************************************************************/

/**
 * Liskov Substitution Principle (LSP)
 * Child class should have to ability to replace objects of ParentClass(in short parent class replaceable with child class object)
 */

//Base class
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

function fetchPrice(productType) {
    console.log("Price", productType.getPrice())

}

const regular = new Product();
fetchPrice(regular);

const discountedProduct = new DiscountedProduct();
fetchPrice(discountedProduct);


/****************************************************************************************************************** */






/**********
 * 
 * 
 * Interface Segregation Principle(ISP)
 *
 * 
 **********/

// class Product{
//     ship(){
//         throw new Error('Not Implemented')
//     }

//     download(){
//         throw new Error('Not Implemented')
//     }
// }


// class DigitalProduct extends Product{
//     // ship(){
//     //     throw new Error("Digital product doesn't need shipping");
//     // }
//     download() {
//         console.log("💾 Download link sent to customer");
//     }
// }


// class PhysicalProduct extends Product {
//     ship() {
//         console.log("🚚 Shipping physical product");
//     }

//     // download() {
//     //     throw new Error('Not Implemented')
//     // }
// }


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
        console.log("🚚 Shipping physical product");
    }
}

class DigitalProduct extends Downloadable {
    download() {
        console.log("💾 Sending download link");
    }
}


const shirt = new PhysicalProduct();
shirt.ship(); // Shipping physical product


/******************************************************************************************* */



/**********
 * 
 * 
 * Dependency  Inverson Principle(DIP)
 * High-level modules should not depend on low-level modules.
 * 
 **********/

class MongoDb {
    save(data) {
        console.log('Order saved for MongDB', data);
    }

}

class OrderService {
    constructor() {
        this.db = new MongoDb();
    }
    createOrder(order) {
        this.db.save(order);
    }
}


const service = new OrderService();
service.createOrder({ id: 1, item: 'product1' })

/*****************Solution ******************/


class OrderRepository {
    save(order) {
        throw new Error("save() must be implmented");

    }
}

class MongoDbRepository extends OrderRepository {
    save(order) {
        console.log('Order saved for MongoDB', order);
    }
}

class SqlDbRepository extends OrderRepository {
    save(order) {
        console.log('Order saved for SqlDb', order);
    }
}

class OrderService {
    constructor(orderRepository) {
        this.orderRepository = orderRepository;
    }

    createOrder(order) {
        console.log("✅ Order created");
        this.orderRepository.save(order)
    }
}

const mongoRepo = new MongoDbRepository();

const service1 = new OrderService(mongoRepo);
service1.createOrder({ id: 1, item: "Product10" });


//const sqlRepo = new SqlDbRepository();
// const service2 = new OrderService(sqlRepo);
// service2.createOrder({ id: 2, item: "Phone" });