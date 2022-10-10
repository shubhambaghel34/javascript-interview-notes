/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let map = new Map();
  for(let i=0;i<nums.length;i++){
  let num1=nums[i];
  let num2=target - num1; 
    //check for num2 value in map object is presnet or not
       if(map.has(num2)){
         return [map.get(num2),i];
       }
    map.set(num1,i);
  }
  
};
 console.log(twoSum([2,7,11,15],
9));



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


