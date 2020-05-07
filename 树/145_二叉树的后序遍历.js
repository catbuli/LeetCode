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
var postorderTraversal = function (root) {
    var list = [];

    function recursive(root) {
        if (root) {
            if (root.left) {
                recursive(root.left)
            }
            if (root.right) {
                recursive(root.right)
            }
            list.push(root.val)
        }
    }
    recursive(root);
    return list;
};