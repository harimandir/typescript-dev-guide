import "reflect-metadata";

import { MetadataKeys } from "./MetadataKeys";
import { Methods } from "./Methods";

function bindRouteMethod(method: string) {
  return function (path: string): Function {
    return function (target: any, key: string, desc: PropertyDescriptor): void {
      Reflect.defineMetadata(MetadataKeys.Method, method, target, key);
      Reflect.defineMetadata(MetadataKeys.Path, path, target, key);
    };
  };
}

export const get = bindRouteMethod(Methods.Get);
export const post = bindRouteMethod(Methods.Post);
export const put = bindRouteMethod(Methods.Put);
export const patch = bindRouteMethod(Methods.Patch);
export const del = bindRouteMethod(Methods.Delete);
