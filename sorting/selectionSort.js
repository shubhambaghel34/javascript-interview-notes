const numbers = [11, 23, 4, 2, 21, 31, 40, 7, 5];

const swap = (arr, idx1, idx2) =>
  ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

//selectionSort where we will take lowest and compare with next element
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    //set first element as lowest
    var lowest = i;
    //start with next index of j i.e j+1
    for (let j = i + 1; j < arr.length; j++) {
      //check if lowest value is greater than next if yes then swap it with lowest
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }
    if (i !== lowest) swap(arr, i, lowest);
  }
  return arr;
}

console.log(selectionSort([11, 23, 4, 2, 21, 31, 40, 7, 5]));
