// /**
//  * @param {number} x
//  * @return {boolean}
//  */
// var isPalindrome = function (x) {
//     if (x < 0) return false;
//     var num = x.toString().split('').reverse().join('');
//     if (num === x.toString()) return true;
//     return false;
// };

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x < 0 || (x % 10 == 0 && x != 0)) return false;
    var num = 0;
    while (x > num) {
        num = num * 10 + x % 10;
        x = parseInt(x / 10);
    }
    return x == num || x == parseInt(num / 10);
};

var start = new Date();
console.log(isPalindrome(0));
var end = new Date();
console.log(end - start + " ms");