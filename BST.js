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
  BFS() {
    let visited = [];
    let queue = [];
    if (!this.root) {
      return visited;
    }
    queue.push(this.root);
    while (queue.length) {
      let currentNode = queue.shift();
      visited.push(currentNode.value);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    return visited;
  }

  DFSPreOrder() {
    let visited = [];
    let currentNode = this.root;
    if (!currentNode) {
      return visited;
    }

    function traverse(node) {
      visited.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(currentNode);
    return visited;
  }

  DFSPostOrder() {
    let visited = [];
    let currentNode = this.root;
    if (!currentNode) {
      return visited;
    }

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      visited.push(node.value);
    }
    traverse(currentNode);
    return visited;
  }

  DFSInOrder() {
    let visited = [];
    let currentNode = this.root;
    if (!currentNode) {
      return visited;
    }

    function traverse(node) {
      if (node.left) traverse(node.left);
      visited.push(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(currentNode);
    return visited;
  }
}

const tree = new BST();
tree.insert(10).insert(6).insert(15).insert(3).insert(8).insert(20);
// console.log(tree.find(10));
console.log(tree.BFS());
console.log(tree.DFSPreOrder());
console.log(tree.DFSPostOrder());
console.log(tree.DFSInOrder());

// BFS -- use it for left skew or right skew tree (space complefixty will be 1 in this case);
//BFS/DFS  time complexity same in both cases
