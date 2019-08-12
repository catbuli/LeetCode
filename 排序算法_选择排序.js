function sort(arr) {
    for (var i = 0; i < arr.length-1; i++) {
        var min = i;
        for (var j = i+1; j < arr.length; j++) {
            if(arr[j]<arr[min]){
                min = j;
            }
        }
        if(i!=min){
            var tmp = arr[i];
            arr[i] = arr[min];
            arr[min] = tmp;
        }
    }
    console.log(arr);
}

let arr = [];
for (let index = 0; index < 10; index++) {
    arr.push(Math.floor(Math.random()*101))
}
console.log("数组长度:"+arr.length);

console.time('选择排序用时');
sort(arr);
console.timeEnd('选择排序用时');
