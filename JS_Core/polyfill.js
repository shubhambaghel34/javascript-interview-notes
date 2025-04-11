const demoArr = [2, 3, 1, 5, 6, 11, 10]
//**
//PolyFill for myMap method


Array.prototype.myMap = function (cb) {
    const updatedArray = [];
    for (let i = 0; i < this.length; i++) {
        updatedArray.push(cb(this[i], i, this))

    }
    return updatedArray;
}

demoArr.myMap((arr) => console.log(arr));

//**
//PolyFill for myFilter method
//
Array.prototype.MyFilter = function (cb, context) {
    const updatedArray = [];
    for (let i = 0; i < this.length; i++) {
        if (cb.call(context, this[i], i, this)) {
            updatedArray.push(this[i])
        }

    }
    return updatedArray;
}


demoArr.MyFilter((ele) => ele > 4);



//**
//PolyFill for reduce method
//
Array.prototype.MyReduce = function (cb, initialvalue) {
    let acc = initialvalue;

    for (let i = 0; i < this.length; i++) {
        acc = acc ? cb(acc, this[i], i, this) : this[i];
    }
    return acc;
}


const t = demoArr.MyReduce((acc, curr) => {
    return acc + curr
}, 0)



//**
//PolyFill for call method
//
let nameObj = {
    name: "Tony"
}

let PrintName = {
    name: "steve",
    sayHi: function (age) {
        console.log(this.name + " age is " + age);
    }
}

Object.prototype.MyCall = function (bindObj, ...args) {
    bindObj.myMethod = this;

    bindObj.myMethod(...args);

}
PrintName.sayHi.MyCall(nameObj, 42);


//**
//PolyFill for apply method
//
Object.prototype.MyApply = function (bindObj, args) {
    bindObj.myMethod = this;

    bindObj.myMethod(...args);

}
PrintName.sayHi.MyApply(nameObj, [42]);

//**
//PolyFill for bind method
//
Object.prototype.MyBind = function (bindObj) {

    // Here "this" will be sayHi function
    bindObj.myMethod = this;
    return function () {
        bindObj.myMethod();
    }
}
let HiFun = PrintName.sayHi.MyBind(nameObj);
HiFun();

