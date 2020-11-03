import { Sorter } from "./Sorter";

export class SortableNumbers extends Sorter {
  constructor(protected data: number[]) {
    super();
  }

  get length() {
    return this.data.length;
  }

  toString(): string {
    return this.data.toString();
  }

  greaterIndexValue(j: number, k: number): Sorter.Greater {
    const [x, y] = [this.data[j], this.data[k]];
    if (x > y) {
      return Sorter.Greater.isLeft;
    } else if (x < y) {
      return Sorter.Greater.isRight;
    }
    return Sorter.Greater.neither;
  }

  swapIndexValues(j: number, k: number): void {
    const [x, y] = [this.data[j], this.data[k]];
    this.data[k] = x;
    this.data[j] = y;
  }
}
