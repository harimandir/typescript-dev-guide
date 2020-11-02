type Sortable = number[] | string;

class Sorter {
  constructor(protected collection: Sortable) {}

  sort(): Sortable {
    const { length } = this.collection;
    for (let i = 0; i < length; i++) {
      for (let j = 0, k = 1; k < length - i; j++, k++) {
        this.sortArrayPair(j, k);
        this.sortCharPair(j, k);
      }
    }
    return this.collection;
  }

  private sortArrayPair(j: number, k: number): void {
    // This type guard makes sure that this block of
    // code will only run if this.collection is a number[]
    if (this.collection instanceof Array) {
      const [x, y] = [this.collection[j], this.collection[k]];
      if (x > y) {
        this.collection[k] = x;
        this.collection[j] = y;
      }
    }
  }

  private sortCharPair(j: number, k: number): void {
    // This is not a good approach because we would
    // have to add to the implementations for each new
    // input type we want to support
    if (typeof this.collection == "string") {
      // compare
      // swap if needed
    }
  }
}

const array = [10, 3, -5, 0];
console.log(`Sorting ${array}`);
const sorter = new Sorter(array);
console.log(sorter.sort());
