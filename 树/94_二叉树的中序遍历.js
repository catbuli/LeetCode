/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
    var list = [];

    function recursive(root) {
        if (root) {
            if (root.left) {
                recursive(root.left)
            }
            list.push(root.val)
            if (root.right) {
                recursive(root.right)
            }
        }
    }
    recursive(root);
    return list;
};