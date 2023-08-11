const numbers = [11, 23, 4, 2, 21, 31, 40, 7, 5];

//bubble sort where we need to swap and check adjucent element
const bubbleSort = (arr) => {
  let noSwpas;
  //will start from end of array
  for (let i = arr.length; i > 0; i--) {
    noSwpas = true;
    console.log("i", arr[i], i);
    for (let j = 0; j < i - 1; j++) {
      // console.log("j", j);
      console.log("j", arr[j], j);
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwpas = false;
      }
    }
    if (noSwpas) break;
  }
  return arr;
};

const swap = (arr, idx1, idx2) =>
  ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

console.log(bubbleSort(numbers));
