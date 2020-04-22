/**
 * 贪心算法
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    var max = (flag = nums[0]);
    for (let i = 1; i < nums.length; i++) {
        console.log(nums[i], flag + nums[i])
        flag = Math.max(nums[i], flag + nums[i]);
        console.log(flag)
        max = Math.max(flag, max);
        console.log(max)
        console.log('----------------------')
    }
    return max;
};


var start = new Date();
console.log(maxSubArray([3, 5, -7, 5, 5]));
var end = new Date();
console.log(end - start + " ms");