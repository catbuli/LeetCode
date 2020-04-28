/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    var flag, left = 2,
        num,
        right = parseInt(x / 2);
    if (x < 2) return x;
    while (left <= right) {
        flag = parseInt((right + left) / 2);
        num = flag * flag;
        if (num > x) right = flag - 1;
        else if (num < x) left = flag + 1;
        else return flag;
    };
    return right;
}
console.time('程序用时');
console.log(mySqrt(82));
console.timeEnd('程序用时');