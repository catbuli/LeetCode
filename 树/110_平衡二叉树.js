// Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var list = new TreeNode(3);
list.left = new TreeNode(9);
list.right = new TreeNode(20);
list.right.left = new TreeNode(15);
list.right.right = new TreeNode(7);
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
    if (!root) return true;

    if (Math.abs(maxDepth(root.left) - maxDepth(root.right)) > 1) {
        return false
    }

    function maxDepth(root) {
        if (!root) return 0;
        return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
    }

    return isBalanced(root.left) && isBalanced(root.right)
};

console.time('程序用时');
console.log(isBalanced(list));
console.timeEnd('程序用时');