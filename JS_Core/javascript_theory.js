
//   📚 JavaScript var vs let vs const
// ┌─────────┬───────────────────┬────────────────────────────────────┬──────────────────────────────┬──────────────────────────────┐
// │ (index) │ Feature           │ var                                │ let                          │ const                        │
// ├─────────┼───────────────────┼────────────────────────────────────┼──────────────────────────────┼──────────────────────────────┤
// │    0    │ 'Scope'           │ 'Function-scoped'                  │ 'Block-scoped'               │ 'Block-scoped'               │
// │    1    │ 'Hoisting'        │ 'Yes, initialized to undefined'    │ 'Yes, TDZ until initialized' │ 'Yes, TDZ until initialized' │
// │    2    │ 'Re-declaration'  │ 'Allowed'                          │ 'Not allowed'                │ 'Not allowed'                │
// │    3    │ 'Re-assignment'   │ 'Allowed'                          │ 'Allowed'                    │ 'Not allowed (mutable refs OK)' │
// │    4    │ 'Default Value'   │ 'undefined'                        │ 'TDZ until assigned'         │ 'TDZ until assigned'         │
// │    5    │ 'Global Binding'  │ 'Binds to window/globalThis'        │ 'No binding'                 │ 'No binding'                 │
// └─────────┴───────────────────┴────────────────────────────────────┴──────────────────────────────┴──────────────────────────────┘

// 📚 JavaScript Output-based Questions: var vs let vs const

// ===============================
// 1) Scope in Loops
// ===============================
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log("var:", i), 0);
  }
  
  for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log("let:", j), 0);
  }
  /*
  Expected Output:
  var: 3
  var: 3
  var: 3
  let: 0
  let: 1
  let: 2
  
  Theory:
  - var is function-scoped → single i shared by all callbacks.
  - let is block-scoped → each loop iteration has a fresh j.
  */
  
  
  // ===============================
  // 2) Hoisting with var vs let
  // ===============================
  console.log(a);
  var a = 10;
  
  try {
    console.log(b);
  } catch (e) {
    console.log("Error:", e.message);
  }
  let b = 20;
  /*
  Expected Output:
  undefined
  Error: Cannot access 'b' before initialization
  
  Theory:
  - var is hoisted and initialized to undefined.
  - let is hoisted but in Temporal Dead Zone until the declaration.
  */
  
  
  
  // ===============================
  // 3) Redeclaration
  // ===============================
//   var x = 5;
//   var x = 10; // ✅ Allowed
//   console.log(x);
  
//   try {
//     let y = 5;
//     let y = 10; // ❌ Not allowed
//     console.log(y);
//   } catch (e) {
//     console.log("Error:", e.message);
//   }
  /*
  Expected Output:
  10
  Error: Identifier 'y' has already been declared
  
  Theory:
  - var allows redeclaration in the same scope.
  - let and const throw SyntaxError on redeclaration.
  */
  
  
  // ===============================
  // 4) const and Mutation
  // ===============================
  const arr = [1, 2];
  arr.push(3); // ✅ Allowed (mutation)
  console.log(arr);
  
  try {
    arr = [4, 5]; // ❌ Re-assignment not allowed
    console.log(arr);
  } catch (e) {
    console.log("Error:", e.message);
  }
  /*
  Expected Output:
  [1, 2, 3]
  Error: Assignment to constant variable.
  
  Theory:
  - const prevents re-assignment of the variable binding.
  - But it doesn’t make the object/array immutable.
  */
  
  
  // ===============================
  // 5) Global Binding (browser only)
  // ===============================
  var ga = 1;
  let gb = 2;
  
  if (typeof window !== "undefined") { // Browser environment
    console.log(window.ga); // 1
    console.log(window.gb); // undefined
  } else { // Node.js environment
    console.log(globalThis.ga); // 1
    console.log(globalThis.gb); // undefined
  }
  /*
  Expected Output (in browser):
  1
  undefined
  
  Theory:
  - var declared globally becomes a property of window/globalThis in non-module scripts.
  - let and const do not bind to the global object.
  */
  










  
  // 📚 JavaScript Output-based Questions: Closures

// ===============================
// 1) Basic Closure
// ===============================
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
  Expected Output:
  1
  2
  1
  
  Theory:
  - A closure is a function that "remembers" variables from its outer scope even after the outer function has returned.
  - Each call to outer() creates a separate "count" variable in memory.
  - c1 and c2 do not share the same count.
  */
  
  
  // ===============================
  // 2) Closure in Loops (var)
  // ===============================
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
  Expected Output:
  3 3 3
  
  Theory:
  - var is function-scoped, so all pushed functions share the same i.
  - After the loop ends, i = 3 for all closures.
  */
  
  
  // ===============================
  // 3) Closure in Loops (let)
  // ===============================
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
  Expected Output:
  0 1 2
  
  Theory:
  - let is block-scoped; each iteration has its own copy of i.
  - Closures capture different variables for each loop iteration.
  */
  
  
  // ===============================
  // 4) Closure with setTimeout (var)
  // ===============================
  for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log("var timeout:", i), 0);
  }
  /*
  Expected Output:
  var timeout: 3
  var timeout: 3
  var timeout: 3
  
  Theory:
  - Similar to varLoop: all callbacks share same i.
  */
  
  
  // ===============================
  // 5) Closure with setTimeout (let)
  // ===============================
  for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log("let timeout:", i), 0);
  }
  /*
  Expected Output:
  let timeout: 0
  let timeout: 1
  let timeout: 2
  
  Theory:
  - let creates a new i for each iteration.
  */
  
  
  // ===============================
  // 6) Closure for Private Data
  // ===============================
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
  Expected Output:
  150
  120
  120
  
  Theory:
  - Closures can be used to emulate private variables.
  - balance is not directly accessible outside createBankAccount().
  */
  