/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
    var flag = 0,
        num = 0;
    for (let i = 0; i < nums.length; ++i) {
        num = 0;
        for (let j = i; j < nums.length; ++j) {
            num += nums[j]
            if (num == k) {
                flag++;
            }
        }
    }
    return flag;
};

console.time('冒泡排序用时');
console.log(subarraySum([28, 54, 7, -70, 22, 65, -6], 100));
console.timeEnd('冒泡排序用时');