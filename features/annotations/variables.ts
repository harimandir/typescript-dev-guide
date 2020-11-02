namespace annotations.variables {
  let apples: number = 5;
  let speed: string = "fast";
  let hasName: boolean = true;

  let nothingMuch: null = null;
  let nothing: undefined = undefined;

  // built in objects
  let now: Date = new Date();

  // Arrays
  let colors: string[] = ["red", "green", "blue"];
  let myNumbers: number[] = [1, 2, 3];
  let truths: boolean[] = [true, true, false];

  // classes
  class Car {}
  let car: Car = new Car();

  // Object literals
  let point: { x: number; y: number } = { x: 10, y: 20 };

  // Functions
  const logNumber: (i: number) => void = (i: number) => console.log(i);

  // When to use annotations
  // 1) When using functions that return the 'any' type
  const json = '{ "x": 10, "y": 20 }';
  const coordinates: { x: number; y: number } = JSON.parse(json);
  console.log(coordinates); // { x: 10, y: 20 }

  // 2) When declaring a variable on one line and initialing it later
  let words = ["red", "green", "blue"];
  let foundWord: boolean;

  for (let i = 0; i < words.length; i++) {
    if (words[i] == "green") {
      foundWord = true;
      break;
    }
  }

  // 3) When declaring variables whose type cannot be inferred correctly
  let numbers = [-10, -1, 12];
  let numberAboveZero: boolean | number = false;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
      numberAboveZero = numbers[i];
    }
  }
}
