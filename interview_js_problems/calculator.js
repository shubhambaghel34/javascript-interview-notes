// Problem Statement:
// Implement a Calculator in JavaScript that supports basic arithmetic operations 
// (add, subtract, multiply, divide) and allows method chaining.
//
// Requirements:
// 1. The calculator should allow operations like:
//      new Calculator(10).add(5).subtract(3).multiply(2).equals()
// 2. It should support an alternative static approach where calculations can be 
//    chained without explicitly creating an instance.
// 3. Ensure immutability in one version (returning new objects instead of mutating state) 
//    and method-chaining in another for flexibility.
//
// This demonstrates two design approaches:
// - Class with immutable instances.
// - Static method returning a chainable object (interface).


class Calculator {
    constructor(value = 0) {
        this.value = value
    }
    add = (num) => {
        return new Calculator(this.value + num);
    }
    substract = (num) => {
        return new Calculator(this.value - num);
    }
    multiply = (num) => {
        return new Calculator(this.value * num);
    }
    divide = (num) => {
        return new Calculator(this.value / num);
    }
    equals = () => {
        return this.value;
    }
}

//Immutable Calculator
const result = new Calculator(10).add(5).substract(3).equals()
//console.log(result);//12



// -------------------------------------------------------------

class NewCalculator {

    static start(initialValue = 0) {
        let value = initialValue;

        const operation = {
            add(num) {
                value += num
                return operation;
            },
            substract(num) {
                value -= num;
                return operation;
            },
            multiply(num) {
                value *= num;
                return operation;
            },
            divide(num) {
                value /= num;
                return operation;
            },
            equals() {
                return value;
            }

        }
        return operation;

    }


}
const newcalresult = NewCalculator.start(10).add(4).substract(3).equals()
console.log(newcalresult);//12


