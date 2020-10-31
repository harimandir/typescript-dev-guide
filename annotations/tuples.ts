const drink = {
  color: "brown",
  carbonated: false,
  sugar: 20,
};

type Drink = [string, boolean, number];

const chai: Drink = ["brown", false, 20];
const water: Drink = ["clear", false, 0];
const cola: Drink = ["brown", true, 40];
