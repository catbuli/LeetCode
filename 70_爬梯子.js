/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    var dp = [0, 1, 2];
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp;
};

var start = new Date();
console.log(climbStairs(10));
var end = new Date();
console.log(end - start + " ms");