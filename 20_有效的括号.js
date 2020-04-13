// /**
//  * @param {string} s
//  * @return {boolean}
//  */
// var isValid = function (s) {
//     var stack = [];
//     for (let i = 0; i < s.length; i++) {
//         if (s[i] == "(" || s[i] == "[" || s[i] == "{" || !stack.length) {
//             stack.push(s[i])
//         } else {
//             var flag = stack.pop();
//             switch (flag) {
//                 case "(": {
//                     if (s[i] != ")") {
//                         return false;
//                     };
//                     break;
//                 }
//                 case "[": {
//                     if (s[i] != "]") {
//                         return false;
//                     };
//                     break;
//                 }
//                 case "{": {
//                     if (s[i] != "}") {
//                         return false;
//                     };
//                     break;
//                 }
//             }
//         }
//     }
//     return stack.length ? false : true;
// };



/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    var stack = [];
    var length = s.length;
    if (length % 2 != 0) return false;
    var map = new Map();
    map.set("(", ")");
    map.set("[", "]");
    map.set("{", "}");
    for (let i = 0; i < length; i++) {
        if (map.get(s[i])) {
            stack.push(s[i])
        } else {
            var flag = stack.pop();
            console.log(map.get(flag), s[i])
            if (map.get(flag) != s[i]) return false;
        }
    }
    return stack.length ? false : true;
};


var start = new Date();
console.log(isValid("))"));
var end = new Date();
console.log(end - start + " ms");