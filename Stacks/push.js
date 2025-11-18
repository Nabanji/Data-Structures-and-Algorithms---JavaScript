class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(value) {
    const newNode = new Node(value);
    this.first = newNode;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.length++;
    }
    newNode.next = this.first;
    this.first = newNode;
    this.length++;
    return this;
  }
}

let myStack = new Stack(0);
myStack.push(1);
myStack.push(2);
console.log(myStack);
