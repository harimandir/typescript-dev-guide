import { Sorter, Sortable, Greater } from "./Sorter";

class SortableNumberArray {
  length: number;
  constructor(protected array: number[]) {
    this.length = array.length;
  }

  greaterIndexValue(j: number, k: number): Greater {
    const [x, y] = [this.array[j], this.array[k]];
    if (x > y) {
      return Greater.isLeft;
    } else if (x < y) {
      return Greater.isRight;
    }
    return Greater.neither;
  }

  swapIndexValues(j: number, k: number): void {
    const [x, y] = [this.array[j], this.array[k]];
    this.array[k] = x;
    this.array[j] = y;
  }
}

const array = [10, 3, -5, 0];
console.log(`Sorting ${array}`);
const sorter = new Sorter(new SortableNumberArray(array));
console.log(sorter.sort());
