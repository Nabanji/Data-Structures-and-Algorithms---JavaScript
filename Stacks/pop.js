class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(value) {
    this.first = new Node(value);
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

  // pop() method - removing the last element
  pop() {
    if (this.length === 0) {
      return undefined;
    }
    let temp = this.first;
    this.first = this.first.next;
    temp.next = null;
    this.length--;
    return temp;
  }
}

const myStack = new Stack(0);
myStack.push(1);
myStack.push(2);
console.log(myStack);
console.log(myStack.pop());
console.log(myStack);
