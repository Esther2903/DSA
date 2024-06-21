// Do not use arrays!
export class Stack {
  constructor() {
    this.items=[];
  }
  push(value) {
    this.items.push(value);
  }

  pop() {
    if (this.items.length == 0){
      return 'Underflow'
    }
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }
}
