module decorators {
  class Boat {
    @propertyDecorator
    color: string = "red";

    @accessorDecorator
    get formattedColor(): string {
      return `This boat is ${this.color}`;
    }

    @logError("sunk")
    pilot(
      @parameterDecorator speed: number,
      @parameterDecorator wake: boolean
    ): void {
      throw new Error();
      console.log("float");
    }
  }

  function propertyDecorator(target: any, key: string) {
    // PropertyDescriptor is not included in the function signature
    // and the property value is not accsesible because it is assigned at runtime
    console.log({ target, key }, `target.${key} == ${target[key]}`);
  }

  function accessorDecorator(
    target: any,
    key: string,
    desc: PropertyDescriptor
  ) {
    // this works just like any other method
    // PropertyDescriptor is included in the function signature
    // and the accessor is a property of the prototype
    console.log({ target, key, desc }, `target.${key} == ${target[key]}`);
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

  function parameterDecorator(target: any, key: string, index: number) {
    // parameter decorators give the method name and the argument index
    console.log({ target, key, index });
  }
}
