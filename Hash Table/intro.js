// Data structure used to store key-value pairs
// Hash function - acts like a translator, taking an input of any size (key) and converting it into a fixed-size value (hash code) that can be used as an index within the hash table's internal array. This process of mapping arbitrary-sized keys to fixed-length indices is called hashing.

class HashTable {
  constructor(size = 6) {
    this.keyMap = new Array(size);
  }

  _hashFunction(key) {
    let sum = 0;

    const PRIME_NUMBER = 31;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const charCode = key.charCodeAt(0) - 96;
      sum = (sum * PRIME_NUMBER + charCode) % this.keyMap.length;
    }

    return sum;
  }
}
