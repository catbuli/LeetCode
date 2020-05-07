// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val) {
//  *     this.val = val;
//  *     this.left = this.right = null;
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @return {number[]}
//  */
// var preorderTraversal = function (root) {
//     var list = [];

//     function recursive(root) {
//         if (root) {
//             list.push(root.val);
//             recursive(root.left);
//             recursive(root.right);
//         }
//     }
//     recursive(root);
//     return list;
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
 * @return {number[]}
 */
var preorderTraversal = function (root) {
    var list = [];
    var stack = [];
    if (!root) return list;
    stack.push(root)
    while (stack.length > 0) {
        var flag = stack.pop();
        list.push(flag.val);
        if (flag.right) stack.push(flag.right)
        if (flag.left) stack.push(flag.left)
    }

    return list;
};