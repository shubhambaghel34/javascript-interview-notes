/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n === 1 || n === 0) return 1 ;
    let first = 1;
    let second = 2;

    for (let i = 3; i <= n; i++) {
        let third = first + second;
        first = second;
        second = third;
      
    }
    return second;
};
// if (n <= 1) return 1;
// return climbStairs(n - 1) + climbStairs(n - 2);

console.log(climbStairs(3));
