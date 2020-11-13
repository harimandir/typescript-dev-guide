import "reflect-metadata";

module metadata {
  const something = {
    value: "example",
  };

  Reflect.defineMetadata("message", "Hello, World!", something);
  Reflect.defineMetadata("number", 42, something);

  console.log(Reflect.getMetadata("message", something));
  console.log(Reflect.getMetadata("number", something));

  Reflect.defineMetadata(
    "propertyMetadata",
    "this metadata is attached to an object property",
    something,
    "value"
  );

  console.log(Reflect.getMetadata("propertyMetadata", something, "value"));

  @printMetadata
  class House {
    color = "white";

    @secretPassword("open sesame")
    visit(): void {
      console.log("knock, knock");
    }
  }

  function secretPassword(password: string) {
    return function (target: House, key: string) {
      Reflect.defineMetadata("secretPassword", password, target, "visit");
    };
  }

  console.log(
    "House.prototype.visit secretPassword == ",
    Reflect.getMetadata("secretPassword", House.prototype, "visit")
  );

  function printMetadata(constructor: typeof House) {
    for (let key in constructor.prototype) {
      const secret = Reflect.getMetadata(
        "secretPassword",
        constructor.prototype,
        key
      );
      if (secret !== undefined) {
        console.log(
          `printMetadata secretPassword found for House.prototype.${key} == ${secret}`
        );
      }
    }
  }
}
