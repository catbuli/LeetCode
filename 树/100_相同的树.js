/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
	if (!p && !q) return true;
	if (!p || !q) return false;
	if (p.val != q.val) return false;
	return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

console.time('程序用时');
console.log(isSameTree(list));
console.timeEnd('程序用时');
