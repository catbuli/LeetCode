/**
 * initialize your data structure here.
 */
var MinStack = function() {
	this.stack = [];
	this.min_stack = [ Infinity ];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
	this.stack.push(x);
	this.min_stack.push(Math.min(this.min_stack[this.min_stack.length - 1], x));
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
	this.stack.pop();
	this.min_stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
	return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
	return this.min_stack[this.min_stack.length - 1];
};

// Your MinStack object will be instantiated and called as such:
var obj = new MinStack();
obj.push(2);
obj.push(0);
obj.push(3);
obj.push(0);
console.log(obj.stack, obj.min_stack);
console.log(obj.getMin());
