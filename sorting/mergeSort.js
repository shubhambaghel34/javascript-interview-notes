const num1 = [11, 2, 13, 2, 5];
const num2 = [1, 6, 43, 78, 10, 1];

//Function to merge two arrays
function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    //check each item of both array and push into results, push lesser value
    if (arr2[j] > arr1[i]) {
      // 1> 11;

      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }

  return results;
}

//console.log(mergeSort([100, 200], [1, 2, 3, 5, 6]));

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2); //divide array from mid or create a midpoint

  let left = mergeSort(arr.slice(0, mid)); // 0 to midpoint of array

  let right = mergeSort(arr.slice(mid)); //slice half after midpoint

  return merge(left, right);
}

console.log(mergeSort([11, 23, 4, 2, 11, 44, 12, 55, 1, 3]));
