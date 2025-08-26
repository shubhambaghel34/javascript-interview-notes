// Binary Search Pattern
// ------------------------------------------------------
// 
// Imagine a dictionary. Instead of flipping page by page,
// you open the middle, decide whether your word is before
// or after, and repeat. That’s binary search!
// 
// Use Case: Works on sorted arrays for fast lookups.
// ------------------------------------------------------

function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return mid;
        arr[mid] < target ? left = mid + 1 : right = mid - 1;
    }
    return -1;
}


console.log(binarySearch([1, 3, 5, 7, 9], 5)); // 2
