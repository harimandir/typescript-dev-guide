module classes {
  class Vehicle {
    constructor(public color: string = "unknown") {}

    protected honk(): void {
      console.log("beep");
    }
  }

  // Protected methods are only accessible within the class or subclasses
  const vehicle = new Vehicle("white");
  // vehicle.honk();
  console.log(vehicle.color);

  class Car extends Vehicle {
    constructor(public wheels: number, color?: string) {
      super(color);
    }
    private drive(): void {
      console.log("vroom");
    }
    startDriving(): void {
      this.drive();
      this.honk();
    }
  }

  const car = new Car(4);
  car.startDriving();
  console.log(car.wheels);
  console.log(car.color);
}
