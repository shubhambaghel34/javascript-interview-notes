// Kadane’s Algorithm (Maximum Subarray Sum)
// ------------------------------------------------------
// Layman Explanation:
// Imagine walking on a road where sometimes you gain coins (positive numbers) 
// and sometimes you lose coins (negative numbers).
// The trick is to keep track of the maximum coins you can carry without restarting every time.
// Kadane’s Algorithm keeps a running sum and resets when it goes negative.
//
// Use Case: Find the maximum sum of any contiguous subarray in O(n).
// ------------------------------------------------------

function maxSubArray(nums) {
    let maxSum = nums[0];
    let currentSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
}


console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6 → subarray [4, -1, 2, 1]
