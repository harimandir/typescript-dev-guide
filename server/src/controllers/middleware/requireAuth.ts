import { Request, Response, NextFunction } from "express";

function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if (req.session?.loggedIn) {
    next();
    return;
  } else {
    res.status(401);
    res.send(`
    <div>
      <div>Not authorized</div>
    </div>
  `);
  }
}

export { requireAuth };
