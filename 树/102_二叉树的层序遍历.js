// function TreeNode(val) {
//     this.val = val;
//     this.left = this.right = null;
// }

// var list = new TreeNode(1);
// list.left = new TreeNode(2);
// list.right = new TreeNode(3);
// list.left.left = new TreeNode(4);
// list.left.right = new TreeNode(5);
// var list = [];
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
	if (!root) return [];
	var list = [];
	var queue = [ root ];
	var level = 0;
	while (queue.length) {
		list.push([]);
		var length = queue.length;
		while (length--) {
			var flag = queue.shift();
			list[level].push(flag.val);
			flag.left && queue.push(flag.left);
			flag.right && queue.push(flag.right);
		}
		level++;
	}
	return list;
};

console.time('程序用时');
console.log(levelOrder(list));
console.timeEnd('程序用时');
