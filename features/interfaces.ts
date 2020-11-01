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

const printSummary = (printable: Printable): void => {
  console.log(printable.summary());
};

printSummary(oldCivic);
