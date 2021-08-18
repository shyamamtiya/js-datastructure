class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.size = 0;
    this.first = this.last = null;
  }

  push(val) {
    var newNode = new Node(val);
    if (!this.first) {
      this.first = this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }
    ++this.size;
    return this;
  }

  pop() {
    if (!this.first) {
      return null;
    }
    let temp = this.first;
    if (this.first == this.last) {
      this.first = this.last = null;
    } else {
      this.first = this.first.next;
    }
    --this.size;
    return temp;
  }

  print() {
    let currentNode = this.first;
    while (currentNode) {
      console.log("Stack:", currentNode.value);
      currentNode = currentNode.next;
    }
  }
}

const stack = new Stack();

stack.push(1).push(2).push(3).push(4).push(5).push(6).push(7);
console.log("Popped element:", stack.pop());
stack.print();
