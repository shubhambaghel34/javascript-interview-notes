function isPalindrome(s) {
    let left = 0;
    let right = s.length - 1;

    // Continue looping while the two pointers
    // have not crossed
   while(left<right){
    if(left[s]  !== right[s]){
        return 0;
    }
    left++;
    right++;
   }
   return 1
}

// Driver code
const s = "abbak";
console.log(isPalindrome(s));