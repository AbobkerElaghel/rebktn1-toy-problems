/*
 *
 * Linked List Intersection
 *
 * Write a function linkedListIntersection that returns the node 
 * at which the intersection of two linked lists begins, 
 * or null if there is no such intersection.
 * 
 * Example:
 * 
 * Given the following two linked lists list1 and list2, 
 * linkedListIntersection(list1,list2) should return D 
 * as the node of intersection.
 * 
 *    A → B → C
 *             ↘
 *               D → E → F
 *             ↗
 *        X → Y
 * 
 * Given the following two linked lists list1 and list2, 
 * linkedListIntersection(list1,list2) should return NULL 
 * as there is no point of intersection.
 * 
 *    A → B → C → D
 *    X → Y → Z
 * 
 */

// Helper function (do not edit)
function Node(val) {
    var obj = {};
    obj.value = val || null;
    obj.next = null;
    return obj;
}

// O(N^2) !!!!!
function linkedListIntersection(list1, list2) {
    // TODO: Implement this function!
    let p, q;
    p = list1;
    while (p) {
        q = list2;
        while (q) {
            if (p === q) {
                return p;
            }
            q = q.next;
        }
        p = p.next;
    }
    return null;
}

//Other Solation but in JAVA 
// becouse we can not get the referance of a verable in Java Script 
//O(N) Lienear Time solution :) 
static Node linkedListIntersection(Node list1, Node list2) {
    ArrayList < Node > addressedList1 = new ArrayList < Node > ();
    ArrayList < Node > addressedList2 = new ArrayList < Node > ();
    Node p = list1;
    Node q = list2;
    while (p != null) {
        addressedList1.add(p);
        p = p.next;
    }
    while (q != null) {
        addressedList2.add(q);
        q = q.next;
    }
    addressedList1.forEach(node - > System.out.println(node.hashCode()));
    System.out.println();
    addressedList2.forEach(node - > System.out.println(node.hashCode()));

    int length1 = addressedList1.size();
    int length2 = addressedList2.size();
    while (length2 >= 0) {
        if (addressedList2.get(length2 - 1) != addressedList1.get(length1 - 1)) {
            return addressedList2.get(length2);
        } else {
            length1--;
            length2--;
        }
    }
    return null;
};

static class Node {
    Node(char value) {
        this.value = value;
        this.next = null;
    }
    private char value;
    private Node next;
}
}