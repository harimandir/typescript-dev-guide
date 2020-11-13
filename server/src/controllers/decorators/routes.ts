import "reflect-metadata";

function bindRouteMethod(method: string) {
  return function (path: string): Function {
    return function (target: any, key: string, desc: PropertyDescriptor): void {
      Reflect.defineMetadata("method", method, target, key);
      Reflect.defineMetadata("path", path, target, key);
    };
  };
}

export const get = bindRouteMethod("get");
export const post = bindRouteMethod("post");
export const put = bindRouteMethod("put");
export const patch = bindRouteMethod("patch");
export const del = bindRouteMethod("delete");
