// return type can be inferred,
// but this won't help us avoid mistakenly returning the wrong type
const add = (a: number, b: number) => {
  return a + b;
};

const subtract = (a: number, b: number): number => {
  return a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
};

const throwAlways = (message: string): never => {
  throw new Error();
};

const errorOrString = (message: string): string => {
  if (!message) {
    throw new Error();
  }
  return message;
};

const errorOrVoid = (message: string): void => {
  if (!message) {
    throw new Error();
  }
};

const todaysWeather = {
  date: new Date(),
  weather: "sunny",
};

const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);
