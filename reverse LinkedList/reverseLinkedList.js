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


var reverseLinkedList = function(linkedList) {
    let tempArray = [];
    let head;
    let p = linkedList;
    while (p != null) {
        tempArray.push(p.value);
        p = p.next;
    }

    p = head;
    for (let i = tempArray.length-1 ; i >= 0; i--) {
        if(!p) {
            p = Node(tempArray[i]);
            head = p;
        }
        else{
            p.next = Node(tempArray[i]);
            p = p.next
        }
    }
    delete tempArray;
    return head;
};

let p = new Node(5);
p.next = new Node(10);
p.next.next = new Node(15);
p.next.next.next = new Node(20);
p.next.next.next.next = new Node(25);
let x = reverseLinkedList(p)
