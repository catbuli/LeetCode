function TreeNode(val) {
	this.val = val;
	this.left = this.right = null;
}

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
	var build = function(list, left, right) {
		if (left > right) return null;
		var mid = left + ((right - left) >> 1);
		var node = new TreeNode(list[mid]);
		node.left = build(nums, left, mid - 1);
		node.right = build(nums, mid + 1, right);
		return node;
	};
	return build(nums, 0, nums.length - 1);
};

console.time('程序用时');
console.log(sortedArrayToBST([ -10, -3, 0, 5, 9 ]));
console.timeEnd('程序用时');
