class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// let first = new Node("hi");
// first.next = new Node("there");
// first.next.next = new Node("how");
// first.next.next.next = new Node("are");
// first.next.next.next.next = new Node("you");

class SinglylinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    this.printAsArray();
    return this;
  }
  pop() {
    if (!this.head) return null;
    this.tail = null;
    let temp = this.head.next;
    let newTail = temp;
    while (temp.next) {
      newTail = temp;
      temp = temp.next;
    }
    newTail.next = null;
    this.tail = newTail;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    this.printAsArray();
    return temp;
  }

  shift() {
    if (!this.head) return null;
    let oldHead = this.head;
    this.head = oldHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    this.printAsArray();
    return oldHead;
  }

  unShift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    this.printAsArray();
    return this;
  }

  get(index) {
    let currentNode = this.head;
    let counter = 0;

    if (index < 0 || index >= this.length) {
      return null;
    }
    while (counter !== index) {
      counter++;
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  set(index, newVal) {
    let oldNode = this.get(index);
    if (!oldNode) {
      return false;
    } else {
      oldNode.val = newVal;
      this.printAsArray();
      return true;
    }
  }

  insert(index, val) {
    if (index === this.length - 1) {
      this.push(val);
      this.printAsArray();
      return true;
    }
    if (index === 0) {
      this.unShift(val);
      this.printAsArray();
      return true;
    }

    let previousNode = this.get(index - 1);
    let newNode = new Node(val);

    if (!previousNode || index === this.length) {
      return false;
    } else {
      newNode.next = previousNode.next;
      previousNode.next = newNode;
      this.length++;
      this.printAsArray();
      return true;
    }
  }

  remove(index = -1) {
    if (index === 0) return !!this.shift();
    if (index === this.length - 1) return !!this.pop();
    if (index < 0 || index >= this.length) return false;
    let firstNode = this.get(index - 1);
    let removed = firstNode.next;
    firstNode.next = this.get(index + 1 || null);
    this.length--;
    this.printAsArray();
    return removed;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let prev = null;
    let next;

    for (let i = 0; i < this.length; i++) {
      // assign the next node to the next from the head
      next = node.next;
      // node.next is actually previous (null initially)
      node.next = prev;
      // previous is now the initial node
      prev = node;
      node = next;
    }

    this.printAsArray();
    return this;
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

let list = new SinglylinkedList();

let newList = new SinglylinkedList();

newList.unShift("2");
newList.unShift("1");
newList.push("3");
newList.push("4");

newList.set(3, "four");

newList.insert(2, "2.5");

console.log(newList.insert(1, "tail"));

// console.log(newList.get(5).next);
console.log("================");
newList.reverse();
