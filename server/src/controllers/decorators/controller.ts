import "reflect-metadata";
import { AppRouter } from "../../AppRouter";
import { Methods } from "./Methods";

export function controller(routePrefix: string): Function {
  return function (targetContructor: Function): void {
    const { prototype } = targetContructor;
    for (let key in prototype) {
      const routeHandler = prototype[key];
      const method: Methods = Reflect.getMetadata("method", prototype, key);
      const path = Reflect.getMetadata("path", prototype, key);

      if (path !== undefined) {
        AppRouter.getInstance()[method](`${routePrefix}${path}`, routeHandler);
      }
    }
  };
}
