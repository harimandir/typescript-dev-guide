import { Sorter } from "./Sorter";

export class SortableString extends Sorter {
  constructor(protected data: string) {
    super();
  }

  get length() {
    return this.data.length;
  }

  toString(): string {
    return this.data;
  }

  greaterIndexValue(j: number, k: number): Sorter.Greater {
    const [x, y] = [this.data[j], this.data[k]];
    if (x.toLocaleLowerCase() > y.toLocaleLowerCase()) {
      return Sorter.Greater.isLeft;
    } else if (y.toLocaleLowerCase() > x.toLocaleLowerCase()) {
      return Sorter.Greater.isRight;
    }
    return Sorter.Greater.neither;
  }

  swapIndexValues(j: number, k: number): void {
    const [x, y] = [this.data[j], this.data[k]];
    const characters = this.data.split("");
    characters[k] = x;
    characters[j] = y;
    this.data = characters.join("");
  }
}
