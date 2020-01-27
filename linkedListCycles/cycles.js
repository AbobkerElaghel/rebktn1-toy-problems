/*
Write a function that returns true if a linked list contains a cycle, or false if it terminates somewhere.

Explanation:

Generally, we assume that a linked list will terminate in a null next pointer, as follows:

 A -> B -> C -> D -> E -> null

A 'cycle' in a linked list is when traversing the list would result in visiting the same nodes over and over.
This is caused by pointing a node in the list to another node that already appeared earlier in the list. Example:

 A -> B -> C
      ^    |
      |    v
      E <- D

Constraint 1: Do this in linear time
Constraint 2: Do this in constant space
Constraint 3: Do not mutate the original nodes in any way
*/

function Node(val) {
  var obj = {};
  obj.value = val || null;
  obj.next = null;
  return obj;
}

let head = Node('A');
head.next = Node('B');
head.next.next = Node('C');
head.next.next.next = Node('D');
head.next.next.next.next = Node('E');
head.next.next.next.next.next = Node('F');
head.next.next.next.next.next.next = Node('G');
head.next.next.next.next.next.next.next= Node('H');
head.next.next.next.next.next.next.next.next= Node('I');
head.next.next.next.next.next.next.next.next.next= Node('J');
head.next.next.next.next.next.next.next.next.next.next= Node('K');
head.next.next.next.next.next.next.next.next.next.next.next= head.next;


const hasCycle = linkedList => {
  let p, q;
  p = linkedList;
  q = linkedList.next;
  while(p && q){
    if(p === q){
      return true;
    }else{
      p = p.next;
      q = q.next.next;
    }
  }
  return false;
};

console.log( hasCycle(head) ); //IT WORKS
