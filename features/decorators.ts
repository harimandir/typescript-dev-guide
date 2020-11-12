module decorators {
  class Boat {
    color: string = "red";

    get formattedColor(): string {
      return `This boat is ${this.color}`;
    }

    @logError
    pilot(): void {
      throw new Error("sunk");
      console.log("float");
    }
  }

  function logError(target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;

    desc.value = function () {
      try {
        method();
      } catch (e: any) {
        if (e instanceof Error) {
          console.log(e.message);
        }
      }
    };
  }

  new Boat().pilot();
}
