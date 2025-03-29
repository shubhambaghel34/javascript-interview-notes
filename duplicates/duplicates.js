var findDuplicate = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] == nums[j]) {
        return nums[i];
      }
    }
  }
  return -1;
};

function removeDuplicates(arr) {
  let result = [];

  // Loop through each element in the array
  for (let i = 0; i < arr.length; i++) {
    // If the element isn't already in the result array, add it
    if (result.indexOf(arr[i]) === -1) {
      result.push(arr[i]);
    }
  }

  return result;
}

function getDuplicatesCount(arr) {
  let count = 0;
  let result = [];

  // Sort the array first to group duplicates together
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    // Check if the current element is the same as the next one
    if (arr[i] === arr[i + 1]) {
      // If not already counted, add it to the result
      if (!result.includes(arr[i])) {
        result.push(arr[i]);
        count++; // Increment the count for each unique duplicate
      }
    }
  }

  return count;
}

const arr = [1, 2, 2, 3, 4, 4, 5];
//console.log(removeDuplicates(arr));
