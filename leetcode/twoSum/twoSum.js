/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let num1 = nums[i];
    let num2 = target - num1;
    //check for num2 value in map object is presnet or not
    if (map.has(num2)) {
      return [map.get(num2), i];
    }
    map.set(num1, i);
  }

};
// console.log(twoSum([2, 7, 11, 15],
//   9));



//for sorted array
 //
// let map = new Map();
//     for (let i = 0; i < numbers.length; i++) {
//         let num1=numbers[i];
//   let num2=target - num1; 
//      if (map.has(num2)) {
//  	// index+1 because they asked 1 indexed
//        return [map.get(num2), i+1];
//      } else {
//  		// index+1 here as well
//        map.set(num1, i+1);
//      }
//    }
//    return [];
//




function getSum(arr, targetSum){
  for(let i =0;i<arr.length;i++){
    for(let j=0;j<arr.length;j++){
      if(arr[i]+ arr[j] === targetSum){
        return [i,j]
      }
    }
  }
  return false;
}
console.log(getSum([2, 7, 11, 15],
  9));








function findPairWithEqualSum(arr) {

  const totalSum = arr.reduce((acc, num) => acc + num, 0);
  
  // If the total sum is odd, it's not possible to divide it into two equal parts
  if (totalSum % 2 !== 0) {
      return null;  
  }

  // Calculate the target sum for the pair
  const targetSum = (totalSum / 2);

  // Loop through all pairs of elements to check if their sum equals targetSum
  for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
      
          if (arr[i] + arr[j] === targetSum) {
              return [arr[i], arr[j]]; 
          }
      }
  }

  return null;  
}


const arr2 = [1, 2, 3, 4];
console.log(findPairWithEqualSum(arr2)); 
