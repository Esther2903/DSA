class Node{
  constructor(value){
    this.value=value;
    this.left=null;
    this.right=null;
  }
}
export class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root=newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode){
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  // Breadth-first search
  BFS(visitor) {
    let queue = [];
    if (this.root !== null) {
      queue.push(this.root);
    }

    while (queue.length > 0) {
      let node = queue.shift();
      visitor(node.value);

      if (node.left !== null) {
        queue.push(node.left);
      }
      if (node.right !== null) {
        queue.push(node.right);
      }
    }

  }

  // Pre-order depth-first search
  preOrderDFS(visitor) {
    this.preOrder(this.root, visitor)
  }

  preOrder(node, visitor) {
    if (node !== null) {
      visitor(node.value);
      this.preOrder(node.left, visitor);
      this.preOrder(node.right, visitor);
    }
  }

  // In-order depth-first search
  inOrderDFS(visitor) {
    this.inOrder(this.root, visitor);
  }

  inOrder(node, visitor) {
    if (node !== null) {
      this.inOrder(node.left, visitor);
      visitor(node.value);
      this.inOrder(node.right, visitor);
    }
  }

  // Post-order depth-first search
  postOrderDFS(visitor) {
    this.postOrder(this.root, visitor);

  }

  postOrder(node, visitor) {
    if (node !== null) {
      this.postOrder(node.left, visitor);
      this.postOrder(node.right, visitor);
      visitor(node.value);
    }
  }

  get(value) {
    const node =  this.searchNode(this.root, value)
    return node ? node.value : null;
  }

  searchNode(node, value) {
    if (node === null) {
      return null;
    }
    if (value < node.value) {
      return this.searchNode(node.left, value);
    } else if (value > node.value) {
      return this.searchNode(node.right, value);
    } else {
      return node;
    }
  }
}
