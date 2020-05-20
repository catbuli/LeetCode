// Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var node = new TreeNode(1);
node.left = new TreeNode(2);


/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
    if (root == null) {
        return 0;
    }
    return !root.right || !root.left ? minDepth(root.left) + minDepth(root.right) + 1 : Math.min(minDepth(root.left), minDepth(root.right)) + 1;
};

console.time('程序用时');
console.log(minDepth(node));
console.timeEnd('程序用时');