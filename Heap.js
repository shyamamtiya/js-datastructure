class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  bubbleUp() {
    let newlyInsertedItemIndex = this.values.length - 1;
    const item = this.values[newlyInsertedItemIndex];

    while (newlyInsertedItemIndex > 0) {
      let parentIndex = Math.floor((newlyInsertedItemIndex - 1) / 2);
      let parent = this.values[parentIndex];
      if (parent < item) {
        this.values[parentIndex] = item; //swap parent and child
        this.values[newlyInsertedItemIndex] = parent; //swap parent and child
        newlyInsertedItemIndex = parentIndex; // //update  index for newParent
      } else {
        break;
      }
    }
  }

  insert(node) {
    this.values.push(node);
    this.bubbleUp();
  }

  extractMax() {
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
        (leftChild != Number.MIN_VALUE && newRoot < leftChild) ||
        (rightChild != Number.MIN_VALUE && newRoot < rightChild)
      ) {
        let temp = leftChild > rightChild ? leftChild : rightChild; //swap current root with left child or right child
        if (leftChild > rightChild) {
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

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
console.log(heap.extractMax());

console.log(heap.values);
// get parentIndex by (index - 1 )/2
//get childIndex by (leftchild = 2* Index + 1) ,(rightchild = 2 * Index + 2)

//extractMax pseudo code
// 1.get first element from list
// 2.swap last element with first element from list
// 3.remove last element from list
// 4. check current root node i.e. first element of list
//     if left child is max (leftchild = 2* Index + 1)
//         swap it with current root node
//     if right child is max (rightchild = 2 * Index + 2)
//         swap is with current node

//     otherwise
//         break
