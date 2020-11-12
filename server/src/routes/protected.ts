import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send(`
      <div>
        <div>Welcome to protected route, logged in user!</div>
      </div>
    `);
});

export { router };
