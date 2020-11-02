class Sorter {
  constructor(protected collection: number[]) {}

  sort(): number[] {
    const { length } = this.collection;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        const [x, y] = [this.collection[j], this.collection[j + 1]];
        if (x > y) {
          this.collection[j + 1] = x;
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
