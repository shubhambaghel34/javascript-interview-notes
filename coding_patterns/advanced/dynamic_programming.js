// Dynamic Programming (DP)
// ------------------------------------------------------
// Layman Explanation:
// Think of climbing stairs. You can take 1 or 2 steps.
// Instead of recalculating ways from scratch every time (slow recursion),
// store results of smaller problems and reuse them (memoization).
// DP = divide big problems into smaller overlapping problems + store results.
//
// Use Case: Fibonacci numbers, climbing stairs, coin change.
// ------------------------------------------------------

// Example: Climbing Stairs (like Fibonacci)
function climbStairs(n) {
    if (n <= 2) return n;
    const dp = [0, 1, 2]; // base cases
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
}


console.log(climbStairs(5)); // 8
