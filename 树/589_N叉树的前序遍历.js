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

    function recursive(root) {
        if (root) {
            list.push(root.val);
            root.children.forEach(element => {
                recursive(element);
            });
        }
    }
    recursive(root);
    return list;
};



console.time('程序用时');
console.log(preorder(arr));
console.timeEnd('程序用时');