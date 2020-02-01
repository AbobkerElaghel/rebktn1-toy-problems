// Sort a linked list using insertion sort.
// Algorithm of Insertion Sort:

//1- Insertion sort iterates, consuming one input element each repetition, and growing a sorted output list.
//2- At each iteration, insertion sort removes one element from the input data, finds the location it belongs within the sorted list, and inserts it there.
// 3-It repeats until no input elements remain.

// Example 1:

// Input: 4->2->1->3
// Output: 1->2->3->4
// Example 2:

// Input: -1->5->3->4->0
// Output: -1->0->3->4->5

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
<<<<<<< HEAD
 *     this.val:any = val;
 *     this.next:ListNode = null;
=======
 *     this.val = val;
 *     this.next = null;
>>>>>>> 26958188a2074d88c523cd902b4e19b8f6d513e6
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function(head) {
    p = head;
    while (p.next) {
        c
    }
};

const findMin = head => {
    p = head;
    let min = p.value;
    while (p.next) {
        if (p.value < min) {
            min = p.value;
        }
    }
    return min;
}
const removeNode = (head, value) => {
    p = head;
    while (p.next) {
        if (p.next.value === value) {
            q = p.next;
            p.next = q.next;
            delete q;
        }
    }

}



//middle Line Swapping // and end Swapping 
if (res.next.value < theValue) {
    newNode = new Node(theValue);
    newNode = res.next;
    res.next = newNode;
}
