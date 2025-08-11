/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
let result=[];
let arraySize=nums.length;
//3
  nums.forEach((num,i)=>{
    result[i]=num;
   
    result[i+arraySize] =num;
     //0+ 3
    //1+3
    //2+3
  })

  return result;

  

  
};

console.log(getConcatenation([1,2,1]))