// /**
//  * @param {number} rowIndex
//  * @return {number[]}
//  */
// var getRow = function (rowIndex) {
//     var list = [
//         1
//     ]
//     for (let i = 1; i < rowIndex + 1; i++) {
//         list.push([]);
//         for (let j = 0; j < i + 1; j++) {
//             list[i].push((list[i - 1][j - 1] ? list[i - 1][j - 1] : 0) + (list[i - 1][j] ? list[i - 1][j] : 0))
//         }
//     }
//     return list[rowIndex];
// };

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
    var list = [1];
    for (let i = 0; i < rowIndex; i++) {
        list.unshift(0);
        for (let j = 0; j < i + 1; j++) {
            list[j] = list[j] + list[j + 1];
        }
    }
    return list;
};



console.time('程序用时');
console.log(getRow(4));
console.timeEnd('程序用时');