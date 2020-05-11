function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var list = new TreeNode(2);
list.left = new TreeNode(3);
list.right = new TreeNode(3);
list.left.left = new TreeNode(4);
list.left.right = new TreeNode(5);
list.right.left = new TreeNode(5);
list.right.right = new TreeNode(3);

// /**
//  * @param {TreeNode} root
//  * @return {boolean}
//  */
// var isSymmetric = function (root) {
//     if (!root) return true;

//     function recursive(left, right) {
//         if (!left && !right) return true;
//         if (!left || !right) return false;
//         return left.val == right.val && recursive(left.left, right.right) && recursive(left.right, right.left)
//     }
//     return recursive(root, root);
// };

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
    if (!root) return true;
    var queue = [root.left, root.right];
    while (queue.length > 0) {
        var t1 = queue.shift();
        var t2 = queue.shift();
        if (!t1 && !t2) continue;
        if (!t1 || !t2) return false;
        if (t1.val != t2.val) return false;
        queue.push(t1.left, t2.right, t1.right, t2.left);
    }

    return true;
};

console.time('程序用时');
console.log(isSymmetric(null));
console.timeEnd('程序用时');