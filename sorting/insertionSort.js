const numbers = [11, 2, 13, 2, 5, 6, 43, 78, 10, 1];

// function insertionSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     let currentValue = arr[i];
//     console.log("---", currentValue);
//     let j;
//     for (j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
//       console.log("---", arr[j]);
//       arr[j + 1] = arr[j];
//     }
//     arr[j + 1] = currentValue;
//   }
//   return arr;
// }

//Insertion sorting with while loop
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  return arr;
}

console.log(insertionSort(numbers));
