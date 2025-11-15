class MyArray {
  // Constructor to create an instance of the class
  constructor() {
    this.length = 0;
    this.data = {};
  }

  // Adding an element to the Array
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  get(index) {
    return this.data[index];
  }

  // Removing the last element in the array
  pop() {
    const lastElement = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastElement;
  }

  // Removing the first element from the array
  shift() {
    const firstElement = this.data[0];
    // re-indexing of the values in the array
    for (let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return firstElement;
  }

  // deleting elements in the array by index
  deleteByIndex(index) {
    const elementToRemove = this.data[index];
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return elementToRemove;
  }
}

const myNewArray = new MyArray();

myNewArray.push("orange");

myNewArray.push("apple");

myNewArray.push("mango");

// myNewArray.pop();

// myNewArray.shift();

// console.log(myNewArray);

// console.log(myNewArray.shift());

console.log(myNewArray.deleteByIndex(1));

console.log(myNewArray);
