
// ===============================
// 1) Currying in JavaScript
// ===============================
// Currying is the process of transforming a function that takes multiple arguments into a sequence of functions, each taking a single argument.
// It helps in function reusability and partial application of arguments.


function multiply(a) {
  return function(b) {
    return function(c) {
      return a * b * c;
    };
  };
}

console.log(multiply(2)(3)(4)); // 24