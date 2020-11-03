import { Greater } from "./Sorter";

export class SortableString {
  constructor(protected string: string) {}

  get length() {
    return this.string.length;
  }

  greaterIndexValue(j: number, k: number): Greater {
    const [x, y] = [this.string[j], this.string[k]];
    if (x.toLocaleLowerCase() > y.toLocaleLowerCase()) {
      return Greater.isLeft;
    } else if (y.toLocaleLowerCase() > x.toLocaleLowerCase()) {
      return Greater.isRight;
    }
    return Greater.neither;
  }

  swapIndexValues(j: number, k: number): void {
    const [x, y] = [this.string[j], this.string[k]];
    const characters = this.string.split("");
    characters[k] = x;
    characters[j] = y;
    this.string = characters.join("");
  }
}
