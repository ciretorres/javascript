/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let priceMin = Math.min(...prices);
    let indexMin = prices.indexOf(priceMin);
    let slicePrices = prices.slice(indexMin)
    let priceMax = Math.max(...slicePrices);
    if (priceMin !== priceMax) {
        let profit = priceMax - priceMin;
        return profit;
    } else {
        return 0;
    }
};

// expected 5
console.log(maxProfit([7,1,5,3,6,4]))

// expected 0
console.log(maxProfit([7,6,4,3,1]))