/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    var flag = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != val) {
            nums[flag] = nums[i]
            flag++;
        }
    }
    return flag;
};


var start = new Date();
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
var end = new Date();
console.log(end - start + " ms");