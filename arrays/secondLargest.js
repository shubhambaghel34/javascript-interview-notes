
function secondLargest(nums){
    let first=-Infinity;
    let secondLargest=-Infinity;

    for(let i =0;i<nums.length;i++){
        if(nums[i]>first){
            secondLargest=first;
            first=nums[i];
        }else if (nums[i] < first && nums[i] >secondLargest){
           secondLargest = nums[i];  // Update second if nums[i] is between first and second
        }
    }
    return secondLargest;
}

//console.log(secondLargest(prices));

const prices=[1,2,4,5];
