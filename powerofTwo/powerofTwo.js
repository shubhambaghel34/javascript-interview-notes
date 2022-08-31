/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
   if (n === 0) {
    return false;
  } else if (n === 1) {
    return true;
  } else if (n % 2 !== 0) {
    return false;
  }
  return isPowerOfTwo(n / 2);
    
};
console.log(isPowerOfTwo(16));