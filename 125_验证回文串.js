/*
 * @Description: 
 * @version: 0.0.1
 * @Author: Zhangyifei
 * @Date: 2020-07-06 14:21:21
 * @LastEditors: Zhangyifei
 * @LastEditTime: 2020-07-06 15:44:22
 * @FilePath: \amr_vuec:\Users\82727\Desktop\LeetCode\125_验证回文串.js
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let flag = s.replace(/[^\a-zA-Z0-9]/g, '').toLowerCase();
    return flag == flag.split('').reverse().join('');
};

console.time('程序用时');
console.log(isPalindrome("0P"));
console.timeEnd('程序用时');