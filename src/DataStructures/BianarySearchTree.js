// let newTree = new BST();

// Array.from(Array(100), (_, index) => index + 1).forEach((val) =>
//   newTree.insert(Math.floor(Math.random() * 50))
// );

// newTree.printTree();

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
    let newNode = new Node(value);
    if (this.root) {
      let cur = this.root;
      while (true) {
        if (newNode.value > cur.value) {
          if (!cur.right) {
            cur.right = newNode;
            break;
          } else {
            cur = cur.right;
          }
        } else if (newNode.value === cur.value) {
          break;
        } else {
          if (!cur.left) {
            cur.left = newNode;
            break;
          } else {
            cur = cur.left;
          }
        }
      }
    } else {
      this.root = newNode;
    }
    return this;
  }

  search(value) {
    if (this.root) {
      let cur = this.root;
      while (value !== cur.value) {
        if (value > cur.value) {
          if (!cur.right) {
            return false;
          }
          cur = cur.right;
        } else {
          if (!cur.left) {
            return false;
          }
          cur = cur.left;
        }
      }

      return cur;
    } else {
      return null;
    }
  }

  printTree() {
    let cur = this.root;
    let returnArr = [[cur]];

    for (let i = 0; i < returnArr.length; i++) {
      let nextArr = [];
      for (let j = 0; j < returnArr[i].length; j++) {
        if (returnArr[i][j]) {
          let curNode = returnArr[i][j];
          curNode.left && nextArr.push(curNode.left);
          curNode.right && nextArr.push(curNode.right);
        }
      }
      if (nextArr.length) {
        returnArr.push(nextArr);
      } else {
        break;
      }
    }

    console.log(returnArr.map((arr) => arr.map((node) => node.value)));
  }

  BFS() {
    if (!this.root) return [];
    let queue = [this.root],
      data = [],
      cur;
    while (queue.length) {
      cur = queue.shift();
      data.push(cur.value);
      if (cur.left) queue.push(cur.left);
      if (cur.right) queue.push(cur.right);
    }
    return data;
  }

  DFSPreOrder() {
    if (!this.root) return [];
    let nodesVisited = [];
    let cur = this.root;

    function traverse(node) {
      nodesVisited.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(cur);
    return nodesVisited;
  }

  DFSPostOrder() {
    if (!this.root) return [];
    let nodesVisited = [];
    let cur = this.root;

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      nodesVisited.push(node.value);
    }

    traverse(cur);
    return nodesVisited;
  }

  DFSInOrder() {
    if (!this.root) return [];
    let nodesVisited = [];
    let cur = this.root;

    function traverse(node) {
      if (node.left) traverse(node.left);
      nodesVisited.push(node.value);
      if (node.right) traverse(node.right);
    }

    traverse(cur);
    return nodesVisited;
  }
}

let tree = new BST()
  .insert(10)
  .insert(15)
  .insert(7)
  .insert(9)
  .insert(1)
  .insert(2)
  .insert(3)
  .insert(4)
  .insert(5)
  .insert(111)
  .insert(12)
  .insert(13)
  .insert(14)
  .insert(15)
  .insert(1.5)
  .insert(1.5)
  .insert(2.5)
  .insert(2.75)
  .insert(9.5)
  .insert(8);
// tree.printTree();

let newTree = new BST()
  .insert(10)
  .insert(6)
  .insert(15)
  .insert(3)
  .insert(8)
  .insert(20)
  .insert(13);

console.log(newTree.BFS());
console.log(newTree.DFSPreOrder());
console.log(newTree.DFSPostOrder());
console.log(newTree.DFSInOrder());
// newTree.printTree();
