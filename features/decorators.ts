module decorators {
  class Boat {
    color: string = "red";

    get formattedColor(): string {
      return `This boat is ${this.color}`;
    }

    @testDecorator
    pilot(): void {
      console.log("float");
    }
  }

  function testDecorator(target: any, key: string): void {
    console.log({ target, key });
  }
}
