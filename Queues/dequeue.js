// dequeue = removing the last element from a queue
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

  dequeue() {
    if (this.length === 0) {
      return undefined;
    }
    let temp = this.first;
    if (this.length === 1) {
      this.first = null;
      this.last = null;
    }
    this.first = this.first.next;
    this.temp = null;
    this.length--;
    return temp;
  }
}

const myQueue = new Queue(0);
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.dequeue();
console.log(myQueue);
