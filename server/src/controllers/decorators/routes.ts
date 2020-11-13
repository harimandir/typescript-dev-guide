import "reflect-metadata";

import { Methods } from "./Methods";

function bindRouteMethod(method: string) {
  return function (path: string): Function {
    return function (target: any, key: string, desc: PropertyDescriptor): void {
      Reflect.defineMetadata("method", method, target, key);
      Reflect.defineMetadata("path", path, target, key);
    };
  };
}

export const get = bindRouteMethod(Methods.get);
export const post = bindRouteMethod(Methods.post);
export const put = bindRouteMethod(Methods.put);
export const patch = bindRouteMethod(Methods.patch);
export const del = bindRouteMethod(Methods.delete);
