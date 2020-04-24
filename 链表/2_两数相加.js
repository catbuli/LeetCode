/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    var flag = new ListNode(0);
    var result = flag,
        num, i = 0;
    while (l1 || l2) {
        let a = l1 ? l1.val : 0;
        let b = l2 ? l2.val : 0;
        num = a + b + i;
        i = parseInt(num / 10);
        flag.next = new ListNode(num % 10);
        flag = flag.next;
        if (l1) {
            l1 = l1.next;
        }
        if (l2) {
            l2 = l2.next;
        }
    }
    if (i) {
        flag.next = new ListNode(i)
    }
    return result.next;
};

var start = new Date();
console.log(addTwoNumbers(obj1.get(0), obj2.get(0)));
var end = new Date();
console.log(end - start + " ms");