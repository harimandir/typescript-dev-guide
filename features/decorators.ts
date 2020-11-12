module decorators {
  class Boat {
    color: string = "red";

    get formattedColor(): string {
      return `This boat is ${this.color}`;
    }

    @logError
    pilot(): void {
      throw new Error("sink");
      console.log("float");
    }
  }

  function logError(target: any, key: string, desc: PropertyDescriptor): void {
    console.log({ target, key, desc });
  }
}
