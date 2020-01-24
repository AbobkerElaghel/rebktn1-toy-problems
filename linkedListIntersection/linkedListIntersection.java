package com.example;
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        Node<Character> list1 = new Node<Character>('A');
         list1.next  = new Node<Character>('B');
         list1.next.next = new Node<Character>('C');
         list1.next.next.next = new Node<Character>('D');
        Node<Character> list2 = new Node<Character>('X');
         list2.next = new Node<Character>('Y');
         list2.next.next = list1.next.next.next;
         list2.next.next.next = new Node('E');
         list2.next.next.next.next = new Node<Character>('F');
        Node<Character> x = (linkedListIntersection(list1,list2));
        System.out.println();
        System.out.println(x.hashCode());

    }

    static Node<Character> linkedListIntersection(Node<Character> list1,Node<Character> list2){
        ArrayList<Node<Character>> addressedList1 = new ArrayList<Node<Character>>();
        ArrayList<Node<Character>> addressedList2 = new ArrayList<Node<Character>>();
        Node<Character> p = list1;
        Node<Character> q = list2;
        while(p != null){
            addressedList1.add(p);
            p = p.next;
        }
        while(q != null){
            addressedList2.add(q);
            q = q.next;
        }
        addressedList1.forEach(node -> System.out.println(node.hashCode())); 
        System.out.println();
        addressedList2.forEach(node -> System.out.println(node.hashCode()));

        int length1 = addressedList1.size();
        int length2 = addressedList2.size();
        while(length2 >= 0){
            if(addressedList2.get(length2-1) != addressedList1.get(length1-1)){
                return addressedList2.get(length2);
            }else{
                length1--;
                length2--;
            }
        }
    return null;
    };

    static class Node<E> {
        Node(E value){
            this.value = value;
            this.next = null;
        }
        private E value;
        private Node<E> next;
    }
}