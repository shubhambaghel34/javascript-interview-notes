// Two Pointers Pattern
// ------------------------------------------------------
//
// Imagine you’re looking at people standing in a line.
// Instead of checking every possible pair (slow),
// you send one friend from the left and another from the right,
// moving them closer until they meet. This way, you find the pair faster.
//
//  Use Case: Works best on sorted arrays (or strings).
// ------------------------------------------------------

function hasPairWithSum(arr, target) {
    let left = 0, right = arr.length - 1;
    arr.sort((a, b) => a - b);

    while (left < right) {
        const sum = arr[left] + arr[right];
        if (sum === target) return true;
        sum < target ? left++ : right--;
    }
    return false;
}

console.log(hasPairWithSum([2, 7, 11, 15], 9)); // true
