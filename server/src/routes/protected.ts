import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  if (req.session?.loggedIn) {
    res.send(`
      <div>
        <div>Welcome to protected route, logged in user!</div>
      </div>
    `);
  } else {
    res.send(`
    <div>
      <div>Access Denied</div>
    </div>
  `);
  }
});

export { router };
