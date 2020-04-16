/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    var flag = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[flag] != nums[i]) {
            flag++;
            nums[flag] = nums[i]
        }
    }
    return flag + 1;
};

var start = new Date();
console.log(removeDuplicates([1, 1, 2]));
var end = new Date();
console.log(end - start + " ms");