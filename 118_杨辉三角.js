/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    if (!numRows) return [];
    var list = [
        [1]
    ]
    for (let i = 1; i < numRows; i++) {
        list.push([]);
        for (let j = 0; j < list[i - 1].length + 1; j++) {
            list[i].push((list[i - 1][j - 1] ? list[i - 1][j - 1] : 0) + (list[i - 1][j] ? list[i - 1][j] : 0))
        }
    }
    return list;
};



console.time('程序用时');
console.log(generate(4));
console.timeEnd('程序用时');