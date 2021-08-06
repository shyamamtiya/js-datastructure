# js-datastructure

1.SinglyLink list implementation using js 
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this.length;
  }

  pop() {
    if (!this.head) {
      //link list is empty
      return undefined;
    }
    let temp = this.head; // current pointer for loop
    let newTail = this.head;
    while (temp.next) {
      newTail = temp; // previous value for new tail
      temp = temp.next;
    }
    this.tail = newTail; //new tail updated
    this.tail.next = null; // delinked last element
    this.length--;
    if (!this.length) {
      this.head = this.tail = null;
    }
    return this.temp; //removed element
  }

  //remove element from the beginning
  shift() {
    if (!this.head) {
      return;
    }
    let oldHead = this.head;
    this.head = oldHead.next;
    this.length--;
    if (!this.length) {
      this.head = this.tail = null;
    }
    return oldHead;
  }

  //add element to the beginning
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    //get element by given index
    if (index < 0 || index >= this.length) {
      return null;
    }
    let count = 0;
    let temp = this.head;
    while (count != index) {
      count++;
      temp = temp.next;
    }
    return temp;
  }
  set(index, value) {
    //set element by given index
    let foundNode = get(index);
    if (foundNode) {
      foundNode.value = value;
      return true;
    }
    return false;
  }

  //insert a new node to the given index
  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index == 0) {
      //beginning of the list
      this.unshift(value);
      return true;
    } else if (index == this.length) {
      //end of the list
      this.push(val);
      return true;
    } else {
      // add node in between
      let previousNode = this.get(index - 1);
      let node = new Node(); // create a new node
      node.value = value; //update value
      node.next = previousNode.next; // update new node pointer(next) with new previous node
      previousNode.next = node; //update previous node pointer(nexxt) with newly created node
      this.length++; //increment the length
      return true;
    }
  }

  remove(index) {
    if (index < 0 || index >= this.length) return false;
    if (index == 0) {
      //beginning of the list
      return this.shift();
    } else if (index == this.length - 1) {
      //end of the list
      return this.pop();
    } else {
      // remove node in between
      let previousNode = this.get(index - 1);
      let removedNode = previousNode.next;
      previousNode.next = removedNode.next; //skip one node
      this.length--; //decrement the length
      return removedNode;
    }
  }

  reverse() {
    let currentNode = this.head;
    this.head = this.tail;
    this.tail = currentNode;
    let nextNode;
    let previousNode = null; //previous node
    while (currentNode.next) {
      //currentNode
      nextNode = currentNode.next;
      currentNode.next = previousNode;
      previousNode = currentNode;
      currentNode = nextNode;
    }
    return this;
  }
}

let list = new SinglyLinkList();

list.push("1");
list.push("2");
list.push("3");
list.push("4");
list.push("5");
list.push("6");

// list : 1-->2-->3-->4-->5-->6

list.pop();
// list : 1-->2-->3-->4-->5
list.pop();
// list : 1-->2-->3-->4
list.length; //4

list.shift(); //1
// list : 2-->3-->4

list.unshift(1); // list : 1-->2-->3-->4

list.get(0);
// Node {value: 1, next: Node}

list.insert(1, 33); // list : 1-->33-->2-->3-->4
