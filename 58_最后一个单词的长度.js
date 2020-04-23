/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    var end = s.length - 1;
    while (end >= 0 && s[end] == " ") end--;
    var start = end;
    while (start >= 0 && s[start] != " ") start--;
    return end - start;
};



var start = new Date();
console.log(lengthOfLastWord("sss sd "));
var end = new Date();
console.log(end - start + " ms");