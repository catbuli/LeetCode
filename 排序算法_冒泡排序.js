function sort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                let tmp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = tmp;
            }
        }
    }
    console.log(arr);
}
let arr = [];
for (let index = 0; index < 10; index++) {
    arr.push(Math.floor(Math.random() * 101))
}
console.log("数组长度:" + arr.length);
console.log("这个排序还可以优化");

console.time('冒泡排序用时');
sort(arr);
console.timeEnd('冒泡排序用时');