var obj = new MyLinkedList()
obj.addAtTail(1)
obj.addAtTail(1)
obj.addAtTail(2)
obj.addAtTail(3)
obj.addAtTail(3)
// console.log(obj.get(0))


/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    var list = head;
    while (list && list.next) {
        if (list.val == list.next.val) {
            list.next = list.next.next;
        } else {
            list = list.next;
        }
    }
    return head;
};

console.time('程序用时');
console.log(deleteDuplicates(obj.get(0)));
console.timeEnd('程序用时');