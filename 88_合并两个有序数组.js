/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    var l1 = m - 1;
    var l2 = n - 1;
    var flag = m + n - 1;
    while (l1 >= 0 && l2 >= 0) {
        nums1[flag--] = nums1[l1] > nums2[l2] ? nums1[l1--] : nums2[l2--]
    }
    nums1.splice(0, l2 + 1, ...nums2.slice(0, l2 + 1))
};

console.time('冒泡排序用时');
console.log(merge([4, 0, 0, 0, 0, 0], 1, [1, 2, 3, 5, 6], 5))

console.timeEnd('冒泡排序用时');