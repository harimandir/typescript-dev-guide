import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  req.session = null;
  res.redirect("/");
});

export { router };
