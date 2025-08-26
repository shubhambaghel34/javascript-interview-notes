// Problem Statement:
// Implement a Memoization Utility in JavaScript.
//
// Requirements:
// 1. Create a higher-order function `memoiseFunction(fn)` that caches results of function calls.
// 2. When the same arguments are passed again, return the cached result instead of recomputing.
// 3. Use a Map (or object) to store previously computed results.
//
// Why Memoization?
// - Expensive function calls (e.g., recursion in Fibonacci, API calls, heavy calculations) 
//   can be optimized by caching results.
// - Improves performance by avoiding repeated work.
//
// Example:
//   Input: newMoiseFunc(1, 4)
//   First call → computes and stores result
//   Second call → retrieves result from cache
//
// Expected Output:
//   5   (calculated)
//   5   (cached)

function memoiseFunction(fn){
    const cache= new Map();
    return function(...args){
        const key=JSON.stringify(args);
        if(cache.has(key)){
            return cache.get(key);
        }
        const result=fn.apply(this,args);
        cache.set(key,result);
        return result;
    };
}

function addition(a,b){
    return a + b;
}
const newMoiseFunc=memoiseFunction(addition);
console.log(newMoiseFunc(1, 4)); // Computing result → 5
console.log(newMoiseFunc(1, 4)); // Fetching from cache → 5
