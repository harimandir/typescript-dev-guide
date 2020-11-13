import "reflect-metadata";

export function controller(routePrefix: string): Function {
  return function (targetContructor: Function): void {
    for (let key in targetContructor.prototype) {
      const routeHandler = targetContructor.prototype[key];

      const path = Reflect.getMetadata("path", targetContructor, key);
    }
  };
}
