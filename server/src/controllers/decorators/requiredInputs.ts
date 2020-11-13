import "reflect-metadata";
import { MetadataKeys } from "./MetadataKeys";

export function requiredInputs(...props: string[]) {
  return function (target: any, key: string, desc: PropertyDescriptor) {
    const required: string[] =
      Reflect.getMetadata(MetadataKeys.RequiredInputs, target, key) ?? [];

    Reflect.defineMetadata(
      MetadataKeys.RequiredInputs,
      [...required, ...props],
      target,
      key
    );
  };
}
