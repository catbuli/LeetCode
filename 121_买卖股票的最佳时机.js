// /**
//  * @param {number[]} prices
//  * @return {number}
//  */
// var maxProfit = function (prices) {
//     var flag = 0;
//     for (let i = 0; i < prices.length - 1; i++) {
//         for (let j = i; j < prices.length; j++) {
//             flag = Math.max(prices[j] - prices[i], flag);
//         }
//     }
//     return flag;
// };


// /**
//  * @param {number[]} prices
//  * @return {number}
//  */
// var maxProfit = function (prices) {
//     var min = Number.MAX_SAFE_INTEGER;
//     var flag = 0;
//     for (let i = 0; i < prices.length; i++) {
//         if (prices[i] < min) {
//             min = prices[i]
//         } else {
//             flag = Math.max(prices[i] - min, flag);
//         }
//     }
//     return flag;
// };


/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    var min = Number.MAX_SAFE_INTEGER;
    var flag = 0;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < min) {
            min = prices[i]
        } else {
            flag = Math.max(prices[i] - min, flag);
        }
    }
    return flag;
};




console.time('程序用时');
console.log(maxProfit([7, 1, 5, 3, 6, 4, 5]));
console.timeEnd('程序用时');