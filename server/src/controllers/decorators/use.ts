import "reflect-metadata";
import { RequestHandler } from "express";
import { MetadataKeys } from "./MetadataKeys";

export function use(middleware: RequestHandler) {
  return function (target: any, key: string, desc: PropertyDescriptor) {
    const middlewares: RequestHandler[] =
      Reflect.getMetadata(MetadataKeys.Middlware, target, key) ?? [];

    Reflect.defineMetadata(
      MetadataKeys.Middlware,
      [...middlewares, middleware],
      target,
      key
    );
  };
}
