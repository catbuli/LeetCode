var sort = function (arr) {
    var flag = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            flag = arr[i];
            for (let j = i; j >= 0; j--) {
                if (flag < arr[j - 1]) {
                    arr[j] = arr[j - 1];
                    arr[j - 1] = flag;
                } else {
                    break;
                }
            }
        }
        console.log(arr);
    }
    return arr;
};
let arr = [1, 4, 3, 5, 2];
// for (let index = 0; index < 100; index++) {
//     arr.push(Math.floor(Math.random() * 101))
// }
console.log('数组长度:' + arr.length);

console.time('程序用时');
console.log(sort(arr));
console.timeEnd('程序用时');