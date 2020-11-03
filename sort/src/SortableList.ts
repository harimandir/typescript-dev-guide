import { Greater } from "./Sorter";

export class NumberList {
  head: Node | null = null;

  add(val: number): void {
    const node = new Node(val);

    if (!this.head) {
      this.head = node;
      return;
    }

    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }
    tail.next = node;
  }

  get length(): number {
    let length = 0;
    if (!this.head) {
      return length;
    }
    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
      length++;
    }
    return length;
  }

  at(index: number): Node {
    let position = 0;
    if (!this.head) {
      throw new Error("List is empty");
    }

    let node: Node | null = this.head;
    while (node.next) {
      if (position === index) {
        return node;
      }
      position++;
      node = node.next;
    }

    if (position < index) {
      throw new Error("Index out of bounds");
    }
    return node;
  }

  toString(): string {
    let numbers = [];
    let node = this.head;
    while (node) {
      numbers.push(node.val);
      node = node.next;
    }
    return numbers.toString();
  }
}

class Node {
  next: Node | null = null;
  constructor(public val: number) {}
}

export class SortableList {
  constructor(protected list: NumberList) {}

  get length(): number {
    return this.list.length;
  }

  toString(): string {
    return this.list.toString();
  }

  greaterIndexValue(j: number, k: number): Greater {
    const [x, y] = [this.list.at(j).val, this.list.at(k).val];
    if (x > y) {
      return Greater.isLeft;
    } else if (x < y) {
      return Greater.isRight;
    }
    return Greater.neither;
  }

  swapIndexValues(j: number, k: number): void {
    const [x, y] = [this.list.at(j), this.list.at(k)];
    const val = x.val;
    x.val = y.val;
    y.val = val;
  }
}
