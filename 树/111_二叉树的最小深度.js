// Definition for a binary tree node.
function TreeNode(val) {
	this.val = val;
	this.left = this.right = null;
}

var node = new TreeNode(1);
node.left = new TreeNode(2);

// /**
//  * @param {TreeNode} root
//  * @return {number}
//  */
// var minDepth = function (root) {
//     if (root == null) {
//         return 0;
//     }
//     return !root.right || !root.left ? minDepth(root.left) + minDepth(root.right) + 1 : Math.min(minDepth(root.left), minDepth(root.right)) + 1;
// };

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    
	if (!root) return [];
	var queue = [ root ];
	var level = 1;
	while (queue.length) {
		var length = queue.length;
		while (length--) {
			var flag = queue.shift();
			if (!flag.left && !flag.right) return level;
			flag.left && queue.push(flag.left);
			flag.right && queue.push(flag.right);
		}
		level++;
	}

	return level;
};

console.time('程序用时');
console.log(minDepth(node));
console.timeEnd('程序用时');
