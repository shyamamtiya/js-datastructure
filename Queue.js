class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = this.last = null;
    this.size = 0;
  }
  enqueue(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return this;
  }

  dequeue() {
    let temp = this.first;
    if (!this.first) {
      return null;
    } else {
      this.first = this.first.next;
    }
    this.size--;
    return temp.value;
  }
  print() {
    let currentNode = this.first;
    while (currentNode) {
      console.log("Queue:", currentNode.value);
      currentNode = currentNode.next;
    }
  }
}

const queue = new Queue();
queue
  .enqueue(1)
  .enqueue(2)
  .enqueue(3)
  .enqueue(4)
  .enqueue(5)
  .enqueue(6)
  .enqueue(7);

queue.print();
console.log("Dequee:", queue.dequeue());
queue.print();
