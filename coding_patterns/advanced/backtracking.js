// Backtracking Pattern
// ------------------------------------------------------
// 
// It’s like exploring a maze. You try one path —
// if it doesn’t work, you backtrack and try another.
// Repeat until you find all possible solutions.
//
// Use Case: Generating permutations, combinations, solving puzzles.
// ------------------------------------------------------

function permute(nums) {
    const result = [];
    function backtrack(path, used) {
        if (path.length === nums.length) {
            result.push([...path]);
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            if (used[i]) continue;
            used[i] = true;
            path.push(nums[i]);
            backtrack(path, used);
            path.pop();
            used[i] = false;
        }
    }
    backtrack([], []);
    return result;
}


console.log(permute([1, 2, 3]));
// [
//   [1,2,3],
//   [1,3,2],
//   [2,1,3],
//   [2,3,1],
//   [3,1,2],
//   [3,2,1]
// ]
