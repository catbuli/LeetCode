/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) return [];
    var list = [];
    var queue = [root];
    var level = 0;
    while (queue.length) {
        list.push([]);
        var length = queue.length;
        while (length--) {
            var flag = queue.shift();
            list[level].push(flag.val)
            for (let i = 0; i < flag.children.length; i++) {
                queue.push(flag.children[i]);
            }
        }
        level++;
    }
    return list;
};


console.time('程序用时');
console.log(levelOrder(list));
console.timeEnd('程序用时');