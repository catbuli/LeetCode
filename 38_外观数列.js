/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
    let prev = '1'
    for (let i = 1; i < n; i++) {
        prev = prev.replace(/(\d)\1*/g, item => `${item.length}${item[0]}`)
    }
    return prev
};

var start = new Date();
console.log(countAndSay(4));
var end = new Date();
console.log(end - start + " ms");