// Do not use arrays!
class Node {
  constructor(value) {
    this.value=value;
    this.next=null;
  }
}
export class Queue {
  constructor() {
    this.first=null;
    this.last=null
  }
  enqueue(value) {
    const newNode = new Node(value);
    if(!this.first) {
      this.first = newNode;
      this.last = newNode;
    }
    else{
      this.last.next = newNode;
      this.last = newNode;
    }
  }

  dequeue() {
    if(!this.first) {
      return null;
    }
    else {
      const value = this.first.value;
      this.first = this.first.next;
      if (!this.first) {
        this.last = null;
      }
      return value;
    }
  }

  peek() {
    return this.first.value;
  }
}
