class Node {
  constructor(value) {
    this.head = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.tai;
    this.length = 1;
  }

  push(value) {
    let newNode = new Node(1);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
    }
    this.head.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  getLast() {
    if (!this.head) {
      return null;
    }

    let temp = this.head;

    while (temp) {
      if (!temp.next) {
        return temp;
      }
      temp = temp.next;
    }
  }
}

const myLinkedList = new LinkedList(0);
myLinkedList.push(1);
const lastNode = myLinkedList.getLast();
console.log(lastNode);
