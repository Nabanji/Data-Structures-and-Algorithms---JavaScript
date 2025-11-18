class Node {
  constructor(value) {
    this.data = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }
}

const myLinkedList = new DoublyLinkedList(0);
console.log(myLinkedList);
