import "reflect-metadata";
import { Request, Response, NextFunction, RequestHandler } from "express";

import { AppRouter } from "../../AppRouter";
import { Methods } from "./Methods";
import { MetadataKeys } from "./MetadataKeys";
import { requiredValues } from "./requiredValues";

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
        const required: string[] =
          Reflect.getMetadata(MetadataKeys.RequiredValues, prototype, key) ??
          [];
        let validateRequired = validateRequiredValues(required);

        const middlewares: RequestHandler[] =
          Reflect.getMetadata(MetadataKeys.Middlware, prototype, key) ?? [];
        AppRouter.getInstance()[method](
          `${routePrefix}${path}`,
          validateRequired,
          ...middlewares,
          routeHandler
        );
      }
    }
  };
}

function validateRequiredValues(props: string[]): RequestHandler {
  return function (req: Request, res: Response, next: NextFunction): void {
    if (props) {
      for (let prop in props) {
        if (req.body[prop] === undefined) {
          res.status(400).send(`<div>Invalid request</div>`);
          return;
        }
      }
    }
    next();
    return;
  };
}
