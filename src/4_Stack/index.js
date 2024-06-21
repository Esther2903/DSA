// Do not use arrays!
class Node {
  constructor(value) {
    this.value=value;
    this.next=null;
  }
}
export class Stack {
  constructor() {
    this.first=null;
  }

  push(value) {
    const newNode = new Node(value);
    if(!this.first) {
      this.first = newNode;
    }
    else{
      newNode.next = this.first;
      this.first = newNode;
    }
  }

  pop() {
    if(!this.first) {
      return null;
    }
    else {
      const popcurrentNode = this.first.value;
      this.first = this.first.next;
      return popcurrentNode;
    }
  }

  peek() {
    if(!this.first){
      return null;
    }
    else{
     return this.first.value;
    }
  }
}
