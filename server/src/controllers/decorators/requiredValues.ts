import "reflect-metadata";
import { RequestHandler } from "express";
import { MetadataKeys } from "./MetadataKeys";

export function requiredValues(...props: string[]) {
  return function (target: any, key: string, desc: PropertyDescriptor) {
    const required: string[] =
      Reflect.getMetadata(MetadataKeys.RequiredValues, target, key) ?? [];

    Reflect.defineMetadata(
      MetadataKeys.RequiredValues,
      [...required, ...props],
      target,
      key
    );
  };
}
