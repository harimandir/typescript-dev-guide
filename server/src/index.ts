import express from "express";

import { router as rootRouter } from "./routes/root";
import { router as loginRouter } from "./routes/login";
import { router as logoutRouter } from "./routes/logout";
import { requireAuth } from "./routes/middleware/requireAuth";
import { router as protectedRouter } from "./routes/protected";

import { router } from "./controllers/decorators/controller";
import "./controllers/LoginController";

import bodyParser from "body-parser";
import cookieSession from "cookie-session";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cookieSession({
    keys: ["signing-key", "verification-key-1", "verification-key-2", "..."],
  })
);

app.use("/", rootRouter);
app.use("/login", loginRouter);
app.use("/logout", logoutRouter);
app.use("/protected", requireAuth, protectedRouter);

app.use(router);

app.listen(3000, () => console.log("Listening on port 3000"));
