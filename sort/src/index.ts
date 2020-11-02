class Sorter {
  constructor(protected collection: number[]) {}

  sort(): number[] {
    const { length } = this.collection;
    for (let i = 0; i < length; i++) {
      for (let j = 0, k = 1; k < length - i; j++, k++) {
        const [x, y] = [this.collection[j], this.collection[k]];
        if (x > y) {
          this.collection[k] = x;
          this.collection[j] = y;
        }
      }
    }
    return this.collection;
  }
}

const array = [10, 3, -5, 0];
console.log(`Sorting ${array}`);
const sorter = new Sorter(array);
console.log(sorter.sort());
