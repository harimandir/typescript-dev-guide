import "reflect-metadata";
import { Router } from "express";

export const router = Router();

export function controller(routePrefix: string): Function {
  return function (targetContructor: Function): void {
    const { prototype } = targetContructor;
    for (let key in prototype) {
      const routeHandler = prototype[key];
      const path = Reflect.getMetadata("path", prototype, key);

      if (path !== undefined) {
        router.get(`${routePrefix}${path}`, routeHandler);
      }
    }
  };
}
