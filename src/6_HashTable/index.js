export class HashTable {
  constructor(bucketsNum = 10) {
    this.bucketsNum = bucketsNum;
    this.buckets = Array.from({length: bucketsNum}, () => []);
    this.numItems = 0;
  }

  get size() {
    return this.numItems;
  }

  #hash(key) {
    let hash = 0;
    for (let i = 0; i< key.length; i++) {
      hash += key.charCodeAt(i);    
    }
    return hash % this.bucketsNum;
  }

  set(key, value) {
    const index = this.#hash(key);
    const bucket = this.buckets[index];
    for (let i = 0; i < bucket.length; i++) {
      const [storedKey, storedValue] = bucket[i];
      if(storedKey === key) {
        bucket[i] = [key, value];
        return;
      } 
    }
    bucket.push([key,value]);
    this.numItems++;
  }

  get(key) {
    const index = this.#hash(key);
    const bucket = this.buckets[index];
    for (let i = 0; i < bucket.length; i++) {
      const [storedKey, storedValue] = bucket[i];
      if(storedKey === key) {
        return storedValue;
      } 
    }
    return null;
  }

  remove(key) {
    const index = this.#hash(key);
    const bucket = this.buckets[index];
    for (let i = 0; i < bucket.length; i++) {
      const [storedKey, storedValue] = bucket[i];
      if(storedKey === key) {
        bucket.splice(i,1);
        this.numItems--;
        return true;
      } 
    }
    return false; 
  } 
}
