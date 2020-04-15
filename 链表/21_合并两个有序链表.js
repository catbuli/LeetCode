/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    var head = new ListNode(-1);
    var flag = head;
    while (l1 != null && l2 != null) {
        if (l1.val <= l2.val) {
            flag.next = l1;
            l1 = l1.next;
        } else {
            flag.next = l2;
            l2 = l2.next;
        }
        flag = flag.next;
    }
    flag.next = l1 ? l1 : l2;
    return head.next;
};

var start = new Date();
console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));
var end = new Date();
console.log(end - start + " ms");