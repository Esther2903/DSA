class Node {

  constructor(value) {
    this.value = value;
    this.children = [];
  }

  insert(value) {
    const newNode = new Node(value);
    this.children.push(newNode);
    return newNode;
  }
}

export class Tree {
  constructor() {
    this.root = null;
  }
  // Return the newly inserted node/sub-tree
  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
    }
    return newNode;
  }

  // Breadth-first search
  BFS(visitor) {
    if (!this.root) return;

    const queue = [this.root];
    while (queue.length > 0) {
      const node = queue.shift();
      visitor(node.value);
      queue.push(...node.children);
    }
  }

  // Pre-order depth-first search
  preOrderDFS(visitor) {
    this.preOrder(this.root, visitor);
  }

  preOrder(node, visitor) {
    if (!node) return;
    visitor(node.value);
    node.children.forEach(child => this.preOrder(child, visitor));
  }

  // Post-order depth-first search
  postOrderDFS(visitor) {
    this.postOrder(this.root, visitor);
  }

  postOrder(node, visitor) {
    if (!node) return;
    node.children.forEach(child => this.postOrder(child, visitor));
    visitor(node.value);
  }
}
