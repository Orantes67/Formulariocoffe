export class Node {
  #data;
  #next;
  #prev;

  constructor(data) {
      this.#data = data;
      this.#next = null;
      this.#prev = null;
  }

  getData() {
      return this.#data;
  }

  setElement(data) {
      this.#data = data;
  }

  getNext() {
      return this.#next;
  }

  setNext(node) {
      this.#next = node;
  }

  getPrev() {
      return this.#prev;
  }

  setPrev(node) {
      this.#prev = node;
  }
}
