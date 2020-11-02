interface Sortable {
  length: number;
  greaterIndexValue(j: number, k: number): Greater;
  swapIndexValues(j: number, k: number): void;
}

enum Greater {
  isLeft = -1,
  neither,
  isRight,
}

class Sorter {
  constructor(protected collection: Sortable) {}

  sort(): Sortable {
    const { length } = this.collection;
    for (let i = 0; i < length; i++) {
      for (let j = 0, k = 1; k < length - i; j++, k++) {
        if (this.collection.greaterIndexValue(j, k) == Greater.isLeft) {
          this.collection.swapIndexValues(j, k);
        }
      }
    }
    return this.collection;
  }
}

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

const array = new SortableNumberArray([10, 3, -5, 0]);
console.log(`Sorting ${array}`);
const sorter = new Sorter(array);
console.log(sorter.sort());
