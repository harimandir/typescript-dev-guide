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

  const array = new ArrayOfAnything(["something", "something else"]);

  // Generics with functions
  function printStrings(array: string[]): void {
    for (let n = 0; n < array.length; n++) {
      console.log(array[n]);
    }
  }

  function printNumbers(array: number[]): void {
    for (let n = 0; n < array.length; n++) {
      console.log(array[n]);
    }
  }

  function printAnything<T>(array: T[]): void {
    for (let n = 0; n < array.length; n++) {
      console.log(array[n]);
    }
  }

  printAnything<string>(["array", "of", "strings"]);
}
