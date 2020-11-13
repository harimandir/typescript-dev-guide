import { Request, Response } from "express";
import { get, controller } from "./decorators";
import { Methods } from "./decorators/Methods";

@controller("/auth")
class LoginController {
  @get("/login")
  getLogin(req: Request, res: Response): void {
    res.send(`
        <form method="${Methods.Post}">
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
  }
}
