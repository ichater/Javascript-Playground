class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return null;
    let poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail.prev.next = null;
      this.tail = this.tail.prev;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }

  shift() {
    if (!this.head) return null;
    let oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head.next.prev = null;
      this.head = this.head.next;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }

    this.length++;
    return this.head;
  }

  get(index) {
    if (!this.length || index < 0 || index >= this.length) return null;
    if (index > this.length / 2) {
      let cur = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        cur = cur.prev;
      }
      return cur;
    } else {
      let cur = this.head;
      for (let i = 0; i < index; i++) {
        cur = cur.next;
      }
      return cur;
    }
  }

  set(index, val) {
    let foundNode = this.get(index);

    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index === 0) return this.unshift(val);
    if (index === this.length - 1) return this.push(val);
    let newNode = new Node(val);
    let foundNode = this.get(index);
    if (foundNode) {
      newNode.next = foundNode;
      newNode.prev = foundNode.prev;
      foundNode.prev = newNode;
      newNode.prev.next = newNode;
      this.length++;
      return true;
    }
    return false;
  }

  remove(index) {
    if (!this.length || index < 0 || index >= this.length) return null;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    let deletedNode = this.get(index);
    deletedNode.prev.next = deletedNode.next;
    deletedNode.next.prev = deletedNode.prev;
    deletedNode.next = null;
    deletedNode.prev = null;
    this.length--;
    return true;
  }

  printAsArray() {
    let current = this.head;
    const arr = [];
    while (current) {
      current && arr.push(current.val);
      current = current.next;
    }
    console.log(arr, "len", this.length);
    return arr;
  }
}

let newList = new DoublyLinkedList();
newList.push("one");
newList.push("two");
newList.push("three");
newList.push("four");
newList.push("five");

newList.set(4, 4);
newList.printAsArray();

newList.insert(4, "NewNode");
newList.printAsArray();
newList.remove(5);
newList.printAsArray();
