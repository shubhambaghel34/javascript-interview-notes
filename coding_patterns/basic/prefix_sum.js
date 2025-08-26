// Prefix Sum Pattern
// ------------------------------------------------------
// 
// Imagine a running total scoreboard. Each time you add a number,
// you store the total so far. Later, if you want to know the
// sum between two points, you can just subtract the totals
// instead of recalculating everything.
//
// Use Case: Fast range sum queries in arrays.
// ------------------------------------------------------

function prefixSum(arr) {
    const prefix = [0];
    for (let i = 0; i < arr.length; i++) {
        prefix[i + 1] = prefix[i] + arr[i];
    }
    return prefix;
}


const arr = [1, 2, 3, 4, 5];
const prefix = prefixSum(arr);
console.log(prefix[4] - prefix[1]); // sum of [2,3,4] = 9
