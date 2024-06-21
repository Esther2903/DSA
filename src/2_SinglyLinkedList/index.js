// Do not use arrays!
class Node {
  constructor(value){
    this.value=value
    this.next=null
  }
}
export class SinglyLinkedList {
  constructor(){
    this.head = null
  }
  prepend(value) {
    const newNode = new Node(value)
    if (!this.head) {
        this.head = newNode
    }else{
      newNode.next = this.head
      this.head = newNode
      
    }
  }

  append(value) {
    let newNode = new Node(value)
    if (!this.head) {
        this.head = newNode
        newNode.next = null
    }else{
      let currentNode = this.head 
      while (currentNode) {
        currentNode = currentNode.next
      }
      currentNode.next = newNode
    }
  }

  insertAt(index, value) {
    let newNode = new Node(value)
    if (!this.head) {
      this.head = newNode
      newNode.next = null
    }
    else{

    }
  }

  removeLast() {}

  removeFirst() {}

  removeAt(index, value) {}

  find(value) {}

  getFirst() {
    
  }

  getLast() {}

  getAt(index) {}
}
