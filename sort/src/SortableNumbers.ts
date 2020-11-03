import { Greater } from "./Sorter";

export class SortableNumbers {
  constructor(protected numbers: number[]) {}

  get length() {
    return this.numbers.length;
  }

  toString(): string {
    return this.numbers.toString();
  }

  greaterIndexValue(j: number, k: number): Greater {
    const [x, y] = [this.numbers[j], this.numbers[k]];
    if (x > y) {
      return Greater.isLeft;
    } else if (x < y) {
      return Greater.isRight;
    }
    return Greater.neither;
  }

  swapIndexValues(j: number, k: number): void {
    const [x, y] = [this.numbers[j], this.numbers[k]];
    this.numbers[k] = x;
    this.numbers[j] = y;
  }
}
