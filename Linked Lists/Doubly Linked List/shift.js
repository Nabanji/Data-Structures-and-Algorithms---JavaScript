// unshift() method
// ADDING A NODE TO THE BEGINNING OF A LINKED LIST

class Node {
  constructor(value) {
    this.head = value;
    this.next = null;
    this.prev = null;
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
    newNode.prev = this.tail;
    this.tail = newNode;
    this.length++;
  }

  //   unshift method - add a new node to the  beginning of the linked list
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

  // Removing the first node from a linked list
  shift() {
    let temp = this.head;

    if (this.length === 0) {
      return undefined;
    }

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }

    this.head = this.head.next;
    this.head.prev = null;
    temp.next = null;
    this.length--;
    return temp;
  }
}

let myLinkedList = new LinkedList(1);
myLinkedList.push(2);
console.log(myLinkedList);
console.log(myLinkedList.shift());
// console.log(myLinkedList.shift());
console.log(myLinkedList);
