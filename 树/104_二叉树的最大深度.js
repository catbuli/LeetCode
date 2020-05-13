/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
// /**
//  * @param {TreeNode} root
//  * @return {number}
//  */
// var maxDepth = function (root) {
//     if (!root) return [];
//     var queue = [root];
//     var level = 0;
//     while (queue.length) {
//         var length = queue.length;
//         while (length--) {
//             var flag = queue.shift();
//             flag.left && queue.push(flag.left);
//             flag.right && queue.push(flag.right);
//         }
//         level++;
//     }
//     return level;
// };

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    if (root == null) {
        return 0;
    }
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};