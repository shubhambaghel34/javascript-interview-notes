/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  let updatedArr = [];

  // Loop through the string/array in reverse order
  for (let i = s.length - 1; i >= 0; i--) { 
      updatedArr.push(s[i]);  // Add each character to updatedArr
  }

  return updatedArr;  // Return the reversed array
};

console.log(reverseString(["h", "e", "l", "l", "o"]));