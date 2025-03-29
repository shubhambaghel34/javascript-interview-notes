function misssingNumber(nums){
    let n = nums.length;
    let sum = n * (n + 1) / 2;
    for (let i = 0; i < n; i++) {
        sum = sum - nums[i];
    }
    return sum;

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

console.log(misssingNumber([1,2,4,5]));




function consecutiveOnes(arr) {
  let count = 0;
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 1) {
      count++;
      max = Math.max(max, count);
    } else {
      count = 0;
    }
  }
  return max;
}

console.log(consecutiveOnes([1, 1, 0, 1, 1, 1, 0, 1, 1]));




function numberAppearOnce(arr){
let xor=0;
for(let i=0;i<arr.length;i++){
    xor= xor ^ arr[i]
}
return xor;
}
console.log(numberAppearOnce([1, 1, 2, 3, 3, 4, 4, 1, 1]));
