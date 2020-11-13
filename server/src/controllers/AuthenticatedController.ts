import { Request, Response } from "express";
import { requireAuth } from "../routes/middleware/requireAuth";
import { get, controller, use } from "./decorators";

@controller("/protected")
class AuthenticatedController {
  @get("/")
  @use(requireAuth)
  getRoot(req: Request, res: Response): void {
    res.send(`
        <div>
          <div>Welcome to protected route, logged in user!</div>
        </div>
      `);
  }
}
