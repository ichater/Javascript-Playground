class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enQueue(value) {
    let newNode = new Node(value);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;
    return this;
  }

  deQueue() {
    if (this.size <= 1) {
      this.first = null;
      this.last = null;
      this.size = 0;
    } else {
      let deQeueNode = this.first;
      this.first = deQeueNode.next;
      deQeueNode.next = null;
      this.size--;
    }
    return this;
  }

  printAsArray() {
    let current = this.first;
    const arr = [];
    while (current) {
      current && arr.push(current.value);
      current = current.next;
    }

    console.log(arr, "len", this.size);
    return arr;
  }
}

let newQueue = new Queue();

newQueue.enQueue("one");
newQueue.enQueue("two");
newQueue.enQueue("three");
newQueue.printAsArray();

newQueue.deQueue();
newQueue.printAsArray();
newQueue.enQueue("new");
newQueue.printAsArray();
newQueue.deQueue();
newQueue.deQueue();

newQueue.printAsArray();
console.log(newQueue);
