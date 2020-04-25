// /**
//  * @param {number[]} digits
//  * @return {number[]}
//  */
// var plusOne = function (digits) {
//     var length = digits.length - 1,
//         flag = 0;
//     digits[length]++;
//     while (length >= 0) {
//         digits[length] = digits[length] + flag;
//         flag = parseInt(digits[length] / 10);
//         if (digits[length] > 9) {
//             digits[length] = digits[length] % 10;
//         }
//         if (length == 0 && flag) {
//             digits.unshift(1);
//         }
//         length--;
//     }
//     return digits;
// };

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    //声明数组长度变量 进位变量 计算变量
    var length = digits.length - 1,
        flag = 1,
        num = 0;
    while (length >= 0) {
        //num = 数组最后一位 + flag; 这里flag = 1 第一次循环时就是最后一位
        num = digits[length] + flag;
        //数组最后一位 = num % 10 得到个位
        digits[length] = num % 10;
        //flag = num 的十位也就是 是否进位的判断依据
        flag = parseInt(num / 10);
        length--;
    }
    //如果循环结束后flag的值不为0，则将flag添加到数组第一位
    if (flag) {
        digits.unshift(flag);
    }
    return digits;
};


var start = new Date();
console.log(plusOne([9, 9]));
var end = new Date();
console.log(end - start + " ms");