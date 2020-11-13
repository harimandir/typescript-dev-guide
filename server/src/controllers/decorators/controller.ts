import "reflect-metadata";
import { RequestHandler } from "express";

import { AppRouter } from "../../AppRouter";
import { Methods } from "./Methods";
import { MetadataKeys } from "./MetadataKeys";

export function controller(routePrefix: string): Function {
  return function (targetConstructor: Function): void {
    const { prototype } = targetConstructor;
    for (let key in prototype) {
      const routeHandler = prototype[key];
      const method: Methods = Reflect.getMetadata(
        MetadataKeys.Method,
        prototype,
        key
      );
      const path = Reflect.getMetadata(MetadataKeys.Path, prototype, key);

      if (path !== undefined) {
        const middlewares: RequestHandler[] =
          Reflect.getMetadata(MetadataKeys.Middlware, prototype, key) ?? [];
        AppRouter.getInstance()[method](
          `${routePrefix}${path}`,
          ...middlewares,
          routeHandler
        );
      }
    }
  };
}
