/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    var left = 0;
    var right = nums.length - 1;
    var flag = 0;
    while (left <= right) {
        flag = parseInt(left + (right - left) / 2);
        if (target == nums[flag]) return flag;
        if (target < nums[flag]) {
            right = flag - 1;
        } else if (target > nums[flag]) {
            left = flag + 1;
        }
    }
    return -1;
};

console.time('冒泡排序用时');
console.log(search([-1, 0, 3, 5, 9, 12], 9));
console.timeEnd('冒泡排序用时');