import { Router, Request, Response } from "express";

const router = Router();

router.get("/login", (req: Request, res: Response) => {
  res.send(`
    <form method="post">
      <div>
        <label>Email</label>
        <input name="email" />
      </div>
      <div>
        <label>Password</label>
        <input name="password" type="password" />
      </div>
      <button>Submit</button>
    </form>
  `);
});

router.post("/login", (req: Request, res: Response) => {
  const { nothing } = req.body;
  res.send(nothing.toUpperCase());
});

export { router };
