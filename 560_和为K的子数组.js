// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number}
//  */
// var subarraySum = function (nums, k) {
//     var flag = 0,
//         num = 0;
//     for (let i = 0; i < nums.length; ++i) {
//         num = 0;
//         for (let j = i; j < nums.length; ++j) {
//             num += nums[j]
//             if (num == k) {
//                 flag++;
//             }
//         }
//     }
//     return flag;
// };

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var subarraySum = function (nums, k) {
    var map = new Map();
    var flag = 0,
        num = 0;
    map.set(0, 1);
    for (let i = 0; i < nums.length; ++i) {
        num += nums[i];
        if (map.has(num - k)) {
            flag += map.get(num - k);
        }
        if (map.has(num)) {
            map.set(num, map.get(num) + 1);
        } else {
            map.set(num, 1);
        }
    }
    return flag;
};

console.time('程序用时');
console.log(subarraySum([28, 54, 7, -70, 22, 65, -6], 100));
console.timeEnd('程序用时');