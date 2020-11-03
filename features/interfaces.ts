module interfaces {
  interface Printable {
    summary(): string;
  }

  const oldCivic = {
    name: "Civic",
    year: new Date(2000),
    broken: true,
    summary(): string {
      return `Name: ${this.name}`;
    },
  };

  const drink = {
    color: "brown",
    carbonated: false,
    sugar: 20,
    summary(): string {
      return `This drink has ${this.sugar} grams of sugar`;
    },
  };

  const printSummary = (printable: Printable): void => {
    console.log(printable.summary());
  };

  printSummary(oldCivic);
  printSummary(drink);
}
