function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
    var build = function (list, l, r) {
        if (l > r) return null;
        var mid = l + ((r - l) >> 1);
        var node = new TreeNode(list[mid]);
        node.left = build(nums, l, mid - 1)
        node.right = build(nums, mid + 1, r)
        return node;
    }
    return build(nums, 0, nums.length - 1);
};

console.time('程序用时');
console.log(sortedArrayToBST([-10, -3, 0, 5, 9]));
console.timeEnd('程序用时');