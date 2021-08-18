class Node {
  constructor(value) {
    this.value = value;
    this.prev = this.next = null;
  }
}

class DoublyLinkList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
      this.length++;
    } else {
      let tempNode = this.tail;
      this.tail.next = node;
      node.prev = tempNode;
      this.tail = node;
      this.length++;
    }
    return this;
  }

  pop() {
    if (!this.head) {
      return undefined;
    } else if (this.length == 1) {
      this.head = this.tail = null;
      this.length--;
      return this.length;
    } else {
      let newTail = this.tail.prev;
      newTail.next = null;
      this.tail = newTail;
      this.length--;
      return this.length;
    }
  }

  //add element to the beggining of list
  unshift(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this.length;
  }

  shift() {
    if (!this.head) {
      return;
    } else if (this.length == 1) {
      this.head = this.tail = null;
    } else {
      let newHead = this.head.next;
      newHead.prev = null;
      this.head = newHead;
    }
    this.length--;
    return this.length;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    let counter = 0;
    if (index < this.length / 2) {
      let currentNode = this.head;
      while (currentNode) {
        let tempNode = currentNode;
        if (index == counter) {
          return tempNode;
        }
        counter++;
        currentNode = currentNode.next;
      }
    } else {
      let currentNode = this.tail;
      let newIndex = this.length - index - 1;
      while (currentNode) {
        let tempNode = currentNode;
        if (newIndex == counter) {
          return tempNode;
        }
        counter++;
        currentNode = currentNode.prev;
      }
    }
  }

  set(value, index) {
    let node = this.get(index);
    if (node) {
      node.value = value;
      return true;
    }
    return false;
  }

  print() {
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }

  insert(value, index) {
    if (index < 0 || index >= this.length) return false;
    if (index == 0) {
      this.unshift(value);
      return true;
    } else if (index == this.length) {
      this.push(value);
      return true;
    } else {
      let foundNode = this.get(index - 1);
      if (foundNode) {
        let newNode = new Node(value);
        newNode.next = foundNode.next;
        newNode.prev = foundNode;
        foundNode.next = newNode;
        this.length++;
        return true;
      }
    }
  }

  remove(index) {
    if (index < 0 || index >= this.length) return false;
    if (index == 0) {
      this.shift();
      return true;
    } else if (this.length - 1 == index) {
      this.pop();
      return true;
    } else {
      let foundNode = this.get(index);
      if (foundNode) {
        foundNode.prev.next = foundNode.next;
        foundNode.prev = foundNode.next = null;
        this.length--;
      }
      return true;
    }
  }

  reverse() {
    if (!this.length) {
      return false;
    } else {
      let currentNode = this.head;
      while (currentNode) {
        let tempNode = currentNode.next;
        currentNode.next = currentNode.prev;
        currentNode.prev = tempNode;
        currentNode = currentNode.prev;
      }
      let tempNode = this.head;
      this.head = this.tail;
      this.tail = tempNode;
    }
  }
}

const list = new DoublyLinkList();

list.push(99).push(199).push(299).push(399).push(499).push(599);
list.reverse();
list.print();
