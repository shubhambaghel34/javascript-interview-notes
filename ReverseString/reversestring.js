/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  let left = 0;
  let right = s.length - 1;
  console.log('string', s);
   //check the left is less than right 
  while (left < right) {
    let temp = s[left]; //h
    s[left] = s[right]; //0
    console.log("s-right", s[left]);
    console.log("s-left", s[right]);
    s[right] = temp; //h
    left++; //increment from start
    right--; //decrement from left
  }
  return s;
};

console.log(reverseString(["h", "e", "l", "l", "o"]));