module decorators {
  class Boat {
    color: string = "red";

    get formattedColor(): string {
      return `This boat is ${this.color}`;
    }

    @logError("sunk")
    pilot(): void {
      throw new Error();
      console.log("float");
    }
  }

  function logError(message: string) {
    return function (target: any, key: string, desc: PropertyDescriptor): void {
      const method = desc.value;

      desc.value = function () {
        try {
          method();
        } catch (e: any) {
          console.log(message);
        }
      };
    };
  }

  new Boat().pilot();
}
