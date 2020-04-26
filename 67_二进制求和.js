/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    let length = Math.max(a.length, b.length),
        flag = 0,
        sum = 0,
        str = "";
    a = a.padStart(length, '0');
    b = b.padStart(length, '0');
    for (let i = length - 1; i >= 0; i--) {
        sum = (parseInt(a[i]) + parseInt(b[i]) + flag);
        flag = parseInt(sum / 2);
        str = sum % 2 + str;
    }
    return flag ? str = flag + str : str;
};



var start = new Date();
console.log(addBinary("11", "1"));
var end = new Date();
console.log(end - start + " ms");