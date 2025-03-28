
// Input: prices = [7,1,5,3,6,4]
// Output: 5

prices = [7,1,5,3,6,4]

var maxProfitfromStocks = function(prices) {
    let min = prices[0];  // Set initial min price as the first price
    let maxProfit = 0;     // Initialize maxProfit to 0

    for (let i = 1; i < prices.length; i++) {
        // Calculate the potential profit if selling at the current price
        let profit = prices[i] - min;

        // Update maxProfit if the current profit is greater than the previous maxProfit
        maxProfit = Math.max(maxProfit, profit);

        // Update min to be the lowest price encountered so far
        min = Math.min(min, prices[i]);
    }

    return maxProfit;
};

console.log(maxProfitfromStocks(prices));

/**
 * 
 * Input: prices = [7,1,5,3,6,4]
 * Output: 7
 */


function maxProfit(prices){
let profit= 0;
for(let i=0;i<prices.length;i++){
    //basically this checks if previous element is greater than current element or not 
    if(prices[i] >prices[i- 1] ){
        //get the difference and update profit value as current value > previous value
        profit+=(prices[i]- prices[i-1]);
    }
}
return profit;
}

console.log(maxProfit(prices));