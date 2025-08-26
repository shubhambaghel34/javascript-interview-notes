// Divide & Conquer Pattern
// ------------------------------------------------------
// 
// Break a big problem into smaller chunks,
// solve those chunks, then combine results.
// Like cutting a pizza into slices, eating them,
// then putting the slices together in your tummy.
//
// Use Case: Sorting (Merge Sort, Quick Sort).
// ------------------------------------------------------

function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

function merge(left, right) {
    let result = [], i = 0, j = 0;
    while (i < left.length && j < right.length) {
        result.push(left[i] < right[j] ? left[i++] : right[j++]);
    }
    return result.concat(left.slice(i)).concat(right.slice(j));
}


console.log(mergeSort([3, 1, 4, 1, 5, 9])); // [1,1,3,4,5,9]
