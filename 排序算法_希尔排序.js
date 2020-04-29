var sort = function (arr) {};
let arr = [];
for (let index = 0; index < 100; index++) {
    arr.push(Math.floor(Math.random() * 101))
}
console.log('数组长度:' + arr.length);

console.time('程序用时');
console.log(sort(arr));
console.timeEnd('程序用时');