class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let temp = this.root;

    while (true) {
      if (newNode.value === temp.value) return undefined;

      if (newNode.value < temp.value) {
        if (!temp.left) {
          temp.left = newNode;
          return this;
        } else {
          temp = temp.left;
        }
      } else {
        if (!temp.right) {
          temp.right = newNode;
          return this;
        } else {
          temp = temp.right;
        }
      }
    }
  }
}

const tree = new BST();
tree.insert(1);
tree.insert(2);
tree.insert(0);
console.log(tree);
