/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    var flag = x < 0 ? -1 : 1;
    var num = parseInt(x.toString().split("").reverse().join("")) * flag;
    if (num > 2 ** 31 - 1 || num < (-2) ** 31) return 0;
    return num;
};

var start = new Date();
console.log(reverse(120));
var end = new Date();
console.log(end - start + " ms");