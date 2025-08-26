# 📚 JavaScript — Output-based Questions: Closures

## 1) Basic Closure
```javascript
function outer() {
    let count = 0;
    return function inner() {
      count++;
      return count;
    };
}

const c1 = outer();
const c2 = outer();

console.log(c1()); // ?
console.log(c1()); // ?
console.log(c2()); // ?
/*
Output:
1
2
1

Theory:
- A closure is a function that "remembers" variables from its outer scope even after the outer function has returned.
- Each call to outer() creates a separate "count" variable in memory.
- c1 and c2 do not share the same count.
*/
```

---

## 2) Closure in Loops (var)
```javascript
function varLoop() {
    var funcs = [];
    for (var i = 0; i < 3; i++) {
      funcs.push(function() {
        return i;
      });
    }
    return funcs;
}

const varFuncs = varLoop();
console.log(varFuncs[0](), varFuncs[1](), varFuncs[2]());
/*
Output:
3 3 3

Theory:
- var is function-scoped, so all pushed functions share the same i.
- After the loop ends, i = 3 for all closures.
*/
```

---

## 3) Closure in Loops (let)
```javascript
function letLoop() {
    var funcs = [];
    for (let i = 0; i < 3; i++) {
      funcs.push(function() {
        return i;
      });
    }
    return funcs;
}

const letFuncs = letLoop();
console.log(letFuncs[0](), letFuncs[1](), letFuncs[2]());
/*
Output:
0 1 2

Theory:
- let is block-scoped; each iteration has its own copy of i.
- Closures capture different variables for each loop iteration.
*/
```

---

## 4) Closure with setTimeout (var)
```javascript
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log("var timeout:", i), 0);
}
/*
Output:
var timeout: 3
var timeout: 3
var timeout: 3

Theory:
- Similar to varLoop: all callbacks share same i.
*/
```

---

## 5) Closure with setTimeout (let)
```javascript
for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log("let timeout:", i), 0);
}
/*
Output:
let timeout: 0
let timeout: 1
let timeout: 2

Theory:
- let creates a new i for each iteration.
*/
```

---

## 6) Closure for Private Data
```javascript
function createBankAccount(initialBalance) {
    let balance = initialBalance;
    return {
      deposit(amount) {
        balance += amount;
        return balance;
      },
      withdraw(amount) {
        balance -= amount;
        return balance;
      },
      getBalance() {
        return balance;
      }
    };
}

const account = createBankAccount(100);
console.log(account.deposit(50));   // ?
console.log(account.withdraw(30));  // ?
console.log(account.getBalance());  // ?
/*
Output:
150
120
120

Theory:
- Closures can be used to emulate private variables.
- balance is not directly accessible outside createBankAccount().
*/
```
