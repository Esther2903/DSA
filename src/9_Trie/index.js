class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}
export class Trie {
  constructor() {
    this.root = new TrieNode();
  }
  insert(word) {
    let node = this.root;
    for (const char of word) {
      if(!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];  
    }
    node.isEndOfWord = true;
  }

  retrieve(word) {
    let node = this.root;
    for (const char of word) {
      if (!node.children[char]) {
        return [];
      }
      node = node.children[char];
    }
    return this.retrieveWords(node, word)
  }

  retrieveWords(node, word) {
    let words = []; 
    if (node.isEndOfWord) {
      words.push(word);
    }
    for (let char in node.children) {
      words = words.concat(this.retrieveWords(node.children[char], word + char));
    }
    return words;
  }
}
