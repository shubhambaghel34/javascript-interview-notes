
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
console.log(newMoiseFunc(1,4));
console.log(newMoiseFunc(1,4));
