export interface Sortable {
  length: number;
  greaterIndexValue(j: number, k: number): Greater;
  swapIndexValues(j: number, k: number): void;
}

export enum Greater {
  isLeft = -1,
  neither,
  isRight,
}

export class Sorter {
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
