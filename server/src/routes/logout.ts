import { router } from "./login";
import { Request, Response } from "express";

router.get("/logout", (req: Request, res: Response) => {
  req.session = null;
  res.redirect("/");
});

export { router };
