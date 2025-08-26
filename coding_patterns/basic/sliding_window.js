// Sliding Window Pattern
// ------------------------------------------------------
// 
// Think of a bus window moving along the road — at any point,
// you can only see a small portion. Instead of recalculating
// everything from scratch, just slide the window one step
// and update the result. Much faster!
//
// Use Case: Best for substring/subarray problems (max sum, averages).
// ------------------------------------------------------

function maxSubarraySum(arr, k) {
    let maxSum = 0, windowSum = 0;

    for (let i = 0; i < k; i++) {
        windowSum += arr[i];
    }
    maxSum = windowSum;

    for (let i = k; i < arr.length; i++) {
        windowSum += arr[i] - arr[i - k];
        maxSum = Math.max(maxSum, windowSum);
    }
    return maxSum;
}


console.log(maxSubarraySum([2, 1, 5, 1, 3, 2], 3)); // 9
