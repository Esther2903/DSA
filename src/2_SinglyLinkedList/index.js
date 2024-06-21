// Do not use arrays!
class Node {
  constructor(value){
    this.value=value
    this.next=null
  }
}
export class SinglyLinkedList {
  constructor(){
    this.head = null;
  }
  prepend(value) {
    const newNode = new Node(value)
    if (!this.head) {
        this.head = newNode;
    }else{
      newNode.next = this.head;
      this.head = newNode;
      
    }
  }

  append(value) {
    let newNode = new Node(value);
    if (!this.head) {
        this.head = newNode
    }else{
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
  }

  insertAt(index, value) {
    let newNode = new Node(value)
    if (index === 0) {
      this.head = newNode;
      newNode.next = this.head;
    }
    else{
      let currentIndex = 0;
      let previousNode = null;
      let currentNode = this.head;
      while (currentIndex < index) {
        previousNode = currentNode;
        currentNode = currentNode.next
        currentIndex++;
      }
      previousNode.next = newNode;
      newNode.next = currentNode;
    }
  }

  removeLast() {
    if (!this.head) {
      return null;
    }
    else if(!this.head.next){
      this.head = null
    }
    let currentNode = this.head;
    let previousNode = null;
    while (currentNode.next) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    if (previousNode) {
      previousNode.next = null;
    }
  }
  

  removeFirst() {
    if (!this.head) {
        return null;
    }else{
      this.head = this.head.next;      
    }
  }

  removeAt(index, value) {
    if (index === 0) {
      this.head = this.head.next;
    }
    else{
      let currentIndex = 0;
      let previousNode = null;
      let currentNode = this.head;
      while (currentIndex < index) {
        previousNode = currentNode;
        currentNode = currentNode.next
        currentIndex++;
      }
      previousNode.next = currentNode.next;
    }
  }

  find(value) {
    let currentNode = this.head;
    while (currentNode) {
      if(currentNode.value === value){
        return currentNode.value;
      }
      currentNode = currentNode.next;
    }
    return null;
  
  }

  getFirst() {
    if (!this.head) {
      return null;
    } 
    return this.head.value;
  }

  getLast() {
    if (!this.head) {
      return null;
    } 
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    return currentNode.value;
  }

  getAt(index) {
    if(index < 0) {
      return null;
    }
    let currentIndex = 0;
    let currentNode = this.head;
    while (currentNode) {
      if(currentIndex === index){
        return currentNode.value;
      }
      currentNode = currentNode.next;
      currentIndex++;
    }
  }
}
