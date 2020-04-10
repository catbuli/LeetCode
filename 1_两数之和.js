/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

nums = [3, 2, 4]; target = 6;
var twoSum = function (nums, target) {
    var result = [];
    for (let a = 0; a < nums.length; a++) {
        for (let b = a+1; b < nums.length; b++) {
            if (nums[a]+nums[b] === target) {
                result.push(a); result.push(b);
                return result
            }
        }
    }
};


var start = new Date();
console.log(twoSum(nums, target));
var end = new Date();
console.log(end - start + " ms");
