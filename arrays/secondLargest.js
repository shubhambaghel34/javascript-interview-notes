
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
function misssingNumber(arr){
    const n = Math.max(...arr);
    const total = (n * (n + 1)) / 2;
    const sum = arr.reduce((acc, num) => acc + num, 0);
    return total - sum;

}

function misssingNumberXOR(arr){
    let n = Math.max(...arr); // get the max number
    let xor1 = 0, xor2 = 0;

    // XOR all numbers from 1 to n
    for (let i = 1; i <= n; i++) {
        xor1 ^= i;
    }

    // XOR all numbers in the array
    for (let num of arr) {
        xor2 ^= num;
    }

    // The missing number is xor1 ^ xor2
    return xor1 ^ xor2;

}

console.log(misssingNumber(prices));