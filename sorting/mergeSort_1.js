function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}

//function to merge
function merge(leftarr, rigtarr) {
  const sortArr = [];
  while (leftarr.length && rigtarr.length) {
    if (leftarr[0] <= rigtarr[0]) {
      sortArr.push(leftarr.shift());
    } else {
      sortArr.push(rigtarr.shift());
    }
  }
  return [...sortArr, ...leftarr, ...rigtarr];
}

console.log(mergeSort([1, 10, 2, -6, 8, 3, 22]));
