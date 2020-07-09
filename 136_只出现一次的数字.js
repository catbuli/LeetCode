/*
 * @Description: 
 * @version: 0.0.1
 * @Author: Zhangyifei
 * @Date: 2020-07-07 11:30:09
 * @LastEditors: Zhangyifei
 * @LastEditTime: 2020-07-09 09:12:23
 * @FilePath: \amr_vuec:\Users\82727\Desktop\LeetCode\136_只出现一次的数字.js
 */

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var singleNumber = function (nums) {
//     let map = new Map();
//     nums.forEach(element => {
//         if (map.has(element)) {
//             map.delete(element)
//         } else {
//             map.set(element, 1)
//         }
//     });
//     for (var [key, value] of map) {
//         return key;
//     }
// };

/**
 * @param {number[]} nums
 * @return {number}
 */

var singleNumber = function(nums) {
	let flag = 0;
	for (let i = 0; i < nums.length; i++) {
		flag ^= nums[i];
	}
	return flag;
};

console.time('程序用时');
console.log(singleNumber([ 1, 2, 1 ]));
console.timeEnd('程序用时');
