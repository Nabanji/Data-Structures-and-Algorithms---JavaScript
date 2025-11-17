//  shift() method
// REMOVING THE FIRST ELEMENT (node) OF A LINKED LIST

class Node {
  constructor(value) {
    this.head = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  // push value
  push(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  // unshift method
  unshift(value) {
    let newNode = new Node(value);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    }

    newNode.next = this.head;
    this.head = newNode;

    this.length++;
    return this;
  }

  // shift method
  shift() {
    if (!this.head) {
      return undefined;
    }

    // 1. Point the first node
    let temp = this.head;
    // 2. Move the head to the next node
    this.head = this.head.next;
    // 3. Remove the first element
    temp.next = null;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    return temp;
  }
}

let myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.unshift(3);
myLinkedList.shift();
console.log(myLinkedList);
