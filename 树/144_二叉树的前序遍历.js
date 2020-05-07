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
var preorderTraversal = function (root) {
    var list = [];

    function recursive(root) {
        if (root) {
            list.push(root.val);
            recursive(root.left);
            recursive(root.right);
        }
    }
    recursive(root);
    return list;
};