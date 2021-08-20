class Node {
  constructor(val, priority) {
    this.value = val;
    this.priority = priority;
  }
}
class PriorityQueue {
  constructor() {
    this.values = [];
  }

  bubbleUp() {
    let newlyInsertedItemIndex = this.values.length - 1;
    const item = this.values[newlyInsertedItemIndex];

    while (newlyInsertedItemIndex > 0) {
      let parentIndex = Math.floor((newlyInsertedItemIndex - 1) / 2);
      let parent = this.values[parentIndex];
      if (parent.priority < item.priority) {
        this.values[parentIndex] = item; //swap parent and child
        this.values[newlyInsertedItemIndex] = parent; //swap parent and child
        newlyInsertedItemIndex = parentIndex; // //update  index for newParent
      } else {
        break;
      }
    }
  }

  enqueue(value, priority) {
    let newNode = new Node(value, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }

  dequeue() {
    if (!this.values.length) {
      return;
    }
    let length = this.values.length;
    let rootElement = this.values[0]; //get root element
    this.values[0] = this.values[length - 1]; // swap it with last element
    this.values.pop(); //remove last element
    let index = 0;
    let arr = this.values;
    length = this.values.length;
    let newRoot = this.values && this.values[0];
    while (index < length) {
      let leftChildIndex = 2 * index + 1; //get left child of current root node
      let rightChildIndex = 2 * index + 2; //get right child of current root node
      let leftChild, rightChild;
      if (leftChildIndex < length) {
        //check left child index (inbound)
        leftChild = arr[leftChildIndex];
      } else {
        leftChild = Number.MIN_VALUE;
      }
      if (rightChildIndex < length) {
        //check right child index (inbound)
        rightChild = arr[rightChildIndex];
      } else {
        rightChild = Number.MIN_VALUE;
      }
      if (
        (leftChild != Number.MIN_VALUE &&
          newRoot.priority < leftChild.priority) ||
        (rightChild != Number.MIN_VALUE &&
          newRoot.priority < rightChild.priority)
      ) {
        let temp =
          leftChild.priority > rightChild.priority ? leftChild : rightChild; //swap current root with left child or right child
        if (leftChild.priority > rightChild.priority) {
          // if left child is max then right child,swap it with left cild
          arr[leftChildIndex] = this.values[index];
          this.values[index] = temp;
          index = leftChildIndex;
        } else {
          // if right child is max then left child,swap it with right cild
          arr[rightChildIndex] = this.values[index];
          this.values[index] = temp;
          index = rightChildIndex;
        }
        newRoot = this.values[index];
      } else {
        break;
      }
    }

    return rootElement;
  }
}

let heap = new PriorityQueue();
heap.enqueue(41, 1);
heap.enqueue(39, 3);
heap.enqueue(33, 4);
heap.enqueue(18, 7);
heap.enqueue(27, 5);
heap.enqueue(12, 8);
heap.enqueue(55, 9);
console.log(heap.dequeue());

//prioriry is implemented using heap
