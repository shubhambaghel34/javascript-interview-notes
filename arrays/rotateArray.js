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
  //push all the temp values in actual arrray
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


const moveZeroRight = (nums) => {
  let right = 0; // Points to the next available position for a non-zero element

  // Loop through the array with the `left` pointer
  for (let left = 0; left < nums.length; left++) {
    if (nums[left] !== 0) { // If the current element is non-zero
      nums[right] = nums[left]; // Place the non-zero element at `right`
      if (left !== right) { // Don't set 0 if it's the same index
        nums[left] = 0; // Set the original position to 0
      }
      right++; // Move `right` to the next position
    }
  }

  return nums; // Return the updated array
};

console.log(moveZeroRight(smaplArra));

var removeElement = function(nums, val) {
  let right = 0;
  
  for (let left = 0; left < nums.length; left++) {
      if (nums[left] !== val) {
          nums[right] = nums[left];
          right++;
      }
  }
  
  return right;
};
console.log(removeElement([3, 2, 2, 3], 3)); // Output: 2
