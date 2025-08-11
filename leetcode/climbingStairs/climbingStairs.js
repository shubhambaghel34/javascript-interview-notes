/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n === 1) {
    return 1
  }
  else if (n === 2) {
    return 2
  }
  let waystoClimb;
  let waystoClimb1 = 1;
  let waystoClimb2 = 2;
  let i = 1;
  while (n - 1 > i) {

    waystoClimb = waystoClimb2 + waystoClimb1;
    waystoClimb1 = waystoClimb2;//2
    console.log('waystoClimb1', waystoClimb1);//2
    waystoClimb2 = waystoClimb;
    console.log('waystoClimb2', waystoClimb2);//3
    console.log('waystoClimb', waystoClimb);//3
    i++;
  }


  return waystoClimb;



};
/*
 n 1 2 3 4

waystoClimb 1 2 3 5
*/

console.log(climbStairs(4));
