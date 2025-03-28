randomArray = [7, 1, 5, 3, 6, 4];

function rotateArray(arr) {
  let tmp = arr[0];

  for (let i = 1; i < arr.length; i++) {
    arr[i - 1] = arr[i];
  }
  arr[arr.length - 1] = tmp; // Place the first element at the last position
  return arr;
}

//console.log(rotateArray(randomArray));

function roatateArrayByPlaces(arr, d) {
  let n = arr.length;

  // Handle the case where d > size of array
  d %= n;

  // Reverse the first d elements
  reverse(arr, 0, d - 1);

  // Reverse the remaining n-d elements
  reverse(arr, d, n - 1);

  // Reverse the entire array
  reverse(arr, 0, n - 1);
}

// Function to reverse a portion of the array
function reverse(arr, start, end) {
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}

//console.log(roatateArrayByPlaces(randomArray,3));

const smaplArra = [1, 0, 0, 3, 2, 3, 5, 7, 0];
/***
 * Brute force approach
 */
function moveZeroRight(arr) {
  let temp = [];

  //put all non zero numbers in temp
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      temp.push(arr[i]);
    }
  }
  //push all the temp vlaues in actual arrray
  for (let i = 0; i < temp.length; i++) {
    arr[i] = temp[i];
  }

  //filled remainng values  with zero in actual array
  for (let i = temp.length; i < arr.length; i++) {
    arr[i] = 0;
  }
  return arr;
}

/***
 * optimal approach
 */
function moveZeroRight(arr) {
  let j = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      j = i; //put i into j index if its equal to zero
      break;
    }
  }

  for (i = j + 1; i < arr.length; i++) {
    if (arr[i] !== 0) {
      [arr[i], arr[j]] = [arr[j], arr[i]]; //swap the numbers
      j++;
    }
  }
  return arr;
}

console.log(moveZeroRight(smaplArra));
