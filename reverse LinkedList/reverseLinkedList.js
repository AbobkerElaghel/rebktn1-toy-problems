/*
Write a function that reverses a linked list.
​
Explanation:
​
Given the below linked list:
​
	A -> B -> C -> D -> E -> null
​
Return:
​
	E -> D -> C -> B -> A -> null
​
Constraint 1: Do this in linear time
Constraint 2: Do this in constant space
Constraint 3: Do not mutate the original nodes by adding any new properties
*/
function Node(val) {
    var obj = {};
    obj.value = val || null;
    obj.next = null;
    return obj;
}

function reverseLinkedList(linkedlist) {
    let p = linkedlist;
    let q;
    let temp;
    while (p) {
        if (!q) {
            q = new Node(p.value);
            p = p.next;
        } else {
            temp = new Node(p.value);
            temp.next = q;
            p = p.next;
            q = temp;
        }
    }
    return q;
}
let p = new Node(5);
p.next = new Node(10);
p.next.next = new Node(15);
p.next.next.next = new Node(20);
p.next.next.next.next = new Node(25);


console.log(reverseLinkedList(p))