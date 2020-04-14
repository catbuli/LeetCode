/**
 * Initialize your data structure here.
 */
var MyLinkedList = function () {
    this.head = null
    this.tail = null
    this.length = 0
};

var listNode = function (val) {
    this.val = val
    this.next = null
}

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
    if (index >= 0 && index < this.length) {
        let i = 0
        let node = this.head
        while (i < index) {
            node = node.next
            i++
        }
        return node.val
    } else {
        return -1
    }
}

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
    const lasthead = this.head
    const newNode = new listNode(val)
    this.head = newNode
    this.head.next = lasthead
    if (!this.tail) {
        this.tail = newNode
    }
    this.length++
}

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
    const lastTail = this.tail
    const newNode = new listNode(val)
    this.tail = newNode
    if (lastTail) {
        lastTail.next = this.tail
    }
    if (!this.head) {
        this.head = newNode
    }
    this.length++
}

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
    if (index === this.length) {
        this.addAtTail(val)
    } else if (index < 1) {
        this.addAtHead(val)
    } else if (index > 0 && index < this.length) {
        let i = 0
        let node = this.head
        while (i < index - 1) {
            node = node.next
            i++
        }
        const newNode = new listNode(val)
        newNode.next = node.next
        node.next = newNode
        this.length++
    }
}

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
    if (index > 0 && index < this.length) {
        let i = 0
        let node = this.head
        while (i < index - 1) {
            node = node.next
            i++
        }
        node.next = node.next.next
        if (index === this.length - 1) {
            this.tail = node
        }
        this.length--
    } else if (index === 0) {
        this.head = this.head.next
        this.length--
    }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */