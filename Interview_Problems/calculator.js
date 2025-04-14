
class Calculator{
    constructor(value =0){
        this.value=value
    }
    add=(num)=>{
        return new Calculator(this.value + num);
    }
    substract=(num)=>{
        return new Calculator(this.value - num);
    }
    multiply=(num)=>{
        return new Calculator(this.value * num);
    }
    divide=(num)=>{
        return new Calculator(this.value / num);
    }
    equals=()=>{
        return this.value;
    }
}

const result= new Calculator(10).add(5).substract(3).equals()
//console.log(result);




class NewCalculator{

    static start(initialValue=0){
     let value=initialValue;
    
    const operation={
    add(num){
        value+=num
        return operation;
    },
    substract(num){
        value-=num;
        return operation;
    },
    multiply(num){
        value*=num;
        return operation;
    },
    divide(num){
        value/=num;
        return operation;
    },
    equals(){
        return value;
    }

    }
    return operation;
    
    }


}
const newcalresult= NewCalculator.start(10).add(4).substract(3).equals()
console.log(newcalresult);


