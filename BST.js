class Node {
  constructor(value) {
    this.value = value;
    this.left = this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let currentNode = this.root;
      while (true) {
        if (currentNode.value == value) {
          return;
        }
        if (currentNode.value < value) {
          if (currentNode.right == null) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        } else {
          if (currentNode.left == null) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        }
      }
    }
  }

  find(value) {
    if (!this.root) {
      return false;
    } else {
      let currentNode = this.root;
      let foundNode = false;
      while (currentNode && !foundNode) {
        //currentNode -> if item is not available in the tree then loop should break
        if (value < currentNode.value) {
          currentNode = currentNode.left;
        } else if (value > currentNode.value) {
          currentNode = currentNode.right;
        } else {
          foundNode = true;
        }
      }
      return currentNode;
    }
  }
}

const tree = new BST();
console.log(tree.insert(10).insert(9).insert(15).insert(3));
console.log(tree.find(10));
