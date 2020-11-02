class Sorter {
  constructor(protected collection: number[]) {}

  sort(): number[] {
    return this.collection;
  }
}

const sorter = new Sorter([10, 3, -5, 0]);
console.log(sorter.sort());
