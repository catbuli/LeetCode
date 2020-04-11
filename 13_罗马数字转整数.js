/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    var list = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    var num = 0;
    for (var i = 0; i < s.length; i++) {
        list[s[i]] < list[s[i + 1]] ? num -= list[s[i]] : num += list[s[i]]
    }
    return num;
};


var start = new Date();
console.log(romanToInt("VII"));
var end = new Date();
console.log(end - start + " ms");