const carMakers = ["ford", "honda", "general motors"];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [];

// type annotation on arrays
// 1) Helps with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// 2) Detects incompatible values
carMakers.push(100);

// 3) Helps with Array method inputs and autocompletion
carMakers.map((car: string): string => car.toUpperCase());

// mixed types
const importantDates: (Date | string)[] = [new Date()];
importantDates.push("2020-11-03");
importantDates.push(new Date());
