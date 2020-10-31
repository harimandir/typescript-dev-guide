const drink = {
  color: "brown",
  carbonated: false,
  sugar: 20,
};

// Type alias for a tuple
type Drink = [string, boolean, number];

const chai: Drink = ["brown", false, 20];
const water: Drink = ["clear", false, 0];
const cola: Drink = ["brown", true, 40];

// Tuples don't include much information about their values
const carSpecs: [number, number] = [400, 3354];

// Objects may be more useful in many cases
const carStats: { horsepower: number; weight: number } = {
  horsepower: 400,
  weight: 3354,
};
