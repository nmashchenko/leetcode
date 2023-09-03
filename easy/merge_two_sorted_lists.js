/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  // initialize new linked list
  let head = new ListNode(null);

  // new pointer
  let current = head;

  // loop while both lists are not null (did not reach end)
  while (list1 && list2) {
    // check which val is lower and point current to it
    // move the pointer on the lower list
    if (list1.val <= list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }

    // move the current pointer
    current = current.next;
  }

  // determine which node is not null
  let remaining = list1 || list2;

  // set current to the remaining list
  current.next = remaining;

  // return next because head was initialized to null
  return head.next;
};
