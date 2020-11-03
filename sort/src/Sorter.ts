export abstract class Sorter {
  abstract length: number;
  abstract greaterIndexValue(j: number, k: number): Sorter.Greater;
  abstract swapIndexValues(j: number, k: number): void;
  abstract toString(): string;

  sort(): string {
    const { length } = this;
    for (let i = 0; i < length; i++) {
      for (let j = 0, k = 1; k < length - i; j++, k++) {
        if (this.greaterIndexValue(j, k) == Sorter.Greater.isLeft) {
          this.swapIndexValues(j, k);
        }
      }
    }
    return this.toString();
  }
}

export namespace Sorter {
  export enum Greater {
    isLeft = -1,
    neither,
    isRight,
  }
}
