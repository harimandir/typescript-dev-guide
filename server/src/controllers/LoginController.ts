import { Router, Request, Response, NextFunction } from "express";

@controller("/login")
class LoginController {
  @get("/")
  getLogin(req: Request, res: Response): void {
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
  }
}
