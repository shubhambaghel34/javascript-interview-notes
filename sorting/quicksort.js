const quickSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }
  //will pivot last element
  let pivot = arr[arr.length - 1];
  //8 -1 =2
  console.log("pivot", pivot);
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
};
console.log(quickSort([8, 9, 1, 10, -7, 8, 6, 2]));
