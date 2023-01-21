// Original Solution
function binarySearch(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while(arr[middle] !== elem && start <= end) {
        if(elem < arr[middle]){
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    if(arr[middle] === elem){
        return middle;
    }
    return -1;
}

// Refactored Version
function binarySearch(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while(arr[middle] !== elem && start <= end) {
        if(elem < arr[middle]) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === elem ? middle : -1;
}

binarySearch([2,5,6,9,13,15,28,30], 103)


//
function recursiveBinarySearch(n, arr) {
    let mid = Math.floor(arr.length / 2);
  if (arr.length === 1 && arr[0] != n) {
      return -1;
    }
    if (n === arr[mid]) {
      return mid;
    } else if (n < arr[mid]) {
      return recursiveBinarySearch(n, arr.slice(0, mid));
    } else if (n > arr[mid]) {
      return recursiveBinarySearch(n, arr.slice(mid));
    }
  }
  console.log(recursiveBinarySearch(10,[2,5,6,9,103,15,28,30]));