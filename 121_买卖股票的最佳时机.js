/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    var flag = 0;
    for (let i = 0; i < prices.length - 1; i++) {
        for (let j = i; j < prices.length; j++) {
            flag = Math.max(prices[j] - prices[i], flag);
        }
    }
    return flag;
};


console.time('程序用时');
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.timeEnd('程序用时');