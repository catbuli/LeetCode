// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number}
//  */
// var searchInsert = function (nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] >= target) {
//             return i;
//         }
//     }
//     return nums.length;
// };


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
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
    return left;
};


var start = new Date();
console.log(searchInsert([1, 3, 5, 6], 2));
var end = new Date();
console.log(end - start + " ms");