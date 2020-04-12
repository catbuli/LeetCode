// /**
//  * @param {string[]} strs
//  * @return {string}
//  */
// var longestCommonPrefix = function (strs) {
//     var min = 0;
//     var minI = 0;
//     for (let i = 0; i < strs.length; i++) {
//         if (i == 0) {
//             min = strs[i].length;
//             minI = i;
//         } else if (strs[i].length < min) {
//             min = strs[i].length;
//             minI = i;
//         }
//     }
//     var flag = "";
//     for (let j = 0; j <= min - 1; j++) {
//         flag = strs[minI].substring(0, j + 1);
//         for (let i = 0; i < strs.length; i++) {
//             if (flag == strs[i].substring(0, j + 1)) {
//                 continue;
//             } else {
//                 return strs[minI].substring(0, j);
//             }
//         }
//     }
//     return strs.length == 0 ? "" : strs[minI];
// };

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    var str = "";
    if (!strs.length) return str;
    for (var i = 0; i < strs[0].length; i++) {
        for (var j = 0; j < strs.length; j++) {
            if (strs[j][i] != strs[0][i]) {
                return str;
            }
        }
        str += strs[0][i];
    }
    return str;
};

var start = new Date();
console.log(longestCommonPrefix(["flower", "flow", "flight"]));
var end = new Date();
console.log(end - start + " ms");