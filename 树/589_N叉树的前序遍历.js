// /**
//  * // Definition for a Node.
//  * function Node(val, children) {
//  *    this.val = val;
//  *    this.children = children;
//  * };
//  */

// /**
//  * @param {Node} root
//  * @return {number[]}
//  */
// var preorder = function (root) {
//     var list = [];

//     function recursive(root) {
//         if (root) {
//             list.push(root.val);
//             root.children.forEach(element => {
//                 recursive(element);
//             });
//         }
//     }
//     recursive(root);
//     return list;
// };

/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function (root) {
    var list = [];
    var stack = [];
    if (!root) return list;
    stack.push(root)
    while (stack.length) {
        var flag = stack.pop();
        list.push(flag.val);
        for (let i = flag.children.length - 1; i >= 0; i--) {
            stack.push(flag.children[i])
        }
    }
    return list;
};