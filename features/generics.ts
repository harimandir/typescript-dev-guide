module generics {
  class ArrayOfStrings {
    constructor(public values: string[]) {}

    at(index: number): string {
      return this.values[index];
    }
  }

  class ArrayOfNumbers {
    constructor(public values: number[]) {}

    at(index: number): number {
      return this.values[index];
    }
  }

  class ArrayOfAnything<T> {
    constructor(public values: T[]) {}

    at(index: number): T {
      return this.values[index];
    }
  }

  new ArrayOfAnything<string>(["something", "something else"]);
}
