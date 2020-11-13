import "reflect-metadata";
import { Request, Response, NextFunction, RequestHandler } from "express";
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
        const required: string[] =
          Reflect.getMetadata(MetadataKeys.RequiredInputs, prototype, key) ??
          [];
        let validateInput = buildRequiredInputsValidator(required);

        const middlewares: RequestHandler[] =
          Reflect.getMetadata(MetadataKeys.Middleware, prototype, key) ?? [];
        AppRouter.getInstance()[method](
          `${routePrefix}${path}`,
          validateInput,
          ...middlewares,
          routeHandler
        );
      }
    }
  };
}

function buildRequiredInputsValidator(props: string[]): RequestHandler {
  return function (req: Request, res: Response, next: NextFunction): void {
    if (props) {
      for (let prop of props) {
        if (req?.body[prop] === undefined) {
          res.status(422).send(`
          <div>Invalid request</div>
          <div>${prop} required</div>
          `);
          return;
        }
      }
    }
    next();
    return;
  };
}
