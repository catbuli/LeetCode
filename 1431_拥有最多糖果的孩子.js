/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
    let max = Math.max(...candies);
    return candies.map((element) => {
        return (element + extraCandies) >= max;
    });
};


console.time('程序用时');
console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));
console.timeEnd('程序用时');