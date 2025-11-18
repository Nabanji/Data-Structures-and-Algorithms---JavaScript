// enqueueing() = adding an element to the end of the queue

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

  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    }
    this.last.next = newNode;
    this.last = newNode;
    this.length++;
    return this;
  }
}

const myQueue = new Queue(0);
myQueue.enqueue(1);
myQueue.enqueue(2);
console.log(myQueue);
