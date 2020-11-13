import "reflect-metadata";
import { AppRouter } from "../../AppRouter";
import { Methods } from "./Methods";
import { MetadataKeys } from "./MetadataKeys";

export function controller(routePrefix: string): Function {
  return function (targetContructor: Function): void {
    const { prototype } = targetContructor;
    for (let key in prototype) {
      const routeHandler = prototype[key];
      const method: Methods = Reflect.getMetadata(
        MetadataKeys.Method,
        prototype,
        key
      );
      const path = Reflect.getMetadata(MetadataKeys.Path, prototype, key);

      if (path !== undefined) {
        AppRouter.getInstance()[method](`${routePrefix}${path}`, routeHandler);
      }
    }
  };
}
