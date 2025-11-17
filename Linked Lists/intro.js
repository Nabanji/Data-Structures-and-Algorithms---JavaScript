// Creating a node for the Linked List
class Node {
  constructor(value) {
    this.head = value;
    this.next = null;
  }
}

// Creating a linked list of one element
class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }
}

const myLinkedList = new LinkedList(1);
console.log(myLinkedList);
