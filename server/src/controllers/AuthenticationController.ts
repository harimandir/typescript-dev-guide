import { Request, Response } from "express";
import { get, controller, post } from "./decorators";
import { Methods } from "./decorators/Methods";
import { requiredInputs } from "./decorators/requiredInputs";

@controller("/auth")
class AuthController {
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

  @post("/login")
  @requiredInputs("email", "password")
  postLogin(req: Request, res: Response): void {
    const { email, password } = req.body;
    if (email === "email" && password === "password") {
      req.session = { loggedIn: true };
      res.redirect("/");
    } else {
      res.send("Invalid login");
    }
  }

  @get("/logout")
  getLogout(req: Request, res: Response): void {
    req.session = null;
    res.redirect("/");
  }
}
