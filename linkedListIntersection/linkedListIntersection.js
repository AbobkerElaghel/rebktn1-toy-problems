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