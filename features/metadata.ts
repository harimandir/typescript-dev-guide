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
}
