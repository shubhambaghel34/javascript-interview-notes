//  Greedy Algorithm
// ------------------------------------------------------
// Layman Explanation:
// Greedy means: at each step, pick the choice that looks best *right now*.
// Example: If you want to cover a distance with minimum coins,
// always pick the largest coin first.
// Sometimes greedy works perfectly, sometimes it doesn’t (depends on problem).
//
// Use Case: Activity selection, interval scheduling, coin change (with certain denominations).
// ------------------------------------------------------

// Example: Minimum number of coins for change (Greedy works for standard denominations like [1,5,10,25])
function minCoins(coins, amount) {
    coins.sort((a, b) => b - a);
    let count = 0;

    for (let coin of coins) {
        while (amount >= coin) {
            amount -= coin;
            count++;
        }
    }
    return count;
}


console.log(minCoins([1, 5, 10, 25], 36)); // 3 → 25 + 10 + 1
