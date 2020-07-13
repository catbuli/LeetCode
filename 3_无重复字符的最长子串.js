/*
 * @Description: 
 * @version: 0.0.1
 * @Author: Zhangyifei
 * @Date: 2020-07-10 11:09:12
 * @LastEditors: Zhangyifei
 * @LastEditTime: 2020-07-13 15:41:21
 * @FilePath: \amr_vuec:\Users\82727\Desktop\LeetCode\3_无重复字符的最长子串.js
 */

// /**
//  * map
//  * @param {string} s
//  * @return {number}
//  */
// var lengthOfLongestSubstring = function (s) {
//     let map = new Map();
//     let max = 0;
//     for (let i = 0; i < s.length; i++) {
//         if (map.has(s[i])) {
//             map.clear();
//         }
//         map.set(s[i], 0)
//         max = Math.max(map.size, max);
//     }
//     return max;
// };

/**
 * 数组
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let arr = [],
        max = 0;
    for (let i = 0; i < s.length; i++) {
        if (arr.indexOf(s[i]) >= 0) {
            arr.splice(0, arr.indexOf(s[i]) + 1);
        }
        arr.push(s[i])
        max = Math.max(arr.length, max);
    }
    return max;
};

console.time('程序用时');
console.log(lengthOfLongestSubstring("abcabcbb"));
console.timeEnd('程序用时');