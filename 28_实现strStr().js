/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    return haystack.indexOf(needle)
};


// /**
//  * @param {string} haystack
//  * @param {string} needle
//  * @return {number}
//  */
// var strStr = function (haystack, needle) {
//     index = -1;
//     if (!needle) return 0;
//     for (let i = 0; i < haystack.length; i++) {
//         if (haystack[i] == needle[0]) {
//             index = i;
//             for (let j = 0; j < needle.length; j++) {
//                 // console.log(needle[j], haystack[i + j])
//                 if (needle[j] != haystack[i + j]) {
//                     // console.log('tag', '')
//                     index = -1;
//                     break;
//                 }
//             }
//             if (index >= 0) return index;
//         }
//     }
//     return index;
// };

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    if (!needle) return 0;
    let needleLen = needle.length;
    for (let i = 0; i < haystack.length; i++) {
        if (haystack.substr(i, needleLen) == needle) {
            return i;
        }
    }
    return -1;
};


var start = new Date();
console.log(strStr("mississippi", "issip"));
var end = new Date();
console.log(end - start + " ms");