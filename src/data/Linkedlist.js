import { Node } from "./Node.js";

export class Linkedlist {
    #count;
    #head;

    constructor() {
        this.#count = 0;
        this.#head = null;
    }

    push(item) {
        const node = new Node(item);
        let current;
        if (this.#head == null) {
            this.#head = node;
        } else {
            current = this.#head;
            while (current.getNext() != null) {
                current = current.getNext();
            }
            current.setNext(node);
        }
        this.#count++;
        console.log("Elemento añadido a la lista:", node);
    }

    getElementAt(index) {
        if (index >= 0 && index < this.#count) {
            let node = this.#head;
            for (let i = 0; i < index && node != null; i++) {
                node = node.getNext();
            }
            return node ? node.getData() : null;
        }
        return null;
    }

    size() {
        return this.#count;
    }

    imprimir() {
        let nodoActual = this.#head;
        while (nodoActual !== null) {
            console.log(nodoActual.getData());
            nodoActual = nodoActual.getNext();
        }
    }

    isEmpty() {
        return this.size() === 0;
    }
}
