/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function (root) {
    var list = [];

    function recursive(root) {
        if (root) {
            root.children.forEach(element => {
                recursive(element);
            });
            list.push(root.val);
        }
    }
    recursive(root);
    return list;
};