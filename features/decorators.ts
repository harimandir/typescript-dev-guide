module decorators {
  class Boat {
    @propertyDecorator
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

  function propertyDecorator(target: any, key: string) {
    // desc is not included in the function signature
    // and the property value is not accsesible because it is assigned at runtime
    console.log({ target, key }, `target.${key} == ${target.key}`);
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
}
