class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(value) {
    let newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }
    this.size++;
    return this;
  }
  pop() {
    if (this.size <= 1) {
      this.last = null;
      this.first = null;
      this.size = 0;
    } else {
      let poppedItem = this.first;
      this.first = poppedItem.next;
      poppedItem.next = null;
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
    arr[0] = `FIRST: ${arr[0]}`;
    arr[arr.length - 1] = `LAST: ${arr[arr.length - 1]}`;
    console.log(arr, "len", this.size);
    return arr;
  }
}

let newStack = new Stack();

// console.log(newStack);

newStack.push("one");
newStack.push("two");
newStack.push("three");
newStack.printAsArray();
newStack.pop();
newStack.pop();
newStack.pop();
newStack.pop();
newStack.printAsArray();
newStack.push("one");
newStack.push("two");
newStack.push("three");
newStack.push("ALSO!");
newStack.pop();
newStack.printAsArray();
