class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) {
      return undefined;
    }
    let temp = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }
    this.tail = this.tail.prev;
    this.tail.next = null;
    temp.prev = null;
    this.length--;
    return temp;
  }
}

const myLinkedList = new DoublyLinkedList(0);
myLinkedList.push(1);
myLinkedList.push(2);
console.log(myLinkedList.pop());
