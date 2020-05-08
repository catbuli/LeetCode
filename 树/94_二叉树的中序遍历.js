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
// var inorderTraversal = function (root) {
//     var list = [];

//     function recursive(root) {
//         if (root) {
//             if (root.left) {
//                 recursive(root.left)
//             }
//             list.push(root.val)
//             if (root.right) {
//                 recursive(root.right)
//             }
//         }
//     }
//     recursive(root);
//     return list;
// };


// Definition
// for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var list = new TreeNode(1);
list.right = new TreeNode(2);
list.right.left = new TreeNode(3);


/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
    var list = [];
    var stack = [];
    while (root || stack.length) {
        while (root) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        list.push(root.val);
        root = root.right;
    }
    return list;
};


console.time('程序用时');
console.log(inorderTraversal(list));
console.timeEnd('程序用时');