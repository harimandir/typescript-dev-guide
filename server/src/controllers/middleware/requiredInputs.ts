import { RequestHandler, Request, Response, NextFunction } from "express";

export function requiredInputs(props: string[]): RequestHandler {
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
