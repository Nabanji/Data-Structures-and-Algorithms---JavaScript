class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

class Queue {
  constructor(value) {
    const newNode = new Node(value);
    this.first = newNode;
    this.last = newNode;
    this.length = 1;
  }
}

const myQueue = new Queue(0);
console.log(myQueue);
